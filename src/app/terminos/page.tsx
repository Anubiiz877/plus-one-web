import Link from "next/link";
import { ArrowLeft, ScrollText } from "lucide-react";
import TermsContent from "@/components/landing/TermsContent";

export const metadata = {
  title: "Términos y Condiciones • PLUS ONE",
  description: "Términos y Condiciones y Política de Privacidad de Plus One.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background px-4 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <header className="mx-auto flex max-w-5xl items-center justify-between py-6">
        <div className="flex items-center gap-2 text-xl font-black tracking-tight text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 font-bold text-sm text-white shadow-md shadow-indigo-600/30">
            +1
          </div>
          PLUS<span className="text-indigo-600">ONE</span>
        </div>

        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:bg-indigo-500/5 hover:text-indigo-600 active:scale-95 dark:hover:text-indigo-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al inicio
        </Link>
      </header>

      <main className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3 border-b border-border pb-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
            <ScrollText className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-foreground">Términos y Condiciones</h1>
            <p className="text-xs text-muted-foreground">
              Vigentes a partir del 2 de agosto de 2026
            </p>
          </div>
        </div>

        <TermsContent large />
      </main>

      <footer className="mx-auto max-w-5xl border-t border-border py-8 text-center text-xs font-medium text-muted-foreground">
        © {new Date().getFullYear()} PLUS ONE. Todos los derechos reservados.
      </footer>
    </div>
  );
}
