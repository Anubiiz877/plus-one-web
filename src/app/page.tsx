import HeroSection from "@/components/landing/HeroSection";
import AboutUs from "@/components/landing/AboutUs";
import HowItWorks from "@/components/landing/HowItWorks";
import WaitlistForm from "@/components/landing/WaitlistForm";
import DonationSection from "@/components/landing/DonationSection";
import SocialProofCounter from "@/components/landing/SocialProofCounter";
import FaqFloating from "@/components/FaqFloating";
import ThemeToggle from "@/components/ThemeToggle";
import NavLinks from "@/components/NavLinks";
import ScrollToTop from "@/components/ScrollToTop";
import PhotoCollage from "@/components/PhotoCollage";
import Logo from "@/components/Logo";
export default function Home() {
  return (
    <div className="min-h-screen bg-background px-4 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <header className="mx-auto flex max-w-5xl items-center justify-between py-6">
        <div className="flex items-center gap-2 text-xl font-black tracking-tight text-foreground">
          <Logo className="h-20 w-auto" />
        </div>

        <div className="flex items-center gap-1">
          <NavLinks />
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl">
        <PhotoCollage />
        <HeroSection />
        <HowItWorks />
        <WaitlistForm id="registro" />
        <DonationSection id="donar" />
        <AboutUs id="nosotros" />
        <SocialProofCounter id="comunidad" />
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Logo className="h-16 w-auto" />
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                La plataforma para conectar personas en eventos, viajes y experiencias únicas.
                Proyecto actualmente en desarrollo.
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-foreground">
                Proyecto
              </p>
              <ul className="space-y-2">
                {[
                  { label: "Sobre nosotros", href: "/#nosotros" },
                  { label: "Registrarse", href: "/#registro" },
                  { label: "Donar", href: "/#donar" },
                  { label: "Comunidad", href: "/#comunidad" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-xs font-semibold text-muted-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-foreground">
                Legal
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/terminos"
                    className="text-xs font-semibold text-muted-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a
                    href="/terminos#privacidad"
                    className="text-xs font-semibold text-muted-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-foreground">
                Soporte
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:facundoweberroger@gmail.com"
                    className="text-xs font-semibold text-muted-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs font-semibold text-muted-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs font-semibold text-muted-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs font-semibold text-muted-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-center text-[11px] font-medium text-muted-foreground">
            © {new Date().getFullYear()} PLUS ONE. Todos los derechos reservados. Los aportes son
            voluntarios y no constituyen una inversión.
          </div>
        </div>
      </footer>

      <FaqFloating />
      <ScrollToTop />
    </div>
  );
}