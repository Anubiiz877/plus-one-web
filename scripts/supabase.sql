-- Ejecutar en el SQL Editor de Supabase (Dashboard → SQL Editor → New query → Run)
-- Crea la tabla de la lista de espera con email único (rechaza registros duplicados).

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  role text not null check (role in ('CLIENT', 'COMPANION')),
  nombre text not null,
  apellido text not null,
  email text not null unique,
  telefono text not null,
  edad text not null,
  terms_accepted boolean not null default false,
  created_at timestamptz not null default now()
);

-- Permite insertar desde el backend con la anon key (solo insertar)
alter table public.waitlist enable row level security;

create policy "Permitir insertar registros"
  on public.waitlist
  for insert
  with check (true);

-- El registro duplicado devuelve un error 23505 (unique violation)
-- que la API usa para responder "Este email ya está registrado".
