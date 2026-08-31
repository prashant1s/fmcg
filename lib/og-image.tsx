import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage(eyebrow: string, title: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0C",
          backgroundImage:
            "radial-gradient(circle at 6% 8%, rgba(108,92,231,0.35), transparent 45%), radial-gradient(circle at 94% 28%, rgba(214,255,63,0.25), transparent 45%)",
          padding: "72px",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#0A0A0C",
              border: "2px solid #D6FF3F",
            }}
          >
            <span style={{ color: "#D6FF3F", fontSize: 30, fontWeight: 700 }}>W</span>
          </div>
          <span
            style={{
              color: "#FAF8F3",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Whizoidstudio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#D6FF3F",
              fontSize: 22,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <span
              style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: "#D6FF3F" }}
            />
            {eyebrow}
          </div>
          <div
            style={{
              color: "#FAF8F3",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", color: "#9E9EA7", fontSize: 22 }}>
          whizoidstudio.com — Social growth for FMCG brands
        </div>
      </div>
    ),
    ogSize
  );
}
