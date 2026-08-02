import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { role, nombre, apellido, email, telefono, edad, terms_accepted } = await request.json();

    if (!role || !nombre || !apellido || !email || !telefono || !edad) {
      return NextResponse.json({ error: 'Faltan datos del registro' }, { status: 400 });
    }

    if (terms_accepted !== true) {
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
        email: email.toLowerCase().trim(),
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
        return NextResponse.json({ error: 'Error al guardar el registro' }, { status: 500 });
      }
    } else {
      console.warn('Supabase no configurado: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY faltan en .env.local');
    }

    // Reemplaza esto por tu correo verificado en Brevo
    const MI_CORREO_VERIFICADO = "facundoweberroger@gmail.com";

    const rolTexto = role === "COMPANION" ? "Quiero Acompañar" : "Busco Acompañante";

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

    const data = await res.json();

    if (!res.ok) {
      console.error('Error desde Brevo:', data);
      return NextResponse.json({ error: data }, { status: res.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error interno:', error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
