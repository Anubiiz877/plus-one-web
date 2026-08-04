"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, Heart, Eye, Users, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [abierto, setAbierto] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-10 text-center">
      {/* Fondo con resplandor sutil estilo app moderna */}
      <div className="absolute top-0 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 blur-3xl" />

      {/* Insignia */}
      <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-indigo-200/80 bg-background/80 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-sm backdrop-blur-md dark:border-indigo-800/60 dark:text-indigo-300">
        <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse dark:text-indigo-400" />
        <span>PLUS ONE • Nunca hagas solo lo que podrías disfrutar acompañado.</span>
      </div>

      {/* Titular */}
      <h1 className="mx-auto mb-4 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        Nunca vuelvas a vivir una <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
          experiencia solo.
        </span>
      </h1>

      <p className="mx-auto mb-8 max-w-xl text-sm font-medium text-muted-foreground sm:text-base">
        La  plataforma pensada para conectar personas en eventos sociales, actividades deportivas, cenas y experiencias únicas.
      </p>

      {/* Tarjeta de Visión Interactiva */}
      <div className="mx-auto max-w-2xl px-2">
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          className="group relative w-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-card/90 p-6 text-left shadow-md transition-all duration-500 hover:border-indigo-500 hover:bg-card hover:shadow-2xl hover:shadow-indigo-500/15 active:scale-[0.99]"
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>La propuesta del proyecto</span>
          </div>

          {!abierto ? (
            <div className="transition-all duration-300">
              <p className="text-sm font-medium text-muted-foreground sm:text-base">
                Estamos construyendo <strong className="text-foreground">PLUS ONE</strong>: una comunidad segura con perfiles verificados para que nunca tengas que ir solo a tus eventos...
              </p>
              <span
                className={cn(
                  "mt-3 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 underline underline-offset-4 dark:text-indigo-400",
                  "transition-transform duration-300 group-hover:translate-y-0.5"
                )}
              >
                Leer propuesta completa
                <ChevronDown className="h-4 w-4" />
              </span>
            </div>
          ) : (
            <div className="animate-fadeIn transition-all duration-500">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                <strong className="text-indigo-600 dark:text-indigo-400">PLUS ONE</strong> es la plataforma que conecta <strong className="text-foreground">personas verificadas</strong>, para compartir eventos, viajes y todo tipo de actividades. Encontrá un acompañante para un casamiento, un concierto, una cena, practicar un idioma, entrenar, recorrer una ciudad, estudiar o simplemente disfrutar de un café. Con identidad verificada (KYC), chat privado, reservas, pagos protegidos y un sistema de reputación que garantiza confianza y seguridad en cada experiencia.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-3 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-500" /> Verificación KYC</span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4 text-indigo-500" /> Eventos & Salidas</span>
                <span className="flex items-center gap-1"><Heart className="h-4 w-4 text-rose-500" /> Donaciones Transparentes</span>
              </div>

              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 underline underline-offset-4 dark:text-indigo-400">
                Cerrar propuesta
                <ChevronUp className="h-4 w-4" />
              </span>
            </div>
          )}
        </button>
      </div>
    </section>
  );
}