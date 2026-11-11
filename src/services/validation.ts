import type { FormErrors, SurveyFormState, SurveyPayload } from "../types/survey";

export const MAX_NAME = 80;
export const MAX_COMMENTS = 1000;

const REQUIRED_MESSAGE = "Selecione uma opção para continuar.";

/** Valida o formulário e devolve um objeto com mensagens por campo. */
export function validateSurvey(form: SurveyFormState): FormErrors {
  const errors: FormErrors = {};

  if (form.name.length > MAX_NAME) {
    errors.name = `O nome deve ter no máximo ${MAX_NAME} caracteres.`;
  }
  if (!form.hadGarden) errors.hadGarden = REQUIRED_MESSAGE;
  if (!form.learnedNew) errors.learnedNew = REQUIRED_MESSAGE;
  if (!form.mostInteresting) errors.mostInteresting = REQUIRED_MESSAGE;
  if (!form.willApply) errors.willApply = REQUIRED_MESSAGE;
  if (!form.feelsPrepared) errors.feelsPrepared = REQUIRED_MESSAGE;
  if (!form.infoQuality) errors.infoQuality = REQUIRED_MESSAGE;
  if (!form.wouldRecommend) errors.wouldRecommend = REQUIRED_MESSAGE;
  if (form.comments.length > MAX_COMMENTS) {
    errors.comments = `O comentário deve ter no máximo ${MAX_COMMENTS} caracteres.`;
  }
  if (!form.consent) {
    errors.consent = "Para enviar, é necessário concordar com o aviso de privacidade.";
  }

  return errors;
}

/** Converte o estado (já validado) no formato enviado ao armazenamento. */
export function toPayload(form: SurveyFormState): SurveyPayload {
  const name = form.name.trim();
  const comments = form.comments.trim();
  return {
    name: name === "" ? null : name,
    had_garden: form.hadGarden as SurveyPayload["had_garden"],
    learned_new: form.learnedNew as SurveyPayload["learned_new"],
    most_interesting: form.mostInteresting as SurveyPayload["most_interesting"],
    will_apply: form.willApply as SurveyPayload["will_apply"],
    feels_prepared: Number(form.feelsPrepared),
    info_quality: Number(form.infoQuality),
    would_recommend: form.wouldRecommend as SurveyPayload["would_recommend"],
    comments: comments === "" ? null : comments,
  };
}
