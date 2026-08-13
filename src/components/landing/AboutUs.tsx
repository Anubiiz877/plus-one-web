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
  vision: string;
};

const EQUIPO: Miembro[] = [
  {
    nombre: "Facundo Weber",
    rol: "Fundador & CEO",
    iniciales: "FW",
    gradiente: "from-indigo-500 to-purple-600",
    resumen:
      "Ideó Plus One para transformar el tiempo y los conocimientos en oportunidades laborales reales, ayudando a que nadie viva una experiencia en soledad.",
    bio: "Fundador y líder estratégico de Plus One. Con formación en Economía y Administración y trayectoria en gestión operativa, administrativa y atención al cliente, Facundo identificó cómo las plataformas de la economía colaborativa podían rediseñarse para poner el valor en las conexiones humanas. La idea surgió al analizar modelos de compañía on-demand en Asia y evolucionó durante años hasta convertirse en una plataforma amplia, accesible y adaptada a la cultura latinoamericana. Su visión no solo busca ayudar a que personas introvertidas o apasionadas se animen a vivir experiencias increíbles acompañadas, sino también crear una nueva fuente de ingresos flexibles para cualquier persona dispuesta a ofrecer su tiempo, su conversación o sus conocimientos (desde profesores y fotógrafos hasta gamers o deportistas).",
    vision:
      "Así como Uber revolucionó el transporte y Rappi las entregas, Plus One nace para descentralizar el trabajo del futuro: democratizar las oportunidades para que cualquier persona pueda monetizar su forma de ser, sus pasiones y su conocimiento ayudando a otros a disfrutar más la vida.",
  },
  {
    nombre: "Michael Marenco",
    rol: "Cofundador & Programador",
    iniciales: "MM",
    gradiente: "from-purple-600 to-fuchsia-500",
    resumen:
      "Encargado de construir la arquitectura de Plus One y desarrollar software a medida que transforma ideas de negocio en plataformas funcionales.",
    bio: "Desarrollador Full Stack enfocado en el desarrollo de plataformas web de alto rendimiento y soluciones de software a medida. Como responsable del desarrollo integral de Plus One, Michael se encargó de darle estructura, seguridad y agilidad al código, demostrando cómo una gran visión puede convertirse en una experiencia digital robusta y lista para escalar. Con una mentalidad práctica y orientada a resultados, Michael colabora con emprendedores para materializar sus conceptos en aplicaciones web y móviles funcionales. Se encarga de todo el ciclo de desarrollo —desde la interfaz visual hasta la lógica del servidor y la protección de datos— garantizando soluciones digitales limpias, modernas y adaptadas a las necesidades reales de cada cliente.",
    vision:
      "La excelencia en el desarrollo de software reside en resolver problemas complejos con soluciones elegantes y sin fricción. Mi visión para Plus One es transformar esa arquitectura sólida en un puente invisible; una infraestructura tan fiable y segura que la tecnología pase a un segundo plano, permitiendo que la verdadera conexión humana sea la protagonista de cada experiencia.",
  },
{
    nombre: "Sofía",
    rol: "Cofundadora & Diseñadora",
    iniciales: "SO",
    gradiente: "from-rose-500 to-orange-400",
    resumen:
      " Encargada del diseño UI/UX en Plus One, transformando el concepto de la plataforma en una experiencia visual intuitiva, atractiva y pensada para la comodidad del usuario.",
    bio: "Sofía es la diseñadora de Plus One: su función fue crear una experiencia atractiva, intuitiva y cómoda para el público. Sofía se encargó de cuidar la estética, los colores, la distribución de los elementos y la decoración, buscando que la plataforma resulte llamativa y fácil de usar sin perder claridad. Además, analiza posibles problemas de usabilidad y propone mejoras para que navegar por la página, encontrar un plan y contactar con un acompañante sea lo más sencillo posible. Y, por supuesto, intenta que en el camino no nos aburramos.",
    vision: "",
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
        className={`mb-4 flex h-32 w-full items-center justify-center rounded-2xl bg-gradient-to-br ${miembro.gradiente} transition-transform duration-300 group-hover:scale-[1.02]`}
      >
        <span className="text-3xl font-black tracking-tight text-white/90">
          {miembro.iniciales}
        </span>
      </div>

      <h3 className="text-lg font-extrabold tracking-tight text-foreground">{miembro.nombre}</h3>
      <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
        {miembro.rol}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{miembro.resumen}</p>

      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-controls={`bio-${miembro.nombre}`}
        className={`mt-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-2xl border py-2.5 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
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

      <div
        id={`bio-${miembro.nombre}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          abierto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="animate-fadeIn mt-4 border-t border-border pt-4">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Sobre {miembro.nombre.split(" ")[0]}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">{miembro.bio}</p>

            {miembro.vision && (
              <div className="mt-4 flex gap-3 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-4">
                <Quote className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                <p className="text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                  &ldquo;{miembro.vision}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AboutUs({ id }: { id?: string }) {
  return (
    <section id={id} className="mx-auto my-14 max-w-5xl px-4">
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
