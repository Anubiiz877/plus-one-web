"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, X } from "lucide-react";

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
    q: "¿Qué actividades puedo realizar?",
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

export default function FaqFloating() {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir preguntas frecuentes"
        className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-indigo-500/20 active:scale-90 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
      >
        <HelpCircle className="h-5 w-5" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Modal */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 mx-auto max-h-[85vh] w-full max-w-lg rounded-t-3xl border border-border bg-card shadow-2xl transition-all duration-400 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <HelpCircle className="h-5 w-5 text-indigo-500" />
            Preguntas Frecuentes
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* FAQ accordion */}
        <div className="overflow-y-auto p-4" style={{ maxHeight: "calc(85vh - 64px)" }}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 ${
                  openIndex === i
                    ? "border-indigo-300 shadow-indigo-500/10 dark:border-indigo-700"
                    : "border-border hover:border-indigo-200 dark:hover:border-indigo-800"
                }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-bold transition-all duration-300 ${
                    openIndex === i
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-foreground hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? "rotate-180 text-indigo-500"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-indigo-200/50 bg-indigo-50/60 px-5 py-4 dark:border-indigo-800/40 dark:bg-indigo-950/20">
                    <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
