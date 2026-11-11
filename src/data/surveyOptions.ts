import type {
  HadGarden,
  LearnedNew,
  MostInteresting,
  WillApply,
  WouldRecommend,
} from "../types/survey";

export interface Option<T extends string> {
  value: T;
  label: string;
}

export const hadGardenOptions: Option<HadGarden>[] = [
  { value: "sim_regularmente", label: "Sim, cultivava com regularidade" },
  { value: "ja_tentei", label: "Já tentei algumas vezes" },
  { value: "nunca", label: "Não, nunca cultivei" },
];

export const learnedNewOptions: Option<LearnedNew>[] = [
  { value: "sim_muito", label: "Sim, aprendi bastante" },
  { value: "sim_um_pouco", label: "Sim, aprendi um pouco" },
  { value: "nao", label: "Não, já conhecia os conteúdos" },
];

export const mostInterestingOptions: Option<MostInteresting>[] = [
  { value: "horta_em_casa", label: "Horta em Casa" },
  { value: "sustentabilidade", label: "Sustentabilidade" },
  { value: "economia_de_agua", label: "Economia de Água" },
  { value: "preservacao_ambiental", label: "Preservação Ambiental" },
];

export const willApplyOptions: Option<WillApply>[] = [
  { value: "sim_varias", label: "Sim, pretendo aplicar várias" },
  { value: "sim_uma", label: "Sim, pelo menos uma" },
  { value: "talvez", label: "Talvez" },
  { value: "nao", label: "Não pretendo" },
];

export const wouldRecommendOptions: Option<WouldRecommend>[] = [
  { value: "sim", label: "Sim" },
  { value: "talvez", label: "Talvez" },
  { value: "nao", label: "Não" },
];

export const preparedScale = [
  { value: "1", label: "Nada preparado(a)" },
  { value: "2", label: "Pouco preparado(a)" },
  { value: "3", label: "Mais ou menos" },
  { value: "4", label: "Preparado(a)" },
  { value: "5", label: "Muito preparado(a)" },
] as const;

export const qualityScale = [
  { value: "1", label: "Ruim" },
  { value: "2", label: "Regular" },
  { value: "3", label: "Boa" },
  { value: "4", label: "Muito boa" },
  { value: "5", label: "Excelente" },
] as const;
