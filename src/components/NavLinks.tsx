"use client";

import { useState } from "react";
import { UserPlus, Heart, Users, ScrollText, Menu, X } from "lucide-react";

const links = [
  { href: "#registro", label: "Registrarse", icon: UserPlus },
  { href: "#donar", label: "Donar", icon: Heart },
  { href: "#comunidad", label: "Comunidad", icon: Users },
  { href: "/terminos", label: "Términos", icon: ScrollText },
];

export default function NavLinks() {
  const [abierto, setAbierto] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    setAbierto(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Navegación de escritorio */}
      <nav className="hidden items-center gap-1 sm:flex" aria-label="Navegación">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            onClick={handleClick}
            className="group relative flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:bg-indigo-500/5 hover:text-indigo-600 active:scale-95 dark:hover:text-indigo-400"
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      {/* Botón hamburguesa y menú móvil */}
      <div className="relative sm:hidden">
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {abierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {abierto && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setAbierto(false)} />
            <div className="animate-fadeIn absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-border bg-card p-2 shadow-xl">
              {links.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleClick}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-indigo-500/5 hover:text-indigo-600 active:scale-[0.98] dark:hover:text-indigo-400"
                >
                  <Icon className="h-4 w-4 text-indigo-600" />
                  {label}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
