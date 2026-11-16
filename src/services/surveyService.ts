import type { SurveyPayload } from "../types/survey";

export class SubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SubmitError";
  }
}

/**
 * Envia a resposta para a API do site (/api/respostas), que grava no banco Neon.
 * Só considera sucesso quando o servidor confirma explicitamente a gravação.
 */
export async function submitSurvey(payload: SurveyPayload): Promise<void> {
  let response: Response;
  try {
    response = await fetch("/api/respostas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new SubmitError("Não foi possível conectar ao servidor. Verifique sua internet e tente novamente.");
  }

  let result: { ok?: boolean; error?: string } | null = null;
  try {
    result = (await response.json()) as { ok?: boolean; error?: string };
  } catch {
    result = null;
  }

  if (!response.ok || !result?.ok) {
    throw new SubmitError(result?.error ?? "Não recebemos a confirmação do servidor. Tente novamente em instantes.");
  }
}
