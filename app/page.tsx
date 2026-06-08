import type { Metadata } from "next";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ImmersiveGallery from "./components/ImmersiveGallery";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://matthewlekker.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://matthewlekker.com/#business",
      "name": "Matthew Lekker Photography",
      "description": "Architectural and interior photography based in New Jersey, serving architects, designers, developers, and hospitality brands across the Tri-State Area.",
      "url": "https://matthewlekker.com",
      "email": "info@matthewlekker.com",
      "image": "https://matthewlekker.com/og-image.jpg",
      "areaServed": [
        { "@type": "State", "name": "New Jersey" },
        { "@type": "State", "name": "New York" },
        { "@type": "State", "name": "Connecticut" },
      ],
      "serviceType": [
        "Architectural Photography",
        "Interior Photography",
        "Residential Photography",
        "Commercial Photography",
        "Hospitality Photography",
        "Exterior Architecture Photography",
      ],
      "sameAs": [
        "https://www.instagram.com/matthewlekker/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://matthewlekker.com/#person",
      "name": "Matthew Lekker",
      "jobTitle": "Architectural & Interior Photographer",
      "worksFor": { "@id": "https://matthewlekker.com/#business" },
      "url": "https://matthewlekker.com",
      "sameAs": [
        "https://www.instagram.com/matthewlekker/",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Portfolio />
      <About />
      <Testimonials />
      <ImmersiveGallery />
      <Contact />
    </>
  );
}
