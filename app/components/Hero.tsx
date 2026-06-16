'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Disable parallax for users who prefer reduced motion
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.08]);

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
            backgroundImage: `url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/lekk4989-dxo_deepprime-3-large-oDrL06IDHBdwHOVp.jpeg)`,
          }}
        />
        {/* Deep gradient overlay   different from original */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-10 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(196,123,74,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,123,74,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[#C47B4A] text-xs tracking-[0.4em] uppercase mb-6"
        >
          Architectural & Interior Photography · Worldwide
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[3.2rem] md:text-[5rem] lg:text-[6.5rem] font-light tracking-wide text-white leading-[1.1] mb-6"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Framing
          <br />
          <span className="text-[#C47B4A]">Spaces</span>
          <br />
          with Soul
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-24 h-px bg-[#C47B4A] mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-white/60 text-xs md:text-sm tracking-[0.15em] uppercase max-w-xl mx-auto mb-10"
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
            className="copper-gradient text-black text-xs tracking-[0.3em] uppercase px-10 py-4 hover:opacity-90 transition-all duration-300 font-medium"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="border border-white/40 text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:border-[#C47B4A] hover:text-[#C47B4A] transition-all duration-300"
          >
            Book a Shoot
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll line indicator   no text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-[#C47B4A] to-transparent"
        />
      </motion.div>
    </section>
  );
}
