"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Qué es Plus One?",
    a: "Plus One es una plataforma que conecta personas verificadas con usuarios que buscan compañía para eventos, viajes, actividades recreativas, deportivas, culturales o simplemente compartir una experiencia. Nuestro objetivo es crear encuentros seguros, transparentes y confiables.",
  },
  {
    q: "¿Plus One es una aplicación de citas?",
    a: "No. Plus One no está diseñada para encontrar pareja ni fomentar relaciones románticas. Es una plataforma para conectar personas que desean compartir una actividad específica.",
  },
  {
    q: "¿Qué tipo de actividades puedo realizar?",
    a: "Podés contratar compañía para: eventos sociales, casamientos, cumpleaños, viajes, turismo, conciertos, teatro, cine, restaurantes, cafés, caminatas, running, gimnasio, idiomas, estudios, museos, fotografía, networking, ferias, convenciones, juegos, actividades recreativas y muchas más.",
  },
  {
    q: "¿Cómo funciona?",
    a: "Creás una cuenta. Verificás tu identidad. Buscás un acompañante según la actividad. Elegís fecha y horario. Reservás. Pagás dentro de la plataforma. Disfrutás la experiencia. Ambos usuarios dejan una calificación.",
  },
  {
    q: "¿Cómo sé que las personas son reales?",
    a: "Todos los perfiles pasan por un proceso de verificación de identidad (KYC). Además contamos con: documento de identidad, selfie de validación, revisión manual, sistema de reputación, calificaciones, reportes y moderación constante.",
  },
  {
    q: "¿Cómo se garantiza mi seguridad?",
    a: "Nuestra plataforma incluye: verificación de identidad, chat privado, pagos protegidos, geolocalización opcional, botón SOS, historial de reservas, reporte de usuarios y soporte al cliente. La seguridad es nuestra prioridad.",
  },
  {
    q: "¿Puedo elegir con quién salir?",
    a: "Sí. Podrás revisar cada perfil, sus intereses, experiencia, idiomas, calificaciones y actividades favoritas antes de reservar.",
  },
  {
    q: "¿Cómo se realizan los pagos?",
    a: "Todos los pagos se realizan dentro de la plataforma para brindar mayor seguridad tanto al cliente como al acompañante. Nunca recomendamos realizar pagos por fuera de Plus One.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Cada acompañante establece su propia tarifa. Antes de confirmar la reserva siempre podrás visualizar el precio total.",
  },
  {
    q: "¿Puedo cancelar una reserva?",
    a: "Sí. Las políticas de cancelación se muestran antes de confirmar cada reserva.",
  },
];

export default function FaqSection({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id={id} className="mx-auto my-14 max-w-3xl px-4">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold text-card-foreground shadow-sm">
          <HelpCircle className="h-4 w-4 text-indigo-500" />
          <span>Información Útil</span>
        </div>
        <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          Preguntas Frecuentes
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Todo lo que necesitás saber antes de empezar
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-border bg-card transition-all duration-200 hover:border-indigo-200 dark:hover:border-indigo-800"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
