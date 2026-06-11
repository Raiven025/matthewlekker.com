'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const photos = [
  { src: '/images/Commercial/0J6A1097-Enhanced-NR-2.jpeg', alt: 'Commercial interior photography — NJ professional' },
  { src: '/images/Commercial/0J6A6566.jpeg', alt: 'Commercial space interior — NJ photography' },
  { src: '/images/Commercial/0J6A6597.jpeg', alt: 'Commercial interior — NJ professional photography' },
  { src: '/images/Commercial/Foyer-Check-in-24.jpg', alt: 'Hotel check-in desk — commercial interior photography NJ' },
  { src: '/images/Commercial/Red-Room.jpeg', alt: 'Commercial interior with red accents — NJ photography' },
  { src: '/images/Commercial/Wellness-Room-1.jpeg', alt: 'Wellness room interior — commercial photography NJ' },
];

export default function CommercialPage() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#0a0a0a]">
      <section className="bg-[#0a0a0a] pt-20 pb-6 px-8 md:px-20">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors mb-10">
          ← Portfolio
        </Link>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">Spaces</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extralight text-white tracking-tight">Commercial</motion.h1>
        <div className="w-12 h-px bg-[#c9a96e] mt-8" />
      </section>

      <div className="w-full h-[60vh] relative overflow-hidden">
        <Image src="/images/Commercial/0J6A1097-Enhanced-NR-2.jpeg" alt="Commercial interior photography — NJ" fill className="object-cover" priority sizes="100vw" />
      </div>

      <section ref={gridRef} className="px-8 md:px-20 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {photos.map((photo, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
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
          Book a Commercial Shoot
        </Link>
      </section>
    </div>
  );
}
