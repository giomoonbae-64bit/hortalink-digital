-- HortaLink Digital - tabela de respostas (Supabase / PostgreSQL)
-- Rode este script em: Supabase > SQL Editor > New query > Run.

create table if not exists public.survey_responses (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  name             text check (name is null or char_length(name) <= 80),
  had_garden       text not null check (had_garden in ('sim_regularmente','ja_tentei','nunca')),
  learned_new      text not null check (learned_new in ('sim_muito','sim_um_pouco','nao')),
  most_interesting text not null check (most_interesting in ('horta_em_casa','sustentabilidade','economia_de_agua','preservacao_ambiental')),
  will_apply       text not null check (will_apply in ('sim_varias','sim_uma','talvez','nao')),
  feels_prepared   smallint not null check (feels_prepared between 1 and 5),
  info_quality     smallint not null check (info_quality between 1 and 5),
  would_recommend  text not null check (would_recommend in ('sim','talvez','nao')),
  comments         text check (comments is null or char_length(comments) <= 1000)
);

-- Segurança em nível de linha: a chave pública (anon) só pode INSERIR.
-- Ninguém com a chave pública consegue ler, alterar ou apagar respostas.
alter table public.survey_responses enable row level security;

drop policy if exists "anon pode inserir respostas" on public.survey_responses;
create policy "anon pode inserir respostas"
  on public.survey_responses
  for insert
  to anon
  with check (true);

-- As respostas são consultadas pelo painel do Supabase (Table Editor / SQL Editor),
-- que usa um papel administrativo e não depende de políticas de leitura.

-- Exemplo de consulta resumida (rode depois de coletar respostas):
-- select most_interesting, count(*) as total, round(avg(info_quality),2) as media_qualidade
-- from public.survey_responses group by most_interesting order by total desc;
