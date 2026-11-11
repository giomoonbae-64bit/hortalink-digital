export interface Reference {
  id: string;
  authors: string;
  title: string;
  publisher: string;
  year: string;
  url: string;
  /** Em quais seções do site esta fonte foi utilizada. */
  usedIn: string;
}

/**
 * Fontes consultadas. Todos os links foram abertos e conferidos durante o desenvolvimento.
 * Se a equipe adicionar novos conteúdos, acrescente aqui as fontes correspondentes
 * e confira se o link continua funcionando antes da publicação.
 */
export const references: Reference[] = [
  {
    id: "embrapa-cultivo-hortalicas",
    authors: "MAKISHIMA, N.; MELO, L. A. S.; COUTINHO, V. F.; ROSA, L. L.",
    title: "Cultivo de hortaliças (Projeto Horta Solidária)",
    publisher: "Embrapa Meio Ambiente, Jaguariúna (SP), 2ª ed. revisada",
    year: "2010",
    url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1122414/1/cartilha-horta-final2010.pdf",
    usedIn: "Horta em Casa",
  },
  {
    id: "embrapa-hortas-para",
    authors: "SOUZA, M. B.; MARTINS, V. C.",
    title: "Hortas: recomendações para cultivo no estado do Pará",
    publisher: "Embrapa Amazônia Oriental, Belém (PA), 1ª ed. (publicação digital)",
    year: "2024",
    url: "https://ainfo.cnptia.embrapa.br/digital/bitstream/doc/1168224/1/CartilhaHortas.pdf",
    usedIn: "Horta em Casa, Sustentabilidade",
  },
  {
    id: "mma-embrapa-compostagem",
    authors: "PROENÇA, L. C.; RODRIGUES, C. A. O.; LANA, M. M.",
    title: "Hortaliça não é só salada (fascículo sobre compostagem)",
    publisher: "Ministério do Meio Ambiente e Embrapa Hortaliças, 1ª ed.",
    year: "2021",
    url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1135274/1/HDJF-05-Compostagem-2021.pdf",
    usedIn: "Sustentabilidade",
  },
  {
    id: "akatu-agua",
    authors: "INSTITUTO AKATU; COMPANHIA DE ÁGUAS E ESGOTOS DE RORAIMA (CAER)",
    title: "Dicas para evitar o desperdício de água (Parte I – Água)",
    publisher: "Material disponibilizado pela Agência Nacional de Águas e Saneamento Básico (ANA), gov.br",
    year: "s.d.",
    url: "https://www.gov.br/ana/pt-br/todos-os-documentos-do-portal/documentos-cosus/arquivos/diversasdicasambientaisparaevitarodesperdicio.pdf/@@download/file",
    usedIn: "Economia de Água",
  },
  {
    id: "mma-epanb",
    authors: "BRASIL. MINISTÉRIO DO MEIO AMBIENTE E MUDANÇA DO CLIMA",
    title: "Estratégia e Plano de Ação Nacionais para a Biodiversidade – EPANB 2025–2030: sumário executivo",
    publisher: "MMA / Secretaria Nacional de Biodiversidade, Florestas e Direitos Animais",
    year: "2025",
    url: "https://www.gov.br/mma/pt-br/centrais-de-conteudo/publicacoes/biodiversidade-e-biomas/epanb-2025-2030-sumario-executivo.pdf",
    usedIn: "Preservação Ambiental",
  },
  {
    id: "ipea-ods12",
    authors: "INSTITUTO DE PESQUISA ECONÔMICA APLICADA (IPEA)",
    title: "ODS 12 – Consumo responsável (Objetivos de Desenvolvimento Sustentável)",
    publisher: "IPEA – Agenda 2030",
    year: "s.d.",
    url: "https://ipea.gov.br/ods/ods12_card.html",
    usedIn: "Sustentabilidade",
  },
];
