import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Matthew Lekker Photography | Architectural & Interior Photography NJ",
  description: "Architectural and interior photography in New Jersey. Specializing in residential, commercial, hospitality, and exterior architecture photography across the Tri-State Area.",
  keywords: "architectural photography, interior photography, New Jersey, residential photography, commercial photography, hospitality photography, NJ photographer, tri-state area",
  openGraph: {
    title: "Matthew Lekker Photography | Architectural & Interior Photography NJ",
    description: "Framing spaces with soul — architectural & interior photography serving NJ, NY, and CT.",
    url: "https://matthewlekker.com",
    siteName: "Matthew Lekker Photography",
    type: "website",
    images: [
      {
        url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop/AMqlLZQweECGbqM2/45-0j6a6615-A85MgE71JnFrxlJo.jpg",
        width: 1200,
        height: 630,
        alt: "Matthew Lekker Photography — Architectural & Interior Photography NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Lekker Photography",
    description: "Framing spaces with soul — architectural & interior photography in NJ.",
    images: ["https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop/AMqlLZQweECGbqM2/45-0j6a6615-A85MgE71JnFrxlJo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
