import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const intentosPorIp = new Map<string, number[]>();
const VENTANA_MS = 10 * 60 * 1000;
const MAX_INTENTOS = 5;

export function resetIntentos() {
  intentosPorIp.clear();
}

function estaLimitado(ip: string): boolean {
  const ahora = Date.now();
  const historial = (intentosPorIp.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);
  if (historial.length >= MAX_INTENTOS) return true;
  historial.push(ahora);
  intentosPorIp.set(ip, historial);
  if (intentosPorIp.size > 10000) intentosPorIp.clear();
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconocida";

    if (estaLimitado(ip)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Intentá de nuevo en unos minutos." },
        { status: 429 }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Formato de petición inválido' }, { status: 400 });
    }

    if (typeof body.website === "string" && body.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    const role = typeof body.role === 'string' ? body.role : '';
    const nombre = typeof body.nombre === 'string' ? body.nombre : '';
    const apellido = typeof body.apellido === 'string' ? body.apellido : '';
    const email = typeof body.email === 'string' ? body.email.toLowerCase().trim() : '';
    const telefono = typeof body.telefono === 'string' ? body.telefono : '';
    const edad = typeof body.edad === 'string' ? body.edad : '';

    if (!role || !nombre || !apellido || !email || !edad) {
      return NextResponse.json({ error: 'Faltan datos del registro' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'El correo electrónico no es válido' }, { status: 400 });
    }

    const edadNum = Number(edad);
    if (!Number.isInteger(edadNum) || edadNum < 18 || edadNum > 99) {
      return NextResponse.json(
        { error: 'La edad debe estar entre 18 y 99 años' },
        { status: 400 }
      );
    }

    if (!["CLIENT", "COMPANION"].includes(role)) {
      return NextResponse.json({ error: 'Rol inválido' }, { status: 400 });
    }

    if (nombre.length > 80 || apellido.length > 80) {
      return NextResponse.json({ error: 'Nombre o apellido demasiado largo' }, { status: 400 });
    }

    if (body.terms_accepted !== true) {
      return NextResponse.json(
        { error: 'Debés aceptar los Términos y Condiciones para registrarte' },
        { status: 400 }
      );
    }

    // Supabase: inserta el registro; si el email ya existe, devuelve 409
    if (supabase) {
      const { error } = await supabase.from('waitlist').insert({
        role,
        nombre,
        apellido,
        email,
        telefono,
        edad,
        terms_accepted: true,
      });

      if (error) {
        if (error.code === '23505') {
          return NextResponse.json(
            { error: 'Este email ya está registrado en la lista de espera' },
            { status: 409 }
          );
        }
        console.error('Error al insertar en Supabase:', error);
        return NextResponse.json(
          { error: 'No se pudo guardar el registro. Intentá más tarde.' },
          { status: 500 }
        );
      }
    } else {
      console.warn(
        'Supabase no configurado: faltan NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY'
      );
    }

    // Brevo: si falla el correo, el registro ya quedó guardado — no se debe perder
    const MI_CORREO_VERIFICADO =
      process.env.ADMIN_EMAIL || "facundoweberroger@gmail.com";
    const rolTexto = role === "COMPANION" ? "Quiero Acompañar" : "Busco Acompañante";

    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY || '',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: "Plus One", email: MI_CORREO_VERIFICADO },
          to: [{ email: MI_CORREO_VERIFICADO, name: "Admin" }],
          replyTo: { email: email, name: nombre },
          subject: `Nuevo registro en Waitlist: ${nombre} ${apellido}`,
          htmlContent: `
            <h3>Nuevo registro en la lista VIP</h3>
            <p><strong>Rol:</strong> ${rolTexto}</p>
            <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono / WhatsApp:</strong> ${telefono}</p>
            <p><strong>Edad:</strong> ${edad}</p>
            <p><strong>Aceptó términos:</strong> Sí</p>
          `,
        }),
      });

      if (!res.ok) {
        console.error('Error desde Brevo:', await res.text());
      }
    } catch (error) {
      console.error('No se pudo enviar el correo de Brevo:', error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error interno:', error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
