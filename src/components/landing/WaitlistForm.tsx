"use client";

import { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, Calendar, UserCheck, Search } from "lucide-react";

export default function WaitlistForm({ id }: { id?: string }) {
  const [role, setRole] = useState<"CLIENT" | "COMPANION">("CLIENT");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [edad, setEdad] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [termsAceptados, setTermsAceptados] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!termsAceptados) {
      setError("Debés leer y aceptar los Términos y Condiciones para registrarte.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, nombre, apellido, email, telefono, edad, terms_accepted: true }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg =
          typeof data?.error === "string"
            ? data.error
            : "No se pudo completar el registro. Intentá de nuevo.";
        setError(msg);
        return;
      }

      setIsSubmitted(true);
    } catch {
      setError("No se pudo completar el registro. Intentá de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={id} className="mx-auto my-10 max-w-xl rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
      <div className="mb-6 text-center">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
          Paso 2 de 4
        </span>
        <h2 className="mt-2 text-2xl font-black text-foreground sm:text-3xl">Únete a la Lista VIP</h2>
        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          Asegura tu nombre de usuario antes del lanzamiento oficial
        </p>
      </div>

      {isSubmitted ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 text-center text-emerald-900 animate-fadeIn dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-200">
          <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-bold">¡Lugar Reservado con Éxito!</h3>
          <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-300">
            Te contactaremos por correo o WhatsApp con tu acceso prioritario.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-xs font-bold text-emerald-800 underline dark:text-emerald-300"
          >
            Realizar otro registro (Prueba)
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="mb-2 block text-xs font-extrabold text-foreground">¿Cuál es tu objetivo?</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("CLIENT")}
                aria-pressed={role === "CLIENT"}
                className={`flex items-center justify-center gap-2 rounded-2xl py-3 text-xs font-bold border cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                  role === "CLIENT"
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 ring-2 ring-indigo-600 ring-offset-2"
                    : "border-border bg-muted text-muted-foreground hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                }`}
              >
                {role === "CLIENT" ? <CheckCircle2 className="h-4 w-4" /> : <Search className="h-4 w-4" />}
                <span>Busco Acompañante</span>
              </button>

              <button
                type="button"
                onClick={() => setRole("COMPANION")}
                aria-pressed={role === "COMPANION"}
                className={`flex items-center justify-center gap-2 rounded-2xl py-3 text-xs font-bold border cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                  role === "COMPANION"
                    ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/40 ring-2 ring-orange-500 ring-offset-2"
                    : "border-border bg-muted text-muted-foreground hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-500/10 dark:hover:text-orange-300"
                }`}
              >
                {role === "COMPANION" ? <CheckCircle2 className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                <span>Quiero Acompañar</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">Nombre</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Mateo"
                  className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2.5 text-sm text-foreground outline-none transition focus:border-indigo-600 focus:bg-background focus:ring-4 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">Apellido</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Ej. Rossi"
                  className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2.5 text-sm text-foreground outline-none transition focus:border-indigo-600 focus:bg-background focus:ring-4 focus:ring-indigo-500/20"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-foreground">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2.5 text-sm text-foreground outline-none transition focus:border-indigo-600 focus:bg-background focus:ring-4 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">
                Teléfono / WhatsApp <span className="font-semibold text-muted-foreground">(opcional)</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="+54 9 11..."
                  className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2.5 text-sm text-foreground outline-none transition focus:border-indigo-600 focus:bg-background focus:ring-4 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">Edad</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="number"
                  required
                  min="18"
                  max="99"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  placeholder="22"
                  className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2.5 text-sm text-foreground outline-none transition focus:border-indigo-600 focus:bg-background focus:ring-4 focus:ring-indigo-500/20"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-xs font-semibold text-rose-700 dark:border-rose-800/50 dark:bg-rose-950/30 dark:text-rose-300">
              {error}
            </div>
          )}

          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-muted/50 p-4">
            <input
              type="checkbox"
              required
              checked={termsAceptados}
              onChange={(e) => setTermsAceptados(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-indigo-600"
            />
            <span className="text-[11px] leading-relaxed text-muted-foreground">
              He leído y acepto los{" "}
              <a
                href="/terminos"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
              >
                Términos y Condiciones
              </a>{" "}
              y la{" "}
              <a
                href="/terminos#privacidad"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
              >
                Política de Privacidad
              </a>{" "}
              de Plus One.
            </span>
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/40 active:scale-[0.98] disabled:opacity-60"
          >
            <Send className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            <span>{isLoading ? "Enviando..." : "Reservar Mi Lugar VIP"}</span>
          </button>

          <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
            Plus One es un proyecto actualmente en desarrollo. Registrarte en la lista de espera
            no garantiza acceso inmediato a la plataforma ni una fecha determinada de lanzamiento.
          </p>
        </form>
      )}
    </section>
  );
}