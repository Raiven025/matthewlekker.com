import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Matthew Lekker | Architectural Photographer NJ",
  description: "Matthew Lekker is a New Jersey-based architectural and interior photographer with 10+ years of experience. Serving architects, designers, and hospitality brands across NJ, NY, and CT.",
  alternates: {
    canonical: "https://matthewlekker.com/about",
  },
  openGraph: {
    title: "About Matthew Lekker | Architectural Photographer NJ",
    description: "10+ years photographing residential, commercial, and hospitality spaces across the Tri-State Area. 48-hour image delivery.",
    url: "https://matthewlekker.com/about",
    images: [{ url: "https://matthewlekker.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
