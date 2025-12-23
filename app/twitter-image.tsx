import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(59,130,246,0.25), rgba(14,165,233,0.22), #0b1220)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: 48,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(13,23,39,0.7)",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: -1,
              color: "#ffffff",
            }}
          >
            Keylan King
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#bcd4ff",
              maxWidth: 900,
            }}
          >
            Frontend Developer — Next.js, React, TypeScript, Tailwind
          </div>
          <div style={{ fontSize: 22, color: "#9bd4e8" }}>keylanking.dev</div>
        </div>
      </div>
    ),
    size
  );
}
