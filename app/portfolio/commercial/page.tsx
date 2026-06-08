'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const photos = [
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=900,h=700,fit=crop/AMqlLZQweECGbqM2/0j6a3776-mnlJBwyeLEuDyqKw.jpg', alt: 'Commercial space' },
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=900,h=700,fit=crop/AMqlLZQweECGbqM2/0j6a9894-YleQZR60rLUvLLWP.jpg', alt: 'Office interior' },
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=900,h=700,fit=crop/AMqlLZQweECGbqM2/0j6a5537-2-m7VbKpjeLeF7BQ75.jpeg', alt: 'Showroom' },
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=900,h=700,fit=crop/AMqlLZQweECGbqM2/lekk5195-dxo_deepprime-3-large-ZoKOF06HJCCN3BA0.jpeg', alt: 'Commercial interior' },
];

export default function CommercialPage() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a]">
        <section className="relative h-[45vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos[0].src})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="relative z-10 px-8 md:px-12 max-w-7xl mx-auto w-full">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors mb-6">
              ← Portfolio
            </Link>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">Spaces</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extralight text-white tracking-tight">Commercial</motion.h1>
          </div>
        </section>

        <section ref={gridRef} className="px-8 md:px-12 py-20 max-w-7xl mx-auto">
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

        <section className="px-8 md:px-12 py-16 text-center border-t border-white/5">
          <Link href="/contact"
            className="inline-block bg-[#c9a96e] text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#e8d5a3] transition-all duration-300 font-medium">
            Book a Commercial Shoot
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
