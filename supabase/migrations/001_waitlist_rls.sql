-- RLS para la tabla waitlist
-- Ejecutar en el SQL Editor de Supabase (Dashboard > SQL Editor)

alter table public.waitlist enable row level security;

-- Los roles anónimos solo pueden INSERTAR (nada de leer registros ajenos)
revoke select, update, delete on public.waitlist from anon, authenticated;
grant insert on public.waitlist to anon, authenticated;

-- Permitir el INSERT del formulario (vía anon key del cliente)
create policy "waitlist_insert_anon" on public.waitlist
  for insert to anon, authenticated
  with check (true);

-- Única lectura: administradores con la service_role key
create policy "waitlist_select_admin" on public.waitlist
  for select to service_role
  using (true);

-- Evitar emails duplicados (necesario para el 409 del endpoint)
alter table public.waitlist add constraint waitlist_email_unique unique (email);
