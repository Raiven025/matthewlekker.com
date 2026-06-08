'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax background image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/dji_0558-YbNJgXeaV7Szz4Q8.jpeg)`,
          }}
        />
        {/* Deep gradient overlay — different from original */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-10 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-6"
        >
          New Jersey · Architectural & Interior Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white leading-none mb-4"
        >
          Framing
          <br />
          <span className="italic text-[#c9a96e]">Spaces</span>
          <br />
          with Soul
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-24 h-px bg-[#c9a96e] mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-white/60 text-sm md:text-base tracking-[0.15em] uppercase max-w-xl mx-auto mb-10 whitespace-nowrap"
        >
          Residential · Commercial · Hospitality · Architecture
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/portfolio"
            className="bg-[#c9a96e] text-black text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#e8d5a3] transition-all duration-300 font-medium"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="border border-white/40 text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
          >
            Book a Shoot
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-[#c9a96e] to-transparent"
        />
      </motion.div>
    </section>
  );
}
