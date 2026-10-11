import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.type === "payment" && body.data?.id) {
      const payment = new Payment(client);
      const paymentInfo = await payment.get({ id: body.data.id });

      if (paymentInfo.status === "approved") {
        console.log("Pago aprobado:", paymentInfo.id, paymentInfo.transaction_amount);
        // Aquí podés: guardar en BD, mandar email, actualizar contador, etc.
        // TODO: Integrar con tu base de datos (Supabase) para registrar la donación
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error en webhook MP:", error);
    return NextResponse.json({ error: "Error procesando webhook" }, { status: 500 });
  }
}