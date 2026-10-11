import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { amount, title } = await req.json();

    if (!amount || !title) {
      return NextResponse.json(
        { error: "Faltan datos: amount y title son requeridos" },
        { status: 400 }
      );
    }

    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [
          {
            title,
            quantity: 1,
            unit_price: Number(amount),
            currency_id: "ARS",
          },
        ],
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_URL}/gracias`,
          failure: `${process.env.NEXT_PUBLIC_URL}/donar?error=1`,
          pending: `${process.env.NEXT_PUBLIC_URL}/donar?pending=1`,
        },
        auto_return: "approved",
        notification_url: `${process.env.NEXT_PUBLIC_URL}/api/mercadopago/webhook`,
      },
    });

    return NextResponse.json({
      init_point: result.init_point,
      id: result.id,
    });
  } catch (error) {
    console.error("Error al crear preferencia MP:", error);
    return NextResponse.json(
      { error: "No se pudo crear la preferencia" },
      { status: 500 }
    );
  }
}