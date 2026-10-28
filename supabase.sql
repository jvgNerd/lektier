-- Kør i Supabase: SQL Editor → New query → indsæt → Run
create table if not exists public.afkrydsning (
  family text not null,
  id     text not null,
  done   boolean not null default false,
  at     timestamptz not null default now(),
  primary key (family, id)
);

alter table public.afkrydsning enable row level security;

create policy "laes" on public.afkrydsning for select to anon using (true);
create policy "opret" on public.afkrydsning for insert to anon with check (true);
create policy "ret" on public.afkrydsning for update to anon using (true) with check (true);
