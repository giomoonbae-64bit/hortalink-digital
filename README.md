# HortaLink Digital

Site de educação ambiental do projeto de extensão universitária **HortaLink Digital** (DreamShaper).
Reúne conteúdos sobre horta em casa, sustentabilidade, economia de água e preservação ambiental, e coleta
as respostas de uma pesquisa de avaliação feita pela comunidade.

- **Tecnologias:** React 19, TypeScript, Vite, Tailwind CSS 4.
- **Sem servidor próprio:** o site é estático; as respostas vão para o **Supabase** ou para o **Google Sheets**
  (você escolhe um dos dois).
- **Sem resultados inventados:** não há depoimentos, números de participantes ou impactos no site. Isso só deve
  ser adicionado pela equipe depois da intervenção.

---

## 1. Instalação e execução

Requisito: [Node.js](https://nodejs.org) 20 ou mais recente.

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

Outros comandos:

```bash
npm run build      # confere os tipos e gera a pasta dist/
npm run preview    # testa a versão de produção localmente
```

---

## 2. Configurar o recebimento das respostas (obrigatório)

> Enquanto nada estiver configurado, o formulário **não envia nada**: ele valida os campos e mostra
> uma mensagem de erro clara. O site nunca finge que a resposta foi recebida.

Escolha **uma** das opções. Se as duas estiverem configuradas, o Supabase tem prioridade.

### Opção A: Supabase (recomendada)

Vantagens: banco de dados de verdade, filtros, exportação em CSV e consultas SQL. Plano gratuito disponível.

1. Crie uma conta em <https://supabase.com> e um novo projeto (**New project**).
2. No menu **SQL Editor**, clique em **New query**, cole todo o conteúdo do arquivo
   [`supabase/schema.sql`](supabase/schema.sql) e clique em **Run**.
   Isso cria a tabela `survey_responses` e uma regra de segurança que permite apenas **inserir** respostas
   com a chave pública. Ninguém consegue ler, editar ou apagar dados por ela.
3. Em **Project Settings → API**, copie:
   - a **Project URL** (algo como `https://xxxx.supabase.co`);
   - a chave pública: **anon public** (ou **publishable**). **Nunca** use a `service_role`/`secret`.
4. Crie o arquivo `.env` na raiz do projeto (copie de `.env.example`):

   ```env
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-chave-publica
   ```

5. Reinicie `npm run dev` e envie uma resposta de teste.
6. Confira em **Table Editor → survey_responses**. **Apague as respostas de teste antes da divulgação.**

### Opção B: Google Sheets + Google Apps Script

Vantagens: não precisa de conta em outro serviço; as respostas caem numa planilha.

1. Crie uma planilha em <https://sheets.google.com>.
2. Menu **Extensões → Apps Script**. Apague o conteúdo e cole o arquivo
   [`google-apps-script/Code.gs`](google-apps-script/Code.gs). Salve.
3. Clique em **Implantar → Nova implantação**:
   - Tipo: **App da Web**
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
4. Autorize quando o Google pedir e copie a **URL do app da Web** (termina em `/exec`).
5. No `.env`:

   ```env
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXX/exec
   ```

6. Teste: abrir a URL no navegador deve mostrar `{"ok":true,...}`. Depois envie uma resposta de teste pelo site;
   uma aba chamada **Respostas** será criada automaticamente.

Importante: se você **alterar o código** do Apps Script, precisa criar uma **nova versão** em
*Implantar → Gerenciar implantações → Editar → Nova versão*; caso contrário a URL continua usando o código antigo.

### Privacidade e LGPD

O formulário pede apenas as respostas da pesquisa. O nome é opcional e **não** são pedidos e-mail, telefone,
CPF ou endereço. O aviso de privacidade está na seção "Participe" (`src/sections/Participe.tsx`).
Antes de divulgar, a equipe deve:

- definir um **canal de contato** para quem quiser pedir a exclusão de uma resposta e citá-lo no aviso;
- confirmar com a coordenação/orientação da extensão se a atividade exige alguma autorização institucional
  ou termo de consentimento específico.

---

## 3. Publicação

O projeto gera arquivos estáticos na pasta `dist/`. Suba o código para um repositório no GitHub e use uma das opções.
**Importante:** as variáveis `VITE_...` precisam estar cadastradas no painel **antes** do build; se você as
cadastrar depois, faça um novo deploy.

### Vercel

1. Em <https://vercel.com>, **Add New → Project** e importe o repositório.
2. A Vercel detecta o Vite automaticamente (o arquivo `vercel.json` já traz as configurações).
3. Em **Environment Variables**, cadastre as variáveis da opção escolhida (A ou B).
4. Clique em **Deploy**. Cada novo `git push` publica uma nova versão.

### Netlify

1. Em <https://netlify.com>, **Add new site → Import an existing project**.
2. O arquivo `netlify.toml` já define o comando (`npm run build`) e a pasta (`dist`).
3. Em **Site configuration → Environment variables**, cadastre as variáveis (A ou B).
4. Clique em **Deploy**.

### Depois de publicar

1. Em `index.html`, troque `https://SEU-DOMINIO-AQUI/` (link canônico) pelo endereço real do site.
2. Abra o site publicado **no celular e no computador** e envie uma resposta de teste.
3. Confira se ela apareceu no Supabase/Planilha e apague os testes.

---

## 4. Como consultar e organizar as respostas

**Supabase:** *Table Editor → survey_responses* permite filtrar, ordenar e **Export → CSV**. No *SQL Editor*:

```sql
select most_interesting, count(*) as total, round(avg(info_quality), 2) as media_qualidade
from public.survey_responses
group by most_interesting
order by total desc;
```

**Google Sheets:** use a aba **Respostas** com filtros, tabela dinâmica e gráficos.
As alternativas ficam gravadas como códigos (ex.: `sim_uma`, `nunca`); a tabela abaixo traduz.
As escalas de 1 a 5 são numéricas.

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

## 5. Estrutura do projeto

```
hortalink-digital/
├── index.html                 # SEO básico, fontes e metadados
├── vite.config.ts, tsconfig*.json
├── vercel.json, netlify.toml  # publicação
├── .env.example               # variáveis do formulário
├── supabase/schema.sql        # tabela + segurança (opção A)
├── google-apps-script/Code.gs # receptor da planilha (opção B)
├── public/
│   ├── favicon.svg, robots.txt
│   └── images/                # ilustrações em SVG (leves)
└── src/
    ├── main.tsx, App.tsx
    ├── styles/index.css       # tema Tailwind (cores, fontes, foco)
    ├── components/            # Header, Footer, Logo, Icons, LinkButton, form/*
    ├── sections/              # Hero, TopicsOverview, TopicSection, DailyActions,
    │                          # Participe (formulário), About, References
    ├── data/                  # content.ts (textos), references.ts, surveyOptions.ts, navigation.ts
    ├── hooks/useSurveyForm.ts # estado, validação e envio do formulário
    ├── services/              # surveyService.ts (Supabase/Google), validation.ts
    └── types/survey.ts
```

## 6. Como editar o conteúdo

- **Textos educativos:** `src/data/content.ts`.
- **Referências:** `src/data/references.ts`. Ao incluir conteúdo novo, cadastre a fonte e confira o link.
- **Perguntas do formulário:** `src/data/surveyOptions.ts`, `src/types/survey.ts`, `src/services/validation.ts`,
  `src/sections/Participe.tsx`, e o `schema.sql`/`Code.gs` (os valores aceitos precisam coincidir).
- **Imagens:** as ilustrações em `public/images/` foram criadas para o projeto. Para usar fotografias, confira a
  licença e dê o crédito ao autor.
- **Cores e fontes:** `src/styles/index.css` (bloco `@theme`).

## 7. Acessibilidade

Menu com teclado e `aria-expanded`, link "Pular para o conteúdo", foco visível, rótulos e mensagens de erro ligados
aos campos (`aria-describedby`, `role="alert"`), alvos de toque de pelo menos 44 px, respeito a
`prefers-reduced-motion`, textos alternativos nas imagens e idioma `pt-BR`.

## 8. Limites conhecidos

- O formulário tem um campo-isca contra robôs, mas **não há limite de envios por pessoa/IP**. Quem tem a URL pode
  enviar várias respostas. Para uma coleta mais rígida, seria necessário um serviço próprio com verificação.
- As orientações sobre reaproveitamento de água, pragas e defensivos são **gerais**; o site recomenda buscar
  orientação técnica local.
