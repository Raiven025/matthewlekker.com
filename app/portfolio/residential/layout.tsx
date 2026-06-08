import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Interior Photography NJ | Matthew Lekker",
  description: "Residential interior photography in New Jersey — kitchens, living rooms, bedrooms, and entryways photographed for architects, designers, and real estate developers.",
  alternates: {
    canonical: "https://matthewlekker.com/portfolio/residential",
  },
  openGraph: {
    title: "Residential Interior Photography NJ | Matthew Lekker",
    description: "Interior photography for New Jersey residential projects. High-resolution images delivered within 48 hours.",
    url: "https://matthewlekker.com/portfolio/residential",
    images: [{ url: "https://matthewlekker.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ResidentialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
