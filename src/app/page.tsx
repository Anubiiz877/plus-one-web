import HeroSection from "@/components/landing/HeroSection";
import WaitlistForm from "@/components/landing/WaitlistForm";
import DonationSection from "@/components/landing/DonationSection";
import SocialProofCounter from "@/components/landing/SocialProofCounter";
import TermsContent from "@/components/landing/TermsContent";
import FaqFloating from "@/components/FaqFloating";
import ThemeToggle from "@/components/ThemeToggle";
import NavLinks from "@/components/NavLinks";
import ScrollToTop from "@/components/ScrollToTop";
import PhotoCollage from "@/components/PhotoCollage";
import { ScrollText } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen bg-background px-4 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <header className="mx-auto flex max-w-5xl items-center justify-between py-6">
        <div className="flex items-center gap-2 text-xl font-black tracking-tight text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 font-bold text-sm text-white shadow-md shadow-indigo-600/30">
            +1
          </div>
          PLUS<span className="text-indigo-600">ONE</span>
        </div>

        <div className="flex items-center gap-1">
          <NavLinks />
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl">
        <HeroSection />
        <WaitlistForm id="registro" />
        <DonationSection id="donar" />
        <SocialProofCounter id="comunidad" />
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-[1fr_auto]">
          <div className="text-center text-xs font-medium text-muted-foreground md:text-left">
            <div className="mb-2 flex items-center justify-center gap-2 text-base font-black tracking-tight text-foreground md:justify-start">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 text-[11px] font-bold text-white shadow-md shadow-indigo-600/30">
                +1
              </div>
              PLUS<span className="text-indigo-600">ONE</span>
            </div>
            <p>© {new Date().getFullYear()} PLUS ONE. Todos los derechos reservados.</p>
            <p className="mt-1">
              Proyecto en desarrollo. Los aportes son voluntarios y no constituyen una inversión.
            </p>
            <a
              href="/terminos"
              className="mt-3 inline-flex items-center gap-1.5 rounded-2xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-sm transition hover:border-indigo-600 hover:text-indigo-600 active:scale-95 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              <ScrollText className="h-3.5 w-3.5" />
              Ver Términos y Condiciones
            </a>
          </div>

          <div className="w-full max-w-md xl:mr-24">
            <div className="rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <ScrollText className="h-4 w-4 text-indigo-600" />
                  Términos y Condiciones
                </p>
                <a
                  href="/terminos"
                  className="text-[11px] font-bold text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
                >
                  Ver completo
                </a>
              </div>
              <div className="max-h-96 overflow-y-auto p-4">
                <TermsContent />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PhotoCollage />
      <FaqFloating />
      <ScrollToTop />
    </div>
  );
}