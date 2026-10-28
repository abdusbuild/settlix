import { ogAlt, ogSize, renderOgImage } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Loan Settlement · Anti-Harassment · Legal Support",
    title: "Behind on EMIs? Let's settle it.",
    subtitle: "Settle personal loans and credit card dues, and stop recovery agent harassment. Office in Noida.",
  });
}
