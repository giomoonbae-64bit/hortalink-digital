-- HortaLink Digital - tabela de respostas (Neon / PostgreSQL)
-- Opcional: a API (api/respostas.ts) já cria esta tabela sozinha na primeira resposta.
-- Se preferir criar manualmente: Neon > SQL Editor > cole este script > Run.
-- A avaliação é anônima: não existe coluna de nome, e-mail ou IP.

create table if not exists survey_responses (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  had_garden       text not null check (had_garden in ('sim_regularmente','ja_tentei','nunca')),
  learned_new      text not null check (learned_new in ('sim_muito','sim_um_pouco','nao')),
  most_interesting text not null check (most_interesting in ('horta_em_casa','sustentabilidade','economia_de_agua','preservacao_ambiental')),
  will_apply       text not null check (will_apply in ('sim_varias','sim_uma','talvez','nao')),
  feels_prepared   smallint not null check (feels_prepared between 1 and 5),
  info_quality     smallint not null check (info_quality between 1 and 5),
  would_recommend  text not null check (would_recommend in ('sim','talvez','nao')),
  comments         text check (comments is null or char_length(comments) <= 1000)
);

-- Se você já criou a tabela antiga (com a coluna "name"), remova a coluna:
-- alter table survey_responses drop column if exists name;

-- Consulta resumida (rode depois de coletar respostas):
-- select most_interesting, count(*) as total, round(avg(info_quality),2) as media_qualidade
-- from survey_responses group by most_interesting order by total desc;
