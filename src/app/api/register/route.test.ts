import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { POST, resetIntentos } from "./route";

function peticion(body: unknown): Request {
  return new Request("http://localhost/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const VALIDO = {
  role: "CLIENT",
  nombre: "Ana",
  apellido: "Gómez",
  email: "ana@correo.com",
  telefono: "",
  edad: "25",
  terms_accepted: true,
};

describe("POST /api/register", () => {
  beforeEach(() => {
    resetIntentos();
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }))
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("acepta un registro válido", async () => {
    const res = await POST(peticion(VALIDO));
    expect(res.status).toBe(200);
  });

  it("rechaza si faltan datos", async () => {
    const res = await POST(peticion({ ...VALIDO, email: "" }));
    expect(res.status).toBe(400);
  });

  it("rechaza email con formato inválido", async () => {
    const res = await POST(peticion({ ...VALIDO, email: "no-es-un-email" }));
    expect(res.status).toBe(400);
  });

  it("rechaza edad fuera del rango 18-99", async () => {
    const res = await POST(peticion({ ...VALIDO, edad: "17" }));
    expect(res.status).toBe(400);
  });

  it("rechaza un rol inválido", async () => {
    const res = await POST(peticion({ ...VALIDO, role: "ROBOT" }));
    expect(res.status).toBe(400);
  });

  it("ignora silenciosamente el honeypot completado por bots", async () => {
    const res = await POST(peticion({ ...VALIDO, website: "spam.com" }));
    expect(res.status).toBe(200);
  });

  it("bloquea tras 5 intentos para la misma IP", async () => {
    for (let i = 0; i < 5; i++) {
      const res = await POST(peticion(VALIDO));
      expect(res.status).toBe(200);
    }
    const res = await POST(peticion(VALIDO));
    expect(res.status).toBe(429);
  });
});