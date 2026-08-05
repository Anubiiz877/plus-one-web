"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import {
  Bitcoin,
  Check,
  Copy,
  CreditCard,
  Handshake,
  Heart,
  QrCode,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ================= CONFIGURACIÓN =================
// Pega aquí tus enlaces de donación:
const PAYPAL_URL = "https://paypal.me/FacundoWeberRoger";
const STRIPE_URL = "#"; // Pega aquí tu enlace de Stripe (Payment Link)

// Datos de la cuenta para transferencias (recibe pagos desde Mercado Pago y bancos):
const UALA_ALIAS = "WeberRoger";
const UALA_CBU = "3840200500000021605514"; // 22 dígitos
const UALA_TITULAR = " Facundo Weber Roger"; // Nombre del titular de la cuenta

// Pega aquí tus direcciones de billetera cripto (el QR se genera solo desde la dirección):
const CRIPTO_REDES: Record<
  CriptoRed,
  { nombre: string; detalle: string; direccion: string }
> = {
  trx: {
    nombre: "TRX (Red Tron)",
    detalle: "Tron · USDT-TRC20 / TRX",
    direccion: "TKPNaKUjVb3Uy4rZv7wF4VfziJ9Gd2SYVk",
  },
  bsc: {
    nombre: "BSC (BNB Smart Chain)",
    detalle: "BNB Chain · USDT-BEP20 / BNB",
    direccion: "0xa2e8cdb1de84c612216805c7c980ca88b7805712",
  },
};
// =================================================

type Metodo = "paypal" | "cripto" | "mercadopago" | "stripe";
type CriptoRed = "trx" | "bsc";

const METODOS: { id: Metodo; nombre: string; icono: ComponentType<{ className?: string }>; color: string }[] = [
  { id: "paypal", nombre: "PayPal", icono: CreditCard, color: "text-indigo-600 dark:text-indigo-400" },
  { id: "cripto", nombre: "Criptomoneda", icono: Bitcoin, color: "text-amber-500" },
  { id: "mercadopago", nombre: "Mercado Pago", icono: Handshake, color: "text-sky-600 dark:text-sky-400" },
  { id: "stripe", nombre: "Stripe", icono: Zap, color: "text-purple-600 dark:text-purple-400" },
];

function PanelTransferencia({
  Icono,
  colorIcono,
  titulo,
  descripcion,
  copiado,
  onCopiar,
}: {
  Icono: ComponentType<{ className?: string }>;
  colorIcono: string;
  titulo: string;
  descripcion: string;
  copiado: string | null;
  onCopiar: (texto: string, clave: string) => void;
}) {
  return (
    <div className="mt-4 rounded-2xl border border-border bg-card p-5 text-center">
      <Icono className={cn("mx-auto h-6 w-6", colorIcono)} />
      <p className="mt-2 text-sm font-bold text-foreground">{titulo}</p>
      <p className="mt-1 text-xs text-muted-foreground">{descripcion}</p>

      <div className="mt-4 space-y-3 text-left">
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-[11px] font-semibold text-muted-foreground">Alias</p>
          <div className="mt-1 flex items-center gap-2">
            <code className="min-w-0 flex-1 break-all rounded-lg bg-muted px-3 py-2 font-mono text-xs font-bold text-foreground">
              {UALA_ALIAS}
            </code>
            <button
              type="button"
              onClick={() => onCopiar(UALA_ALIAS, "alias")}
              className={cn(
                "flex shrink-0 items-center gap-1 rounded-lg border px-2.5 py-2 text-[11px] font-bold transition active:scale-95",
                copiado === "alias"
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "border-border bg-card text-foreground hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
              )}
            >
              {copiado === "alias" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copiado === "alias" ? "Copiado" : "Copiar"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-[11px] font-semibold text-muted-foreground">CBU</p>
          <div className="mt-1 flex items-center gap-2">
            <code className="min-w-0 flex-1 break-all rounded-lg bg-muted px-3 py-2 font-mono text-xs text-foreground">
              {UALA_CBU}
            </code>
            <button
              type="button"
              onClick={() => onCopiar(UALA_CBU, "cbu")}
              className={cn(
                "flex shrink-0 items-center gap-1 rounded-lg border px-2.5 py-2 text-[11px] font-bold transition active:scale-95",
                copiado === "cbu"
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "border-border bg-card text-foreground hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
              )}
            >
              {copiado === "cbu" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copiado === "cbu" ? "Copiado" : "Copiar"}
            </button>
          </div>
        </div>
      </div>

      <p className="mt-3 text-[11px] font-medium text-muted-foreground">
        Titular: <span className="font-bold text-foreground">{UALA_TITULAR}</span>
      </p>
    </div>
  );
}

export default function DonationSection({ id }: { id?: string }) {
  const currentRaised = 350; // Ejemplo de dinero acumulado
  const goal = 2500; // Meta total
  const percentage = Math.min(Math.round((currentRaised / goal) * 100), 100);

  const [metodo, setMetodo] = useState<Metodo | null>(null);
  const [red, setRed] = useState<CriptoRed | null>(null);
  const [copiado, setCopiado] = useState<string | null>(null);

  async function copiar(texto: string, clave: string) {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(clave);
      setTimeout(() => setCopiado(null), 2000);
    } catch {
      // Portapapeles no disponible; el usuario puede copiar manualmente
    }
  }

  function seleccionarMetodo(m: Metodo) {
    setMetodo(m);
    setRed(null);
    setCopiado(null);
  }

  const redSeleccionada = red ? CRIPTO_REDES[red] : null;
  const qrUrl = redSeleccionada
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        redSeleccionada.direccion
      )}`
    : "";

  return (
    <section id={id} className="mx-auto my-12 max-w-3xl rounded-3xl border border-amber-200/70 bg-gradient-to-b from-amber-50/60 via-card to-card p-6 shadow-lg shadow-amber-500/5 sm:p-8 dark:border-amber-800/40 dark:from-amber-950/20 dark:via-card dark:to-card">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white shadow-md shadow-amber-500/30">
          <Heart className="h-6 w-6 fill-white" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Apoya la Financiación Inicial</h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Cada donación se destina directamente al pago de infraestructura, servidores y validaciones de seguridad.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-2 flex items-center justify-between text-xs font-bold sm:text-sm">
          <span className="flex items-center gap-1.5 text-foreground">
            <Target className="h-4 w-4 text-amber-500" />
            ${currentRaised} USD Recaudados
          </span>
          <span className="text-indigo-600 dark:text-indigo-400">Meta: ${goal} USD</span>
        </div>

        <div className="h-4 w-full overflow-hidden rounded-full bg-muted p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 transition-all duration-1000 shadow-sm"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
          <span>Fase 1: Servidores y App MVP</span>
          <span className="text-indigo-600 dark:text-indigo-400">{percentage}% alcanzado</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {METODOS.map((m) => {
          const Icono = m.icono;
          const activo = metodo === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => seleccionarMetodo(m.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1.5 rounded-2xl border px-3 py-3.5 text-xs font-bold transition active:scale-95",
                activo
                  ? "border-indigo-600 bg-indigo-600/10 shadow-sm dark:border-indigo-500 dark:bg-indigo-500/10"
                  : "border-border bg-card text-foreground shadow-sm hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
              )}
            >
              <Icono className={cn("h-5 w-5", m.color)} />
              {m.nombre}
            </button>
          );
        })}
      </div>

      {metodo === "paypal" && (
        <div className="mt-4 rounded-2xl border border-border bg-card p-5 text-center">
          <CreditCard className="mx-auto h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          <p className="mt-2 text-sm font-bold text-foreground">Donar vía PayPal</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Serás redirigido a PayPal para completar tu aporte de forma segura.
          </p>
          <a
            href={PAYPAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-md transition hover:bg-primary/90 active:scale-95"
          >
            Continuar con PayPal
          </a>
        </div>
      )}

      {metodo === "mercadopago" && (
        <PanelTransferencia
          Icono={Handshake}
          colorIcono="text-sky-600 dark:text-sky-400"
          titulo="Donar desde cualquier billetera digital"
          descripcion="Pagá desde tu app de Mercado Pago: las billeteras digitales están conectadas, por eso la transferencia llega directo a nuestra cuenta, sin costo.( opcion solo para Argentina)"
          copiado={copiado}
          onCopiar={copiar}
        />
      )}

      {metodo === "stripe" && (
        <div className="mt-4 rounded-2xl border border-border bg-card p-5 text-center">
          <Zap className="mx-auto h-6 w-6 text-purple-600 dark:text-purple-400" />
          <p className="mt-2 text-sm font-bold text-foreground">Donar vía Stripe</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Acepta pagos con tarjeta de crédito y débito de forma internacional.
          </p>
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-md transition hover:bg-primary/90 active:scale-95"
          >
            <CreditCard className="h-4 w-4" />
            Continuar con Stripe
          </a>
        </div>
      )}

      {metodo === "cripto" && !red && (
        <div className="mt-4 rounded-2xl border border-border bg-card p-5 text-center">
          <Bitcoin className="mx-auto h-6 w-6 text-amber-500" />
          <p className="mt-2 text-sm font-bold text-foreground">Donar con Criptomoneda</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Elige la red desde la que harás tu transferencia:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {(["trx", "bsc"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRed(r)}
                className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 py-3.5 text-xs font-bold text-foreground shadow-sm transition hover:border-amber-500 hover:text-amber-500 active:scale-95 dark:hover:border-amber-400 dark:hover:text-amber-400"
              >
                <QrCode className="h-5 w-5" />
                {CRIPTO_REDES[r].nombre}
              </button>
            ))}
          </div>
        </div>
      )}

      {metodo === "cripto" && redSeleccionada && (
        <div className="mt-4 rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-sm font-bold text-foreground">
              <Bitcoin className="h-4 w-4 text-amber-500" />
              {redSeleccionada.nombre}
            </p>
            <button
              type="button"
              onClick={() => setRed(null)}
              className="text-[11px] font-semibold text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
            >
              Cambiar red
            </button>
          </div>

          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <Image
                src={qrUrl}
                alt={`QR de donación ${redSeleccionada.nombre}`}
                width={160}
                height={160}
                unoptimized
                loading="lazy"
                className="h-40 w-40"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold text-muted-foreground">
                Dirección de donación
              </p>
              <div className="mt-1 flex items-center gap-2">
                <code className="min-w-0 flex-1 break-all rounded-lg border border-border bg-muted px-3 py-2 font-mono text-[11px] text-foreground">
                  {redSeleccionada.direccion}
                </code>
                <button
                  type="button"
                  onClick={() => copiar(redSeleccionada.direccion, "cripto")}
                  className={cn(
                    "flex shrink-0 items-center gap-1 rounded-lg border px-2.5 py-2 text-[11px] font-bold transition active:scale-95",
                    copiado === "cripto"
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "border-border bg-background text-foreground hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                  )}
                >
                  {copiado === "cripto" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiado === "cripto" ? "Copiada" : "Copiar"}
                </button>
              </div>
              <p className="mt-2 text-[11px] font-medium text-muted-foreground">
                Red: <span className="font-bold text-foreground">{redSeleccionada.detalle}</span>.
                Envía solo en esta red; otras redes pueden perder tu aporte.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-semibold text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-emerald-500" />
        <span>Aportes protegidos y reconocidos en los créditos del proyecto.</span>
      </div>
    </section>
  );
}
