/**
 * Identificação do projeto e canais de contato.
 * Edite SOMENTE este arquivo para trocar nomes e contatos em todo o site.
 *
 * Para trocar o e-mail, o WhatsApp ou os nomes, altere os valores abaixo e publique de novo.
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
    name: "Prof. Renato Pereira Orenha",
    description: "Orienta o projeto e acompanha as atividades de extensão.",
  },
  contact: {
    email: "gabrielcaastrobri@gmail.com",
    whatsappLabel: "(16) 98220-2029",
    whatsappLink: "https://wa.me/5516982202029",
    hours: "Segunda a sexta, das 9h às 17h",
    responseTime: "Respondemos em até 2 dias úteis.",
  },
} as const;
