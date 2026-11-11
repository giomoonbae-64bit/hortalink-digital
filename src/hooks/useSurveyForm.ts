import { useCallback, useRef, useState, type FormEvent } from "react";
import type { FieldName, FormErrors, SurveyFormState } from "../types/survey";
import { toPayload, validateSurvey } from "../services/validation";
import { NotConfiguredError, submitSurvey } from "../services/surveyService";

export type SubmitStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string; notConfigured: boolean };

export const initialForm: SurveyFormState = {
  name: "",
  hadGarden: "",
  learnedNew: "",
  mostInteresting: "",
  willApply: "",
  feelsPrepared: "",
  infoQuality: "",
  wouldRecommend: "",
  comments: "",
  consent: false,
  website: "",
};

/** Ordem dos campos na tela, usada para focar o primeiro erro. */
const FIELD_ORDER: FieldName[] = [
  "name",
  "hadGarden",
  "learnedNew",
  "mostInteresting",
  "willApply",
  "feelsPrepared",
  "infoQuality",
  "wouldRecommend",
  "comments",
  "consent",
];

export function useSurveyForm() {
  const [form, setForm] = useState<SurveyFormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  const setField = useCallback(<K extends keyof SurveyFormState>(key: K, value: SurveyFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Limpa o erro do campo assim que a pessoa corrige.
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key as FieldName];
      return next;
    });
  }, []);

  const focusFirstError = (found: FormErrors) => {
    const first = FIELD_ORDER.find((f) => found[f]);
    if (!first || !formRef.current) return;
    const el =
      formRef.current.querySelector<HTMLElement>(`#${first}`) ??
      formRef.current.querySelector<HTMLElement>(`input[name="${first}"]`);
    el?.focus();
    el?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (status.kind === "submitting") return;

    // Campo-isca preenchido: provavelmente um robô. Não enviamos nada.
    if (form.website.trim() !== "") {
      setStatus({ kind: "success" });
      return;
    }

    const found = validateSurvey(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ kind: "idle" });
      // Aguarda a renderização das mensagens para focar o primeiro campo com erro.
      setTimeout(() => focusFirstError(found), 0);
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      await submitSurvey(toPayload(form));
      setStatus({ kind: "success" });
      setForm(initialForm);
    } catch (err) {
      if (err instanceof NotConfiguredError) {
        setStatus({
          kind: "error",
          notConfigured: true,
          message:
            "Sua resposta não foi enviada: o recebimento de respostas ainda não foi configurado neste site. Avise a equipe do projeto.",
        });
      } else {
        setStatus({
          kind: "error",
          notConfigured: false,
          message: err instanceof Error ? err.message : "Ocorreu um erro inesperado. Tente novamente.",
        });
      }
    }
  };

  const reset = () => {
    setForm(initialForm);
    setErrors({});
    setStatus({ kind: "idle" });
  };

  return { form, errors, status, formRef, setField, handleSubmit, reset };
}
