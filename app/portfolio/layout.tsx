import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Matthew Lekker Architectural Photography NJ",
  description: "Browse Matthew Lekker's architectural and interior photography portfolio   residential interiors, exterior architecture, commercial spaces, and hospitality venues across NJ, NY, and CT.",
  alternates: {
    canonical: "https://matthewlekker.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Matthew Lekker Architectural Photography NJ",
    description: "Residential, commercial, hospitality, and exterior architecture photography across the Tri-State Area.",
    url: "https://matthewlekker.com/portfolio",
    images: [{ url: "https://matthewlekker.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
