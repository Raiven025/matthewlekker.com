import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  style: ["normal"],
  variable: "--font-raleway",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matthew Lekker Photography | Architectural & Interior Photography NJ",
  description: "Architectural and interior photography in New Jersey. Specializing in residential, commercial, hospitality, and exterior architecture photography across the Tri-State Area.",
  alternates: {
    canonical: "https://matthewlekker.com",
  },
  openGraph: {
    title: "Matthew Lekker Photography | Architectural & Interior Photography NJ",
    description: "Framing spaces with soul   architectural & interior photography serving NJ, NY, and CT.",
    url: "https://matthewlekker.com",
    siteName: "Matthew Lekker Photography",
    type: "website",
    images: [
      {
        url: "https://matthewlekker.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matthew Lekker Photography   Architectural & Interior Photography NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Lekker Photography",
    description: "Framing spaces with soul   architectural & interior photography in NJ.",
    images: ["https://matthewlekker.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${raleway.variable} ${inter.variable}`}>
      <head>
        {/* Preload hero image   it is the LCP element on the homepage */}
        <link
          rel="preload"
          as="image"
          href="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/lekk4989-dxo_deepprime-3-large-oDrL06IDHBdwHOVp.jpeg"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
