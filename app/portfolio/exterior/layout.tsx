import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Architecture Photography NJ | Matthew Lekker",
  description: "Exterior architecture and facade photography in New Jersey   residential buildings, commercial structures, and aerial photography serving architects and developers across NJ, NY, and CT.",
  alternates: {
    canonical: "https://matthewlekker.com/portfolio/exterior",
  },
  openGraph: {
    title: "Exterior Architecture Photography NJ | Matthew Lekker",
    description: "Architectural exterior and facade photography for the Tri-State Area. Bold geometry, natural light, professional results.",
    url: "https://matthewlekker.com/portfolio/exterior",
    images: [{ url: "https://matthewlekker.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ExteriorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
