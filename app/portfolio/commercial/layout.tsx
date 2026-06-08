import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Space Photography NJ | Matthew Lekker",
  description: "Commercial interior photography in New Jersey — offices, showrooms, retail spaces, and professional environments. Photography that communicates your brand to clients and tenants.",
  alternates: {
    canonical: "https://matthewlekker.com/portfolio/commercial",
  },
  openGraph: {
    title: "Commercial Space Photography NJ | Matthew Lekker",
    description: "Office, showroom, and retail photography across NJ, NY, and CT. High-resolution images delivered in 48 hours.",
    url: "https://matthewlekker.com/portfolio/commercial",
    images: [{ url: "https://matthewlekker.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
