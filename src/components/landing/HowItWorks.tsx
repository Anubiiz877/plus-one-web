import { UserPlus, CalendarCheck, PartyPopper, Sparkles } from "lucide-react";

const PASOS = [
  {
    numero: "01",
    icono: UserPlus,
    colorIcono: "text-indigo-600 dark:text-indigo-400",
    colorCaja: "bg-indigo-500/10",
    titulo: "Te registrarás gratis",
    texto:
      "Crearás tu perfil, verificas tu cuenta con KYC y elegirás si querés ser acompañante o cliente acompañado.",
  },
  {
    numero: "02",
    icono: CalendarCheck,
    colorIcono: "text-purple-600 dark:text-purple-400",
    colorCaja: "bg-purple-500/10",
    titulo: "Elegirás tu experiencia",
    texto:
      "Podrás explorar profesionales y personas verificadas para eventos, cenas, viajes, deportes e idiomas, y filtrar por lo que te interese.",
  },
  {
    numero: "03",
    icono: PartyPopper,
    colorIcono: "text-amber-600 dark:text-amber-400",
    colorCaja: "bg-amber-500/10",
    titulo: "Disfrutarás acompañado",
    texto:
      "Podrás reservar tu plan, confirmar tu experiencia y compartir cada momento nunca más en soledad.",
  },
];

export default function HowItWorks({ id }: { id?: string }) {
  return (
    <section id={id} className="mx-auto my-14 max-w-4xl px-4">
      <div className="mb-10 text-center">
        <div className="mb-3 mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold text-card-foreground shadow-sm">
          <Sparkles className="h-4 w-4 text-indigo-500 animate-pulse" />
          <span>¿Cómo funcionará?</span>
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          Así serán los pasos en PLUS ONE
        </h2>
        <p className="mx-auto mt-1 max-w-md text-xs text-muted-foreground sm:text-sm">
          Simple, seguro y directo para disfrutar cada momento con alguien de confianza cuando la
          plataforma esté en línea.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {PASOS.map((paso) => (
          <article
            key={paso.numero}
            className="group relative h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <span className="absolute right-5 top-4 text-4xl font-black text-muted/40 transition-colors group-hover:text-indigo-500/25">
              {paso.numero}
            </span>
            <div
              className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${paso.colorCaja} ${paso.colorIcono} transition-transform group-hover:scale-110`}
            >
              <paso.icono className="h-6 w-6" />
            </div>
            <h3 className="text-base font-extrabold tracking-tight text-foreground">
              {paso.titulo}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{paso.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}