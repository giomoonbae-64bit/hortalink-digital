export type HadGarden = "sim_regularmente" | "ja_tentei" | "nunca";
export type LearnedNew = "sim_muito" | "sim_um_pouco" | "nao";
export type MostInteresting =
  | "horta_em_casa"
  | "sustentabilidade"
  | "economia_de_agua"
  | "preservacao_ambiental";
export type WillApply = "sim_varias" | "sim_uma" | "talvez" | "nao";
export type Scale = "1" | "2" | "3" | "4" | "5";
export type WouldRecommend = "sim" | "talvez" | "nao";

/** Estado do formulário (valores vazios "" enquanto a pessoa não responde). */
export interface SurveyFormState {
  name: string;
  hadGarden: HadGarden | "";
  learnedNew: LearnedNew | "";
  mostInteresting: MostInteresting | "";
  willApply: WillApply | "";
  feelsPrepared: Scale | "";
  infoQuality: Scale | "";
  wouldRecommend: WouldRecommend | "";
  comments: string;
  consent: boolean;
  /** Campo-isca contra robôs. Deve permanecer vazio. */
  website: string;
}

/** Dados efetivamente enviados ao armazenamento (já validados). */
export interface SurveyPayload {
  name: string | null;
  had_garden: HadGarden;
  learned_new: LearnedNew;
  most_interesting: MostInteresting;
  will_apply: WillApply;
  feels_prepared: number;
  info_quality: number;
  would_recommend: WouldRecommend;
  comments: string | null;
}

export type FieldName = keyof Omit<SurveyFormState, "website">;
export type FormErrors = Partial<Record<FieldName, string>>;
