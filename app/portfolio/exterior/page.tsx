'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const photos = [
  { src: '/images/Architecture/0J6A0307-Enhanced-NR.jpeg', alt: 'Contemporary residential architecture exterior   NJ architecture photography' },
  { src: '/images/Architecture/0J6A6651...CROP.jpeg', alt: 'Architectural exterior   NJ photography' },
  { src: '/images/Architecture/8.jpg', alt: 'Residential exterior   NJ architectural photography' },
  { src: '/images/Architecture/DJI_0432.jpeg', alt: 'Aerial drone architecture shot   exterior photography NJ' },
  { src: '/images/Architecture/DJI_0447.jpeg', alt: 'Residential exterior from above   drone architecture photography NJ' },
  { src: '/images/Architecture/DJI_0486.jpeg', alt: 'Architectural exterior drone view   NJ photography' },
  { src: '/images/Architecture/DJI_0558.jpeg', alt: 'Exterior architecture aerial   NJ drone photography' },
  { src: '/images/Architecture/DJI_0594.jpeg', alt: 'Exterior architecture with dramatic sky   NJ aerial photography' },
  { src: '/images/Architecture/DJI_0597-1.jpeg', alt: 'Architectural exterior drone shot   NJ photography' },
];

export default function ExteriorPage() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#0a0a0a]">
      <section className="bg-[#0a0a0a] pt-20 pb-6 px-8 md:px-20">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors mb-10">
          ← Portfolio
        </Link>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">Exteriors</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extralight text-white tracking-tight">Architecture</motion.h1>
        <div className="w-12 h-px bg-[#c9a96e] mt-8" />
      </section>

      <div className="w-full h-[60vh] relative overflow-hidden">
        <Image src="/images/Architecture/0J6A0307-Enhanced-NR.jpeg" alt="Contemporary residential architecture exterior   NJ" fill className="object-cover" priority sizes="100vw" />
      </div>

      <section ref={gridRef} className="px-8 md:px-20 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {photos.map((photo, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden group"
              style={{ height: i === 0 ? '560px' : '380px' }}
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
          Book an Architecture Shoot
        </Link>
      </section>
    </div>
  );
}
