import { cn } from "@/lib/utils";

export default function TermsContent({
  compact = false,
  large = false,
}: {
  compact?: boolean;
  large?: boolean;
}) {
  return (
    <div
      className={cn(
        "space-y-6 text-sm leading-relaxed text-muted-foreground",
        compact && "space-y-4 text-xs",
        large && "text-base"
      )}
    >
      <div className="rounded-2xl border border-amber-200/70 bg-amber-50/60 p-4 text-xs font-semibold text-amber-900 dark:border-amber-800/40 dark:bg-amber-950/20 dark:text-amber-200">
        Los aportes son completamente voluntarios y tienen como único fin colaborar con el
        desarrollo de Plus One. No constituyen una inversión, participación societaria ni
        garantizan beneficios económicos futuros.
      </div>

      <div>
        <h2 className={cn("mb-2 text-lg font-black text-foreground", compact && "text-base", large && "text-xl")}>
          TÉRMINOS Y CONDICIONES DE USO
        </h2>
        <p className="text-xs font-semibold">Última actualización: 2 de agosto de 2026</p>
        <p className="mt-3">
          Bienvenido a Plus One. Estos Términos y Condiciones regulan el acceso y uso del sitio
          web de Plus One y el registro voluntario de personas interesadas en el proyecto. Al
          registrarte o utilizar este sitio, aceptás íntegramente las presentes condiciones.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">1. ¿Qué es Plus One?</h3>
        <p>
          Plus One es un proyecto tecnológico actualmente en desarrollo cuyo objetivo es crear una
          plataforma que permita conectar personas interesadas en compartir actividades sociales,
          recreativas y profesionales de forma segura y organizada.
        </p>
        <p className="mt-2">
          El sitio web tiene como finalidad presentar el proyecto, recibir registros de personas
          interesadas y permitir aportes voluntarios destinados al desarrollo de la plataforma.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">2. Estado actual del proyecto</h3>
        <p>Plus One se encuentra actualmente en una etapa de desarrollo y validación.</p>
        <p className="mt-2">
          La información presentada en este sitio, incluyendo imágenes, diseños, funciones,
          características, fechas estimadas y demás contenidos, tiene carácter ilustrativo y podrá
          modificarse durante el proceso de desarrollo.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">3. Registro en la lista de espera</h3>
        <p>El registro en la lista de espera tiene como único propósito manifestar interés en el proyecto.</p>
        <p className="mt-2">Registrarse:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>No garantiza el acceso inmediato a la plataforma.</li>
          <li>No constituye una reserva definitiva.</li>
          <li>No implica la existencia de una relación contractual.</li>
          <li>No asegura una fecha determinada de lanzamiento.</li>
          <li>No garantiza la disponibilidad del servicio en todas las regiones.</li>
          <li>Solo se permite un registro por persona y por dirección de correo electrónico.</li>
        </ul>
        <p className="mt-2">
          Plus One podrá contactar a los usuarios registrados para informar novedades relacionadas
          con el proyecto.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">4. Modificaciones del proyecto</h3>
        <p>El desarrollo de Plus One es dinámico.</p>
        <p className="mt-2">
          La empresa podrá modificar, agregar, eliminar o reemplazar funcionalidades, servicios,
          características, diseños, planes comerciales o cualquier otro aspecto del proyecto sin
          previo aviso.
        </p>
        <p className="mt-2">
          Asimismo, la fecha estimada de lanzamiento podrá modificarse debido a cuestiones
          técnicas, operativas, financieras o legales.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">5. Información proporcionada por el usuario</h3>
        <p>El usuario declara que toda la información suministrada durante el registro es verdadera, exacta y actualizada.</p>
        <p className="mt-2">No está permitido:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>utilizar identidades falsas;</li>
          <li>registrarse en nombre de terceros sin autorización;</li>
          <li>proporcionar información engañosa;</li>
          <li>crear múltiples registros con fines fraudulentos.</li>
        </ul>
        <p className="mt-2">
          Plus One podrá solicitar información adicional para verificar la identidad cuando lo
          considere necesario.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">6. Eliminación de registros</h3>
        <p>Plus One se reserva el derecho de suspender, bloquear o eliminar registros cuando detecte:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>información falsa;</li>
          <li>intentos de fraude;</li>
          <li>uso indebido del sitio;</li>
          <li>actividades que puedan perjudicar al proyecto o a otros usuarios.</li>
        </ul>
        <p className="mt-2">Esta decisión podrá adoptarse sin necesidad de previo aviso.</p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">7. Edad mínima</h3>
        <p>El registro en este sitio está permitido únicamente para personas mayores de 18 años.</p>
        <p className="mt-2">
          Al completar el formulario, el usuario declara bajo su responsabilidad cumplir con dicho
          requisito.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">8. Propiedad intelectual</h3>
        <p>
          Todo el contenido presente en este sitio, incluyendo el nombre Plus One, logotipos,
          diseños, imágenes, textos, interfaces, marcas, gráficos y demás elementos visuales o
          técnicos, pertenece a Plus One o es utilizado con la correspondiente autorización.
        </p>
        <p className="mt-2">
          Queda prohibida su reproducción, modificación o utilización sin autorización previa y por
          escrito.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">9. Limitación de responsabilidad</h3>
        <p>El usuario reconoce que Plus One se encuentra en etapa de desarrollo. En consecuencia:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>el sitio puede contener errores o interrupciones;</li>
          <li>determinadas funciones podrán no estar disponibles;</li>
          <li>el contenido podrá modificarse en cualquier momento;</li>
          <li>el lanzamiento podrá demorarse o incluso cancelarse.</li>
        </ul>
        <p className="mt-2">
          Plus One no será responsable por daños directos o indirectos derivados de la utilización
          del sitio web o de expectativas generadas respecto del futuro lanzamiento del proyecto.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">10. Comunicaciones</h3>
        <p>
          Al registrarse, el usuario autoriza a Plus One a enviar comunicaciones relacionadas
          exclusivamente con el proyecto, incluyendo novedades, avances, invitaciones a pruebas,
          lanzamiento de nuevas funciones y anuncios importantes.
        </p>
        <p className="mt-2">
          El usuario podrá solicitar dejar de recibir estas comunicaciones en cualquier momento.
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">11. Modificaciones de estos términos</h3>
        <p>Plus One podrá actualizar estos Términos y Condiciones cuando resulte necesario.</p>
        <p className="mt-2">La versión vigente será siempre la publicada en este sitio web.</p>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-foreground">12. Contacto</h3>
        <p>
          Para cualquier consulta relacionada con estos Términos y Condiciones, podés comunicarte a
          través del correo electrónico oficial que será publicado en este sitio.
        </p>
      </div>

      <div id="privacidad">
        <h3 className="mb-2 font-bold text-foreground">13. Política de Privacidad</h3>
        <p>
          Los datos personales que proporcionás al registrarte (nombre, correo electrónico,
          teléfono y edad) se utilizan únicamente con fines relacionados con el proyecto Plus One:
          contactarte con novedades, invitaciones a pruebas y avances del desarrollo.
        </p>
        <p className="mt-2">
          No se venden, ceden ni comparten tus datos con terceros. Podés solicitar la eliminación
          de tus datos en cualquier momento escribiendo al correo oficial de contacto.
        </p>
      </div>
    </div>
  );
}
