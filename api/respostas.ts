/**
 * Recebe as respostas da pesquisa e grava no Neon (PostgreSQL).
 *
 * Função serverless da Vercel: POST /api/respostas
 * Variável de ambiente obrigatória: DATABASE_URL (connection string do Neon).
 * A avaliação é anônima: nenhum dado pessoal (nome, IP, e-mail) é gravado.
 */
import { neon } from "@neondatabase/serverless";

const ALLOWED = {
  had_garden: ["sim_regularmente", "ja_tentei", "nunca"],
  learned_new: ["sim_muito", "sim_um_pouco", "nao"],
  most_interesting: ["horta_em_casa", "sustentabilidade", "economia_de_agua", "preservacao_ambiental"],
  will_apply: ["sim_varias", "sim_uma", "talvez", "nao"],
  would_recommend: ["sim", "talvez", "nao"],
} as const;

const MAX_COMMENTS = 1000;
const MAX_BODY_BYTES = 10_000;

function json(body: Record<string, unknown>, status = 200): Response {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function pick<K extends keyof typeof ALLOWED>(data: Record<string, unknown>, key: K): (typeof ALLOWED)[K][number] | null {
  const value = data[key];
  return typeof value === "string" && (ALLOWED[key] as readonly string[]).includes(value)
    ? (value as (typeof ALLOWED)[K][number])
    : null;
}

function scale(data: Record<string, unknown>, key: string): number | null {
  const value = data[key];
  return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= 5 ? value : null;
}

// A tabela é criada na primeira chamada de cada instância (idempotente).
// Você também pode rodar neon/schema.sql manualmente no SQL Editor do Neon.
let tableReady: Promise<void> | null = null;

function ensureTable(sql: ReturnType<typeof neon>): Promise<void> {
  tableReady ??= (async () => {
    await sql`
      create table if not exists survey_responses (
        id               uuid primary key default gen_random_uuid(),
        created_at       timestamptz not null default now(),
        had_garden       text not null check (had_garden in ('sim_regularmente','ja_tentei','nunca')),
        learned_new      text not null check (learned_new in ('sim_muito','sim_um_pouco','nao')),
        most_interesting text not null check (most_interesting in ('horta_em_casa','sustentabilidade','economia_de_agua','preservacao_ambiental')),
        will_apply       text not null check (will_apply in ('sim_varias','sim_uma','talvez','nao')),
        feels_prepared   smallint not null check (feels_prepared between 1 and 5),
        info_quality     smallint not null check (info_quality between 1 and 5),
        would_recommend  text not null check (would_recommend in ('sim','talvez','nao')),
        comments         text check (comments is null or char_length(comments) <= 1000)
      )
    `;
  })().catch((err) => {
    tableReady = null; // tenta de novo na próxima requisição
    throw err;
  });
  return tableReady;
}

export async function POST(request: Request): Promise<Response> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL não está configurada.");
    return json({ ok: false, error: "O recebimento de respostas ainda não foi configurado neste site." }, 503);
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return json({ ok: false, error: "Não foi possível ler o envio." }, 400);
  }
  if (raw.length > MAX_BODY_BYTES) {
    return json({ ok: false, error: "O envio é grande demais." }, 413);
  }

  let data: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) throw new Error("formato");
    data = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Envio inválido." }, 400);
  }

  const hadGarden = pick(data, "had_garden");
  const learnedNew = pick(data, "learned_new");
  const mostInteresting = pick(data, "most_interesting");
  const willApply = pick(data, "will_apply");
  const wouldRecommend = pick(data, "would_recommend");
  const feelsPrepared = scale(data, "feels_prepared");
  const infoQuality = scale(data, "info_quality");

  let comments: string | null = null;
  if (data.comments !== null && data.comments !== undefined) {
    if (typeof data.comments !== "string" || data.comments.length > MAX_COMMENTS) {
      return json({ ok: false, error: "Comentário inválido." }, 400);
    }
    comments = data.comments.trim() === "" ? null : data.comments.trim();
  }

  if (
    !hadGarden || !learnedNew || !mostInteresting || !willApply ||
    !wouldRecommend || feelsPrepared === null || infoQuality === null
  ) {
    return json({ ok: false, error: "Alguma resposta está faltando ou é inválida." }, 400);
  }

  try {
    const sql = neon(databaseUrl);
    await ensureTable(sql);
    await sql`
      insert into survey_responses
        (had_garden, learned_new, most_interesting, will_apply, feels_prepared, info_quality, would_recommend, comments)
      values
        (${hadGarden}, ${learnedNew}, ${mostInteresting}, ${willApply}, ${feelsPrepared}, ${infoQuality}, ${wouldRecommend}, ${comments})
    `;
  } catch (err) {
    console.error("Falha ao gravar no Neon:", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "Não foi possível salvar sua resposta agora. Tente novamente em instantes." }, 500);
  }

  return json({ ok: true }, 201);
}
