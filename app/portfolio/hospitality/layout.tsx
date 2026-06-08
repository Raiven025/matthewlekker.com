import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality & Hotel Photography NJ | Matthew Lekker",
  description: "Hotel, restaurant, and venue photography in New Jersey. Hospitality images that drive bookings and elevate your brand on OTAs, social media, and marketing materials.",
  alternates: {
    canonical: "https://matthewlekker.com/portfolio/hospitality",
  },
  openGraph: {
    title: "Hospitality & Hotel Photography NJ | Matthew Lekker",
    description: "Hotel, restaurant, and event venue photography across NJ, NY, and CT. Luxury hospitality imagery delivered in 48 hours.",
    url: "https://matthewlekker.com/portfolio/hospitality",
    images: [{ url: "https://matthewlekker.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HospitalityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
