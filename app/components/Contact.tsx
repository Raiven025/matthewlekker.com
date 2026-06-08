'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-36 px-8 md:px-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1408 50%, #0a0a0a 100%)',
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #c9a96e 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-8"
        >
          Let's Work Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extralight text-white tracking-tight leading-none mb-8"
        >
          Ready to elevate
          <br />
          <em className="italic text-[#c9a96e]">your space?</em>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-px bg-[#c9a96e] mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/45 text-base leading-relaxed mb-14 max-w-md text-center"
        >
          Whether you're an architect, designer, developer, or hospitality brand — let's create images that stop people in their tracks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="bg-[#c9a96e] text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#e8d5a3] transition-all duration-300 font-medium"
          >
            Start a Project
          </Link>
          <a
            href="mailto:info@matthewlekker.com"
            className="border border-white/20 text-white/60 text-xs tracking-[0.3em] uppercase px-12 py-4 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
          >
            Send an Email
          </a>
        </motion.div>

      </div>
    </section>
  );
}
