'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from '@/app/components/Lightbox';

const photos = [
  { src: '/images/Hospitality/LEKK0009-DxO_DeepPRIME-3.jpeg', alt: 'Luxury hotel interior photography   NJ hospitality' },
  { src: '/images/Hospitality/LEKK0040-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior   hospitality photography NJ' },
  { src: '/images/Hospitality/LEKK0118-DxO_DeepPRIME-3.jpeg', alt: 'Hotel room   NJ hospitality interior photography' },
  { src: '/images/Hospitality/LEKK0152-DxO_DeepPRIME-3.jpeg', alt: 'Hospitality interior   NJ photography' },
  { src: '/images/Hospitality/LEKK0223-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior design   NJ hospitality photography' },
  { src: '/images/Hospitality/LEKK0286-DxO_DeepPRIME-3-2.jpeg', alt: 'Luxury hotel space   hospitality photography NJ' },
  { src: '/images/Hospitality/LEKK0740-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior   NJ hospitality photography' },
  { src: '/images/Hospitality/LEKK0752-DxO_DeepPRIME-3.jpeg', alt: 'Hospitality interior photography   NJ' },
  { src: '/images/Hospitality/LEKK0760-DxO_DeepPRIME-3.jpeg', alt: 'Hotel room photography   NJ hospitality' },
  { src: '/images/Hospitality/LEKK0779-DxO_DeepPRIME-3.jpeg', alt: 'Luxury hotel interior   NJ photography' },
  { src: '/images/Hospitality/LEKK0783-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior design   hospitality photography NJ' },
  { src: '/images/Hospitality/LEKK0797-DxO_DeepPRIME-3.jpeg', alt: 'Hospitality photography   NJ hotel interior' },
  { src: '/images/Hospitality/LEKK1060-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior   NJ hospitality photography' },
  { src: '/images/Hospitality/LEKK1080-DxO_DeepPRIME-3.jpeg', alt: 'Luxury hotel room   NJ hospitality photography' },
  { src: '/images/Hospitality/LEKK1302-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior photography   NJ' },
  { src: '/images/Hospitality/LEKK1522-DxO_DeepPRIME-3-1.jpeg', alt: 'Hospitality interior   NJ photography' },
  { src: '/images/Hospitality/LEKK1650-DxO_DeepPRIME-3.jpeg', alt: 'Hotel design   NJ hospitality photography' },
  { src: '/images/Hospitality/LEKK1834-DxO_DeepPRIME-3.jpeg', alt: 'Luxury hotel interior   NJ photography' },
  { src: '/images/Hospitality/LEKK1842-DxO_DeepPRIME-3.jpeg', alt: 'Hotel room photography   NJ hospitality' },
  { src: '/images/Hospitality/LEKK2150-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior   hospitality photography NJ' },
  { src: '/images/Hospitality/LEKK2238-DxO_DeepPRIME-3.jpeg', alt: 'Hospitality interior photography   NJ' },
  { src: '/images/Hospitality/LEKK2250-DxO_DeepPRIME-3.jpeg', alt: 'Hotel room   NJ hospitality photography' },
  { src: '/images/Hospitality/LEKK2254-DxO_DeepPRIME-3.jpeg', alt: 'Luxury hotel interior   hospitality photography NJ' },
  { src: '/images/Hospitality/LEKK2258-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior design   NJ photography' },
  { src: '/images/Hospitality/LEKK2270-DxO_DeepPRIME-3.jpeg', alt: 'Hospitality photography   NJ hotel' },
  { src: '/images/Hospitality/LEKK2342-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior   NJ hospitality photography' },
  { src: '/images/Hospitality/LEKK2350-DxO_DeepPRIME-3.jpeg', alt: 'Luxury hotel room   NJ photography' },
  { src: '/images/Hospitality/LEKK2354-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior photography   NJ hospitality' },
  { src: '/images/Hospitality/LEKK3201-DxO_DeepPRIME-3.jpeg', alt: 'Hospitality interior   NJ photography' },
  { src: '/images/Hospitality/LEKK3405-DxO_DeepPRIME-3.jpeg', alt: 'Hotel design photography   NJ' },
  { src: '/images/Hospitality/LEKK3703-DxO_DeepPRIME-3.jpeg', alt: 'Luxury hotel interior   NJ hospitality photography' },
  { src: '/images/Hospitality/LEKK3753-DxO_DeepPRIME-3.jpeg', alt: 'Hotel interior   hospitality photography NJ' },
  { src: '/images/Hospitality/LEKK3932-DxO_DeepPRIME-3.jpeg', alt: 'Hospitality photography   NJ hotel interior' },
  { src: '/images/Hospitality/Amarula-Stop.jpg', alt: 'Amarula Stop hospitality photography' },
  { src: '/images/Hospitality/Cairo-Marriott.jpeg', alt: 'Cairo Marriott hotel interior photography' },
  { src: '/images/Hospitality/Steigenberger-Nile-Palace-Foyer.jpg', alt: 'Steigenberger Nile Palace foyer   hospitality photography' },
  { src: '/images/Hospitality/W-hotel-Ft.-Lauderdale.jpeg', alt: 'W Hotel Fort Lauderdale   hospitality photography' },
];

export default function HospitalityPage() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-80px' });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#171212]">
      <section className="bg-[#171212] pt-20 pb-6 px-8 md:px-20">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.3em] uppercase hover:text-[#B8978A] transition-colors mb-10">
          ← Portfolio
        </Link>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[#B8978A] text-xs tracking-[0.4em] uppercase mb-4">Hotels & Venues</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extralight text-white tracking-tight">Hospitality</motion.h1>
        <div className="w-12 h-px bg-[#B8978A] mt-8" />
      </section>

      <div className="w-full h-[60vh] relative overflow-hidden">
        <Image src="/images/Hospitality/LEKK0009-DxO_DeepPRIME-3.jpeg" alt="Luxury hotel interior photography" fill className="object-cover" priority sizes="100vw" />
      </div>

      <section ref={gridRef} className="px-8 md:px-20 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {photos.map((photo, i) => (
            <motion.button key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 1) }}
              onClick={() => setLightboxIndex(i)}
              className="relative overflow-hidden group aspect-square cursor-pointer focus:outline-none"
            >
              <Image src={photo.src} alt={photo.alt} fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 py-20 text-center border-t border-white/5">
        <Link href="/contact"
          className="inline-block bg-[#B8978A] text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#d4b5a8] transition-all duration-300 font-medium">
          Book a Hospitality Shoot
        </Link>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNext={() => setLightboxIndex(i => i !== null ? Math.min(i + 1, photos.length - 1) : null)}
            onPrev={() => setLightboxIndex(i => i !== null ? Math.max(i - 1, 0) : null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
