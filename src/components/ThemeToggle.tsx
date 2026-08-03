"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const esOscuro = mounted && theme === "dark";

  return (
    <button
      onClick={() => setTheme(esOscuro ? "light" : "dark")}
      className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:border-indigo-300 hover:text-indigo-600 active:scale-95 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
      aria-label="Cambiar tema"
    >
      <span className="absolute inset-0 rounded-2xl bg-indigo-500/0 transition-all duration-300 group-hover:bg-indigo-500/5" />
      <span
        className="relative transition-transform duration-500"
        style={{
          rotate: esOscuro ? "0deg" : "180deg",
        }}
      >
        {esOscuro ? (
          <Sun className="h-5 w-5 text-amber-400" />
        ) : (
          <Moon className="h-5 w-5" style={{ rotate: "180deg" }} />
        )}
      </span>
    </button>
  );
}
