"use client";

import { UserPlus, Heart, Users, ScrollText } from "lucide-react";

const links = [
  { href: "#registro", label: "Registrarse", icon: UserPlus },
  { href: "#donar", label: "Donar", icon: Heart },
  { href: "#comunidad", label: "Comunidad", icon: Users },
];

export default function NavLinks() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
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
      <a
        href="/terminos"
        className="flex items-center gap-1.5 rounded-2xl border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:border-indigo-600 hover:text-indigo-600 active:scale-95 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
      >
        <ScrollText className="h-3.5 w-3.5" />
        <span>Términos</span>
      </a>
    </nav>
  );
}
