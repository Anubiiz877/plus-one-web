import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PLUS ONE • Tu acompañante ideal";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px",
          background: "linear-gradient(135deg, #312e81 0%, #6d28d9 50%, #4338ca 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: 4 }}>PLUS ONE</div>
        <div style={{ fontSize: 36, fontWeight: 400, opacity: 0.92, marginTop: 24 }}>
          Nunca hagas solo lo que podrías disfrutar acompañado.
        </div>
      </div>
    ),
    { ...size }
  );
}