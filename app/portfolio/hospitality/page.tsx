'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <div className="bg-[#0a0a0a]">
      <section className="bg-[#0a0a0a] pt-20 pb-6 px-8 md:px-20">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors mb-10">
          ← Portfolio
        </Link>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">Hotels & Venues</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extralight text-white tracking-tight">Hospitality</motion.h1>
        <div className="w-12 h-px bg-[#c9a96e] mt-8" />
      </section>

      <div className="w-full h-[60vh] relative overflow-hidden">
        <Image src="/images/Hospitality/LEKK0009-DxO_DeepPRIME-3.jpeg" alt="Luxury hotel interior   NJ hospitality photography" fill className="object-cover" priority sizes="100vw" />
      </div>

      <section ref={gridRef} className="px-8 md:px-20 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {photos.map((photo, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative overflow-hidden group"
              style={{ height: '420px' }}
            >
              <Image src={photo.src} alt={photo.alt} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 py-20 text-center border-t border-white/5">
        <Link href="/contact"
          className="inline-block bg-[#c9a96e] text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#e8d5a3] transition-all duration-300 font-medium">
          Book a Hospitality Shoot
        </Link>
      </section>
    </div>
  );
}
