# HortaLink Digital

Site de educação ambiental do projeto de extensão da **UNIFRAN** (Universidade de Franca), **HortaLink Digital**
(DreamShaper). Reúne conteúdos sobre horta em casa, sustentabilidade, economia de água e preservação ambiental, e
coleta as respostas de uma **pesquisa de avaliação anônima**.

- **Tecnologias:** React 19, TypeScript, Vite, Tailwind CSS 4.
- **Banco de dados:** [Neon](https://neon.com) (PostgreSQL), acessado por uma função serverless da Vercel
  (`api/respostas.ts`). A chave do banco fica só no servidor, nunca no navegador.
- **Sem resultados inventados:** não há depoimentos, números de participantes ou impactos no site.

---

## 1. Instalação e execução

Requisito: [Node.js](https://nodejs.org) 20 ou mais recente.

```bash
npm install
npm run dev        # só o site, em http://localhost:5173 (o envio do formulário NÃO funciona aqui)
```

Para testar o formulário localmente com o banco, use a CLI da Vercel, que roda o site e a pasta `api/` juntos:

```bash
cp .env.example .env     # preencha DATABASE_URL
npx vercel dev           # abre em http://localhost:3000
```

Outros comandos: `npm run build` (confere os tipos e gera `dist/`) e `npm run preview`.

---

## 2. Configurar o banco de dados (Neon)

1. Crie uma conta gratuita em <https://neon.com> e um projeto (**New project**). Escolha a região mais próxima
   (por exemplo, `South America (São Paulo)`).
2. No painel do projeto, clique em **Connect** e copie a **connection string**
   (`postgresql://...neon.tech/neondb?sslmode=require`).
3. Na Vercel, abra o projeto → **Settings → Environment Variables** e cadastre:

   | Nome | Valor |
   | --- | --- |
   | `DATABASE_URL` | a connection string copiada do Neon |

   Marque os ambientes *Production*, *Preview* e *Development*.
4. Faça um novo deploy (**Deployments → ⋯ → Redeploy**). Variáveis novas só valem em deploys feitos depois.
5. Abra o site, envie uma resposta de teste e confira no Neon em **Tables → survey_responses**.
   **Apague as respostas de teste antes da divulgação** (SQL Editor: `delete from survey_responses;`).

A tabela `survey_responses` é criada automaticamente na primeira resposta. Se preferir criá-la antes, rode o
script [`neon/schema.sql`](neon/schema.sql) no **SQL Editor** do Neon.

Enquanto `DATABASE_URL` não estiver cadastrada, a API responde com erro e o site avisa a pessoa que a resposta
**não** foi enviada. Ele nunca finge que gravou.

### Privacidade e LGPD

A avaliação é **anônima**: não existe campo de nome, e-mail, telefone, CPF ou endereço, e a API não grava IP nem
qualquer outro identificador. O aviso de privacidade está em `src/sections/Participe.tsx`. Antes de divulgar:

- troque o e-mail fictício pelo real (veja a seção 4);
- confirme com a coordenação/orientação da extensão se a atividade exige alguma autorização institucional
  ou termo de consentimento específico.

---

## 3. Publicação (Vercel)

1. Suba o código para um repositório no GitHub.
2. Em <https://vercel.com>, **Add New → Project** e importe o repositório. A Vercel detecta o Vite e a pasta `api/`.
3. Cadastre `DATABASE_URL` (seção 2) e clique em **Deploy**. Cada novo `git push` publica uma nova versão.

---

## 4. Identificação da equipe e contatos

Tudo fica em **`src/data/project.ts`**: instituição (UNIFRAN), equipe, responsável pela mentoria e canais de
contato. Os textos do site (Sobre, Contato, rodapé e aviso de privacidade) leem esse arquivo.

> O **e-mail atual é fictício** (`contato.hortalink@exemplo.com.br`). Troque pelo e-mail real da equipe antes de
> divulgar. O WhatsApp e o nome do(a) mentor(a) já são os dados reais.

---

## 5. Como consultar e organizar as respostas

No Neon, **SQL Editor**:

```sql
select most_interesting, count(*) as total, round(avg(info_quality), 2) as media_qualidade
from survey_responses
group by most_interesting
order by total desc;
```

Para exportar, rode `select * from survey_responses;` e use **Export** (CSV) no resultado. As alternativas ficam
gravadas como códigos; as escalas de 1 a 5 são numéricas:

| Campo | Códigos possíveis |
| --- | --- |
| Já cultivava antes | `sim_regularmente`, `ja_tentei`, `nunca` |
| Aprendeu algo novo | `sim_muito`, `sim_um_pouco`, `nao` |
| Conteúdo mais interessante | `horta_em_casa`, `sustentabilidade`, `economia_de_agua`, `preservacao_ambiental` |
| Pretende aplicar | `sim_varias`, `sim_uma`, `talvez`, `nao` |
| Preparo para iniciar horta | 1 (nada preparado) a 5 (muito preparado) |
| Qualidade das informações | 1 (ruim) a 5 (excelente) |
| Recomendaria | `sim`, `talvez`, `nao` |

---

## 6. Estrutura do projeto

```
hortalink-digital/
├── index.html                 # SEO básico, fontes e metadados
├── api/respostas.ts           # função serverless: valida e grava no Neon
├── neon/schema.sql            # tabela de respostas (opcional, a API também cria)
├── vite.config.ts, tsconfig*.json, vercel.json
├── .env.example               # DATABASE_URL
├── public/                    # favicon, robots.txt, ilustrações em SVG
└── src/
    ├── main.tsx, App.tsx
    ├── styles/index.css       # tema Tailwind (cores, fontes, foco)
    ├── components/            # Header, Footer, Logo, Icons, LinkButton, form/*
    ├── sections/              # Hero, TopicsOverview, TopicSection, DailyActions,
    │                          # Participe (formulário), About (equipe), Contact, References
    ├── data/                  # project.ts (equipe e contatos), content.ts (textos), references.ts,
    │                          # surveyOptions.ts, navigation.ts
    ├── hooks/useSurveyForm.ts # estado, validação e envio do formulário
    ├── services/              # surveyService.ts (chama /api/respostas), validation.ts
    └── types/survey.ts
```

## 7. Como editar o conteúdo

- **Equipe, mentoria e contatos:** `src/data/project.ts`.
- **Textos educativos:** `src/data/content.ts`. **Referências:** `src/data/references.ts`.
- **Perguntas do formulário:** `src/data/surveyOptions.ts`, `src/types/survey.ts`, `src/services/validation.ts`,
  `src/sections/Participe.tsx`, `api/respostas.ts` e `neon/schema.sql` (os valores aceitos precisam coincidir).
- **Cores e fontes:** `src/styles/index.css` (bloco `@theme`).

## 8. Acessibilidade

Menu com teclado e `aria-expanded`, link "Pular para o conteúdo", foco visível, rótulos e mensagens de erro ligados
aos campos (`aria-describedby`, `role="alert"`), alvos de toque de pelo menos 44 px, respeito a
`prefers-reduced-motion`, textos alternativos nas imagens e idioma `pt-BR`.

## 9. Limites conhecidos

- O formulário tem um campo-isca contra robôs, mas **não há limite de envios por pessoa/IP**; como a avaliação é
  anônima, quem tem a URL pode enviar várias respostas. Para uma coleta mais rígida, seria preciso um serviço
  com verificação (ex.: captcha ou limite por IP).
- Como as respostas são anônimas, não é possível localizar e apagar uma resposta individual.
- As orientações sobre reaproveitamento de água, pragas e defensivos são **gerais**; o site recomenda buscar
  orientação técnica local.
