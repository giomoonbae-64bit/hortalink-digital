export interface InfoItem {
  title: string;
  text: string;
}

export interface TopicContent {
  id: "horta-em-casa" | "sustentabilidade" | "economia-de-agua" | "preservacao-ambiental";
  navLabel: string;
  title: string;
  kicker: string;
  intro: string;
  image: string;
  imageAlt: string;
  items: InfoItem[];
  stepsTitle: string;
  steps: string[];
  tipTitle: string;
  tips: string[];
  note?: string;
}

export const hortaEmCasa: TopicContent = {
  id: "horta-em-casa",
  navLabel: "Horta em Casa",
  kicker: "Comece pequeno",
  title: "Horta em Casa",
  intro:
    "Você não precisa de quintal para cultivar alimentos. Um parapeito de janela, uma varanda ou alguns vasos já são suficientes para começar. O segredo é escolher plantas simples, observar com calma e aprender no caminho.",
  image: "/images/horta-em-casa.svg",
  imageAlt: "Ilustração de vasos com temperos e folhosas em uma janela ensolarada.",
  items: [
    {
      title: "Escolha o lugar",
      text: "Procure um local ensolarado e bem iluminado durante a maior parte do dia, longe de sombras fortes de árvores ou construções. A Embrapa também recomenda ter água de boa qualidade por perto.",
    },
    {
      title: "Plantas para começar",
      text: "Prefira cultivos de ciclo curto e fáceis de cuidar: alface, rúcula, couve, cebolinha, coentro e salsa. Plantas maiores, como tomate, pimentão e quiabo, ocupam mais espaço e costumam dar mais trabalho.",
    },
    {
      title: "Solo e adubo",
      text: "Use terra solta e rica em matéria orgânica. Composto caseiro ou adubo orgânico bem curtido melhoram o solo. Em vasos, misture terra e composto e deixe a mistura levemente úmida.",
    },
    {
      title: "Água na medida",
      text: "Regue nas horas mais frescas do dia, de preferência pela manhã. Nas primeiras semanas, as folhosas costumam precisar de rega diária. O solo deve ficar úmido, mas nunca encharcado.",
    },
    {
      title: "Pequenos espaços",
      text: "Garrafas PET, calhas e outros recipientes reaproveitados podem virar canteiros. Escolha plantas de raízes rasas, como alface, cebolinha e temperos, e mantenha sempre furos para a água escoar.",
    },
    {
      title: "Cuidado com pragas",
      text: "Observe as folhas com frequência. Retire plantas doentes e prefira soluções simples antes de usar qualquer produto. Se precisar de defensivos, busque orientação técnica.",
    },
  ],
  stepsTitle: "Passo a passo: sua primeira horta em um vaso",
  steps: [
    "Escolha um vaso ou recipiente com cerca de 20 a 30 cm de profundidade e faça furos no fundo para a água escoar.",
    "Coloque uma camada de material que ajude na drenagem, como pedrinhas ou argila expandida, e complete com terra misturada a composto.",
    "Plante sementes ou mudas de uma espécie simples (por exemplo, cebolinha, coentro ou alface), respeitando o espaço indicado no pacote.",
    "Deixe o vaso em um local ensolarado e regue com cuidado, sem formar poças, de preferência pela manhã.",
    "Observe a planta todos os dias, colha as folhas externas aos poucos e continue regando e adubando com composto.",
  ],
  tipTitle: "Dicas para quem nunca cultivou",
  tips: [
    "Comece com um ou dois vasos. É melhor cuidar bem de poucas plantas do que desanimar com muitas.",
    "Errar faz parte. Cada planta que não vingou ensina algo sobre luz, água ou solo.",
    "Anote a data do plantio e quando regou. Isso ajuda a perceber o ritmo da sua planta.",
    "Converse com vizinhos, familiares e feirantes: muita gente tem mudas e dicas para compartilhar.",
  ],
};

export const sustentabilidade: TopicContent = {
  id: "sustentabilidade",
  navLabel: "Sustentabilidade",
  kicker: "Pequenos hábitos, grandes efeitos",
  title: "Sustentabilidade em casa",
  intro:
    "Ser sustentável começa pelo que já temos: embalagens que podem ter um novo uso, restos de comida que viram adubo e escolhas de consumo mais conscientes. O objetivo é desperdiçar menos e aproveitar mais.",
  image: "/images/sustentabilidade.svg",
  imageAlt: "Ilustração de uma garrafa reaproveitada como vaso, uma composteira e um cesto de compras de tecido.",
  items: [
    {
      title: "Reutilize embalagens",
      text: "Garrafas PET, potes de vidro, caixas e latas podem virar vasos, mudas, porta-objetos e organizadores. Lave bem e, quando for plantar, faça furos para drenagem.",
    },
    {
      title: "Aproveite os resíduos orgânicos",
      text: "Cascas, sementes, borra de café e restos de frutas e verduras podem voltar para a terra em forma de composto, em vez de irem para o lixo comum.",
    },
    {
      title: "Compostagem doméstica",
      text: "É a transformação de resíduos orgânicos em adubo por ação de microrganismos, insetos e minhocas. Um método simples usa caixas empilhadas, com furos, e uma caixa embaixo para recolher o líquido excedente.",
    },
    {
      title: "Reduza o desperdício",
      text: "Planeje as compras, guarde os alimentos corretamente e aproveite talos, folhas e cascas em receitas. O que não se desperdiça não precisa ser descartado.",
    },
    {
      title: "Consumo consciente",
      text: "Antes de comprar, pergunte: eu preciso? Posso consertar, emprestar ou trocar? O consumo responsável é um dos Objetivos de Desenvolvimento Sustentável (ODS 12) da Agenda 2030.",
    },
    {
      title: "Dentro de casa",
      text: "Separe os recicláveis, use sacolas reutilizáveis, apague luzes que não estão em uso e prefira produtos duráveis. Cada hábito soma.",
    },
  ],
  stepsTitle: "Compostagem doméstica: o básico",
  steps: [
    "Monte uma composteira com caixas ou baldes com tampa: as caixas de cima têm furos no fundo e uma caixa na base recolhe o líquido.",
    "Coloque restos de alimentos (cascas, sementes, borra de café, cascas de ovo) e alterne com material seco, como folhas secas, serragem ou papel picado.",
    "Mantenha a mistura úmida, mas sem encharcar, e misture de tempos em tempos para que entre ar.",
    "Se usar minhocas, evite cítricos e alimentos muito condimentados, e controle a quantidade de resíduos.",
    "O composto está pronto quando fica escuro, com aspecto uniforme e cheiro de terra. Use-o nos vasos e na horta.",
  ],
  tipTitle: "Para evitar problemas",
  tips: [
    "Não misture resíduos orgânicos com outros tipos de lixo.",
    "Em composteiras domésticas pequenas, costuma-se evitar carnes, laticínios e comidas muito gordurosas, que podem causar mau cheiro e atrair animais.",
    "Mau cheiro geralmente indica excesso de umidade ou falta de ar: acrescente material seco e misture.",
    "Para um passo a passo completo, consulte o manual de compostagem do Ministério do Meio Ambiente.",
  ],
};

export const economiaDeAgua: TopicContent = {
  id: "economia-de-agua",
  navLabel: "Economia de Água",
  kicker: "Cada gota conta",
  title: "Economia de Água",
  intro:
    "A água é essencial para a vida e para qualquer horta, mas é um recurso que precisa ser usado com responsabilidade. Pequenas mudanças na rotina e na forma de regar reduzem o desperdício sem prejudicar as plantas.",
  image: "/images/economia-de-agua.svg",
  imageAlt: "Ilustração de um regador, um balde com água da chuva e gotas sobre plantas.",
  items: [
    {
      title: "Por que economizar",
      text: "Água tratada exige energia e recursos para chegar até nós. Usar apenas o necessário ajuda a preservar mananciais e reduz o gasto na conta.",
    },
    {
      title: "Regue com regador ou balde",
      text: "Evite mangueira aberta. Molhe a base das plantas, onde ficam as raízes, e não as folhas. Assim a água é melhor aproveitada.",
    },
    {
      title: "Melhores horários",
      text: "Regue nas horas mais frescas, de preferência pela manhã. Evite os horários de sol forte e dias de muito vento, quando a água evapora rapidamente.",
    },
    {
      title: "Proteja o solo",
      text: "Cobrir a terra com palha, folhas secas ou casca ajuda a manter a umidade. Deixar áreas de terra livres no quintal também permite que a chuva infiltre no solo.",
    },
    {
      title: "Água da chuva",
      text: "A água coletada das calhas pode ser usada para regar plantas e limpar áreas externas. Mantenha os recipientes bem tampados ou telados para não virarem criadouros de mosquitos.",
    },
    {
      title: "Evite vazamentos",
      text: "Torneiras pingando e descargas com vazamento desperdiçam muita água. Observe e conserte assim que perceber.",
    },
  ],
  stepsTitle: "Reaproveitamento seguro de água",
  steps: [
    "Prefira a água da chuva coletada de forma limpa e protegida. Ela é uma das opções mais simples para regar plantas.",
    "A água usada para lavar frutas e legumes, sem sabão, pode ser aproveitada para regar plantas ornamentais ou a terra do vaso.",
    "Evite água com sabão, detergente, gordura, cloro, produtos de limpeza ou água de vaso sanitário, principalmente em plantas comestíveis.",
    "Não molhe folhas e partes comestíveis com água reaproveitada. Aplique na terra, perto da base.",
    "Em caso de dúvida sobre a origem da água, use água limpa. A segurança vem primeiro.",
  ],
  tipTitle: "Cuidados para evitar desperdícios",
  tips: [
    "Feche a torneira enquanto escova os dentes ou ensaboa as mãos e a louça.",
    "Lave carro e calçada com balde e pano, em vez de mangueira.",
    "Observe o solo com o dedo antes de regar: se ainda estiver úmido alguns centímetros abaixo, espere.",
    "Evite o excesso: planta encharcada também adoece.",
  ],
  note: "As orientações sobre reaproveitamento são gerais e educativas. Normas locais e a origem da água podem alterar o que é recomendável.",
};

export const preservacaoAmbiental: TopicContent = {
  id: "preservacao-ambiental",
  navLabel: "Preservação Ambiental",
  kicker: "Do vaso à comunidade",
  title: "Preservação Ambiental",
  intro:
    "Cuidar de uma pequena horta é também uma forma de se conectar com a natureza. Quando muitas pessoas adotam pequenas atitudes, o efeito aparece no bairro, na cidade e no planeta.",
  image: "/images/preservacao-ambiental.svg",
  imageAlt: "Ilustração de árvores, um pássaro e uma abelha em uma área verde.",
  items: [
    {
      title: "Por que preservar",
      text: "A natureza sustenta a vida, os alimentos, a água e o clima. O Ministério do Meio Ambiente destaca que a humanidade depende de uma natureza saudável e funcional.",
    },
    {
      title: "Benefícios das áreas verdes",
      text: "Árvores, jardins e hortas dão sombra, ajudam a água da chuva a infiltrar no solo, oferecem abrigo para animais e tornam os espaços urbanos mais agradáveis.",
    },
    {
      title: "Biodiversidade",
      text: "É a variedade de seres vivos e dos ambientes em que vivem. O Brasil é um país megadiverso, com seis biomas, mas perda de habitat, poluição e mudanças do clima ameaçam muitas espécies.",
    },
    {
      title: "Pequenas atitudes importam",
      text: "Plantar, não jogar lixo no chão, economizar água e evitar o desperdício reduzem a pressão sobre os recursos naturais. Atitudes individuais se somam.",
    },
    {
      title: "Um jardim que acolhe",
      text: "Plantas com flores e temperos, como manjericão e cebolinha, podem atrair abelhas e outros polinizadores. Evite produtos tóxicos que prejudicam insetos benéficos.",
    },
    {
      title: "Na comunidade",
      text: "Hortas comunitárias, trocas de mudas, mutirões de limpeza e conversas com vizinhos fortalecem o cuidado coletivo com o ambiente.",
    },
  ],
  stepsTitle: "Como contribuir na sua comunidade",
  steps: [
    "Compartilhe o que aprendeu com familiares, amigos e vizinhos.",
    "Troque mudas e sementes e incentive quem quer começar a plantar.",
    "Participe de ações de limpeza, plantio e educação ambiental do seu bairro ou escola.",
    "Cuide das áreas verdes próximas: praças, calçadas com árvores e jardins comunitários.",
    "Cobre e acompanhe ações públicas de proteção ambiental na sua cidade.",
  ],
  tipTitle: "Pense local, aja hoje",
  tips: [
    "Uma muda plantada hoje pode virar sombra e abrigo no futuro.",
    "Prefira plantas da sua região, que costumam se adaptar melhor ao clima.",
    "Converse com crianças e jovens: a educação ambiental transforma hábitos.",
  ],
};

export const topics: TopicContent[] = [
  hortaEmCasa,
  sustentabilidade,
  economiaDeAgua,
  preservacaoAmbiental,
];

export const dailyActions: InfoItem[] = [
  { title: "Plante algo", text: "Um tempero em um vaso na janela já é um começo." },
  { title: "Reutilize", text: "Dê um segundo uso a garrafas, potes e caixas antes de descartar." },
  { title: "Separe os restos orgânicos", text: "Cascas e sobras de vegetais podem virar adubo." },
  { title: "Regue com consciência", text: "Use regador, na hora certa, e só a quantidade necessária." },
  { title: "Compartilhe", text: "Troque mudas, receitas e dicas com quem mora perto de você." },
  { title: "Observe a natureza", text: "Perceber abelhas, pássaros e árvores ao redor ajuda a cuidar melhor deles." },
];
