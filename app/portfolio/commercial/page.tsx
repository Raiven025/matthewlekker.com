'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HERO = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/';
const BASE = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=900,fit=crop/AMqlLZQweECGbqM2/';
const photos = [
  { src: BASE + '0j6a3776-mnlJBwyeLEuDyqKw.jpg', alt: 'Commercial restaurant interior — NJ photography' },
  { src: BASE + '0j6a3624-AQEZMrELvGsvM66v.jpg', alt: 'Commercial interior space — professional photography NJ' },
  { src: BASE + '0j6a3720-1-mv0JoGXe5nI35bGB.jpg', alt: 'Commercial photography — modern interior NJ' },
  { src: BASE + '0j6a3740-mp8J0QGP1puROZaq.jpg', alt: 'Commercial space interior — architectural photography NJ' },
  { src: BASE + '0j6a1063-enhanced-nr-AE0r04GEvBH8V4x8.jpeg', alt: 'Commercial interior photography — NJ professional' },
  { src: BASE + '0j6a1079-enhanced-nr-YleQeyGzw1t4keb3.jpeg', alt: 'Commercial space — interior photography New Jersey' },
  { src: BASE + '0j6a1097-enhanced-nr-m7VbVKG2pMHe1PXo.jpeg', alt: 'Professional commercial interior — NJ photography' },
  { src: BASE + '0j6a6597-AQEZMgMDNguQp82e.jpg', alt: 'Commercial interior design photography — NJ' },
  { src: BASE + '0j6a6626-AQEZMgMD13TWb6X7.jpg', alt: 'Commercial space photography — New Jersey' },
  { src: BASE + '0j6a6646-m6Lb5B5jOLuloaEd.jpg', alt: 'Interior commercial photography — NJ professional' },
  { src: BASE + 'dji_0543-m5KnkDebrqiw1p5D.jpeg', alt: 'Aerial commercial property — drone photography NJ' },
  { src: BASE + 'dji_0594-YleQbNzyZkc9ExLB.jpeg', alt: 'Commercial exterior aerial — architectural photography NJ' },
  { src: BASE + 'dji_0597-1-YX4xVLGPQvCk365q.jpeg', alt: 'Commercial property drone shot — NJ architecture photography' },
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
        <Image src={HERO + '0j6a3776-mnlJBwyeLEuDyqKw.jpg'} alt={photos[0].alt} fill className="object-cover" priority sizes="100vw" />
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
