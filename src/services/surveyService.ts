import type { SurveyPayload } from "../types/survey";

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim();
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim();
const GOOGLE_SCRIPT_URL = (import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined)?.trim();

export type StorageProvider = "supabase" | "google-sheets" | "none";

/** Indica qual armazenamento está configurado (Supabase tem prioridade). */
export function getStorageProvider(): StorageProvider {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) return "supabase";
  if (GOOGLE_SCRIPT_URL) return "google-sheets";
  return "none";
}

export class NotConfiguredError extends Error {
  constructor() {
    super("O armazenamento das respostas ainda não foi configurado.");
    this.name = "NotConfiguredError";
  }
}

export class SubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SubmitError";
  }
}

async function sendToSupabase(payload: SurveyPayload): Promise<void> {
  const endpoint = `${SUPABASE_URL!.replace(/\/+$/, "")}/rest/v1/survey_responses`;
  const key = SUPABASE_ANON_KEY!;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    apikey: key,
    // "minimal": o servidor não devolve a linha criada (a chave pública não pode ler os dados).
    Prefer: "return=minimal",
  };
  // Chaves antigas (anon) são JWT e podem ir no Authorization. As novas "publishable" (sb_publishable_...) não são JWT.
  if (key.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`;

  let response: Response;
  try {
    response = await fetch(endpoint, { method: "POST", headers, body: JSON.stringify(payload) });
  } catch {
    throw new SubmitError("Não foi possível conectar ao servidor. Verifique sua internet e tente novamente.");
  }
  if (!response.ok) {
    throw new SubmitError("O servidor não aceitou o envio. Tente novamente em instantes.");
  }
}

async function sendToGoogleSheets(payload: SurveyPayload): Promise<void> {
  let response: Response;
  try {
    // "text/plain" evita a requisição de pré-verificação (CORS preflight), que o Apps Script não responde.
    response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new SubmitError("Não foi possível conectar ao servidor. Verifique sua internet e tente novamente.");
  }

  let result: { ok?: boolean } | null = null;
  try {
    result = (await response.json()) as { ok?: boolean };
  } catch {
    result = null;
  }
  // Só consideramos sucesso quando o script confirma explicitamente.
  if (!response.ok || !result?.ok) {
    throw new SubmitError("Não recebemos a confirmação do servidor. Tente novamente em instantes.");
  }
}

/**
 * Envia a resposta ao armazenamento online configurado.
 * Nunca simula sucesso: sem configuração, lança NotConfiguredError.
 */
export async function submitSurvey(payload: SurveyPayload): Promise<void> {
  switch (getStorageProvider()) {
    case "supabase":
      return sendToSupabase(payload);
    case "google-sheets":
      return sendToGoogleSheets(payload);
    default:
      throw new NotConfiguredError();
  }
}
