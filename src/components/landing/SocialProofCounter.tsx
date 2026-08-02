"use client";

import { Users, Heart, Sparkles, TrendingUp } from "lucide-react";

// ⚠️ LA CLAVE ESTÁ AQUÍ: debe decir "export default"
export default function SocialProofCounter({ id }: { id?: string }) {
  const manualStats = {
    registeredUsers: 148,
    totalDonors: 19,
    amountRaisedUSD: 350,
  };

  return (
    <section id={id} className="mx-auto my-14 max-w-4xl px-4">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold text-card-foreground shadow-sm">
          <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
          <span>Comunidad en Crecimiento</span>
        </div>
        <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          La fuerza detrás de PLUS ONE
        </h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Cada día somos más personas impulsando esta nueva plataforma.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="group rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-indigo-600 transition-transform group-hover:scale-110 dark:text-indigo-400">
            <Users className="h-6 w-6" />
          </div>
          <div className="text-3xl font-black text-foreground sm:text-4xl">
            +{manualStats.registeredUsers}
          </div>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Personas Registradas
          </p>
        </div>

        <div className="group rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 transition-transform group-hover:scale-110 dark:text-rose-400">
            <Heart className="h-6 w-6 fill-rose-500/20" />
          </div>
          <div className="text-3xl font-black text-foreground sm:text-4xl">
            {manualStats.totalDonors}
          </div>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Donantes Fundadores
          </p>
        </div>

        <div className="group rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 transition-transform group-hover:scale-110 dark:text-amber-400">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="text-3xl font-black text-foreground sm:text-4xl">
            ${manualStats.amountRaisedUSD} <span className="text-xs font-semibold text-muted-foreground">USD</span>
          </div>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Recaudados para el Lanzamiento
          </p>
        </div>
      </div>
    </section>
  );
}