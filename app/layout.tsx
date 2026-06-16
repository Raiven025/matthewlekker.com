import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  variable: "--font-cormorant",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matthew Lekker Photography | Architectural & Interior Photography",
  description: "Architectural and interior photography by Matthew Lekker. Specializing in residential, commercial, hospitality, and exterior architecture photography worldwide.",
  alternates: {
    canonical: "https://matthewlekker.com",
  },
  openGraph: {
    title: "Matthew Lekker Photography | Architectural & Interior Photography",
    description: "Framing spaces with soul — architectural & interior photography available worldwide.",
    url: "https://matthewlekker.com",
    siteName: "Matthew Lekker Photography",
    type: "website",
    images: [
      {
        url: "https://matthewlekker.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matthew Lekker Photography — Architectural & Interior Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Lekker Photography",
    description: "Framing spaces with soul — architectural & interior photography worldwide.",
    images: ["https://matthewlekker.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${cormorant.variable} ${ebGaramond.variable} ${montserrat.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/lekk4989-dxo_deepprime-3-large-oDrL06IDHBdwHOVp.jpeg"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F0EDE8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
