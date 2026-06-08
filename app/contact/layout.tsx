import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Shoot | Matthew Lekker Photography NJ",
  description: "Book an architectural or interior photography session with Matthew Lekker. Available throughout New Jersey, New York, and Connecticut. 48-hour edited image delivery.",
  alternates: {
    canonical: "https://matthewlekker.com/contact",
  },
  openGraph: {
    title: "Book a Shoot | Matthew Lekker Photography NJ",
    description: "Get in touch to book residential, commercial, hospitality, or exterior architecture photography across the Tri-State Area.",
    url: "https://matthewlekker.com/contact",
    images: [{ url: "https://matthewlekker.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
