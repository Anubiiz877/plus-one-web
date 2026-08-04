"use client";

import { useState } from "react";
import { ChevronDown, Sparkles, Quote } from "lucide-react";

type Miembro = {
  nombre: string;
  rol: string;
  iniciales: string;
  gradiente: string;
  resumen: string;
  bio: string;
};

const EQUIPO: Miembro[] = [
  {
    nombre: "Facundo Weber",
    rol: "Fundador & CEO",
    iniciales: "FW",
    gradiente: "from-indigo-500 to-purple-600",
    resumen: "Ideó Plus One para que nadie se quede afuera de una experiencia.",
    bio: "Facundo creó Plus One después de ver a demasiadas personas perder oportunidades por no tener con quién compartirlas. Su visión: una plataforma donde cada salida sea segura, transparente y con la confianza de saber que el otro es real. Hoy lidera la estrategia, el producto y la comunidad.",
  },
  {
    nombre: "Martina López",
    rol: "Cofundadora & CTO",
    iniciales: "ML",
    gradiente: "from-purple-600 to-fuchsia-500",
    resumen: "Arquitecta de la plataforma y responsable de la seguridad.",
    bio: "Martina diseña y construye toda la infraestructura técnica de Plus One. Es la responsable de que la verificación KYC, los pagos protegidos y el sistema de reputación funcionen con la máxima seguridad. Cree en el código simple, robusto y al servicio de las personas.",
  },
  {
    nombre: "Julián Ríos",
    rol: "Head de Comunidad",
    iniciales: "JR",
    gradiente: "from-rose-500 to-orange-400",
    resumen: "Conecta a la comunidad y cuida que cada encuentro sea respetuoso.",
    bio: "Julián es el puente entre la plataforma y las personas: modera, atiende reportes y da soporte en cada etapa. Su misión es que Plus One siga siendo un espacio respetuoso y seguro, donde calificaciones y reputación se ganen con buenas experiencias reales.",
  },
];

function TarjetaMiembro({ miembro }: { miembro: Miembro }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        abierto
          ? "border-indigo-500 shadow-indigo-500/15"
          : "border-border hover:border-indigo-500 hover:shadow-indigo-500/10"
      }`}
    >
      <div
        className={`mb-4 flex h-40 w-full items-center justify-center rounded-2xl bg-gradient-to-br ${miembro.gradiente} transition-transform duration-300 group-hover:scale-[1.02]`}
      >
        <span className="text-4xl font-black tracking-tight text-white/90">
          {miembro.iniciales}
        </span>
      </div>

      <h3 className="text-lg font-extrabold tracking-tight text-foreground">{miembro.nombre}</h3>
      <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{miembro.rol}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{miembro.resumen}</p>

      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        className={`mt-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-2xl border py-2.5 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] ${
          abierto
            ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
            : "border-indigo-200 bg-indigo-50 text-indigo-700 hover:border-indigo-400 dark:border-indigo-800/60 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:border-indigo-600"
        }`}
      >
        {abierto ? "Ver menos" : "Ver más"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${abierto ? "rotate-180" : ""}`}
        />
      </button>

      {abierto && (
        <div className="mt-4 animate-fadeIn rounded-2xl border border-border bg-muted/50 p-4">
          <Quote className="mb-2 h-4 w-4 text-indigo-500" />
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{miembro.bio}</p>
        </div>
      )}
    </article>
  );
}

export default function AboutUs({ id }: { id?: string }) {
  return (
    <section id={id} className="mx-auto my-14 max-w-4xl px-4">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold text-card-foreground shadow-sm">
          <Sparkles className="h-4 w-4 animate-pulse text-indigo-500" />
          <span>Detrás de Plus One</span>
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          Sobre nosotros
        </h2>
        <p className="mx-auto mt-1 max-w-md text-xs text-muted-foreground sm:text-sm">
          Un equipo comprometido a que nunca más vivas una experiencia en soledad.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {EQUIPO.map((miembro) => (
          <TarjetaMiembro key={miembro.nombre} miembro={miembro} />
        ))}
      </div>
    </section>
  );
}
