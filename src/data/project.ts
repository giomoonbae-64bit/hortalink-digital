/**
 * Identificação do projeto e canais de contato.
 * Edite SOMENTE este arquivo para trocar nomes e contatos em todo o site.
 *
 * ATENÇÃO: o e-mail e o WhatsApp abaixo são FICTÍCIOS (exemplo).
 * Troque pelos canais reais da equipe antes de divulgar o site.
 */
export const project = {
  name: "HortaLink Digital",
  institution: {
    name: "Universidade de Franca",
    short: "UNIFRAN",
    city: "Franca (SP)",
  },
  team: {
    name: "Equipe HortaLink Digital",
    description: "Estudantes da UNIFRAN responsáveis pelo conteúdo, pelo site e pela intervenção educativa.",
    // Opcional: liste os integrantes, ex.: ["Nome Sobrenome", "Nome Sobrenome"]
    members: [] as string[],
  },
  mentor: {
    role: "Responsável pela mentoria",
    // Troque pelo nome real do(a) mentor(a).
    name: "Prof.(a) [nome do(a) mentor(a)]",
    description: "Orienta o projeto e acompanha as atividades de extensão.",
  },
  contact: {
    email: "contato.hortalink@exemplo.com.br",
    whatsappLabel: "(16) 99999-0000",
    whatsappLink: "https://wa.me/5516999990000",
    hours: "Segunda a sexta, das 9h às 17h",
    responseTime: "Respondemos em até 2 dias úteis.",
  },
} as const;
