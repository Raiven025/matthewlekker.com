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
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1408 50%, #0a0a0a 100%)',
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #c9a96e 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-6"
        >
          Let's Work Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extralight text-white tracking-tight mb-6 leading-tight"
        >
          Ready to elevate
          <br />
          <em className="italic text-[#c9a96e]">your space?</em>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-px bg-[#c9a96e] mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/50 text-base leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Whether you're an architect, designer, developer, or hospitality brand — let's create images that stop people in their tracks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-[#c9a96e] text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#e8d5a3] transition-all duration-300 font-medium"
          >
            Start a Project
          </Link>
          <a
            href="mailto:info@matthewlekker.com"
            className="border border-white/20 text-white/70 text-xs tracking-[0.3em] uppercase px-12 py-4 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
          >
            Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
