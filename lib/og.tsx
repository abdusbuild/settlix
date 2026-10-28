import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${site.name} | Loan Settlement & Anti-Harassment Support in India`;

// Shared 1200x630 share card used for WhatsApp, Instagram, X/Twitter, Facebook and LinkedIn link previews
export async function renderOgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const logo = await readFile(join(process.cwd(), "public/settlix-logo-light.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0B1B3A 0%, #12285A 60%, #0A3D9A 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={382} height={101} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#7FE0D5", marginBottom: 18 }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: title.length > 40 ? 58 : 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>{title}</div>
          <div style={{ fontSize: 30, lineHeight: 1.4, color: "#C9D4E8", marginTop: 22, maxWidth: 980 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26, color: "#C9D4E8" }}>
          <div style={{ display: "flex" }}>{site.url.replace(/^https?:\/\//, "")}</div>
          <div style={{ display: "flex", background: "#0E8C82", color: "#FFFFFF", padding: "12px 26px", borderRadius: 999, fontWeight: 600 }}>
            Free consultation · {site.phones[0].display}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
