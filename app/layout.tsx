import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Matthew Lekker Photography | Architectural & Interior Photography NJ",
  description: "Architectural and interior photography in New Jersey. Specializing in residential, commercial, hospitality, and exterior architecture photography.",
  keywords: "architectural photography, interior photography, New Jersey, residential photography, commercial photography, hospitality photography",
  openGraph: {
    title: "Matthew Lekker Photography",
    description: "Framing spaces with soul — architectural & interior photography in NJ",
    url: "https://matthewlekker.com",
    siteName: "Matthew Lekker Photography",
    type: "website",
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
