'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const stats = [
  { number: '10+', label: 'Years in Architectural Photography' },
  { number: '500+', label: 'Spaces Photographed' },
  { number: '48hr', label: 'Edited Image Delivery' },
  { number: 'Tri-State', label: 'NJ · NY · CT Coverage' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#111111] py-28 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-5 gap-16 md:gap-20 items-start">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-3"
          >
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-5">About Matthew</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight leading-tight mb-8">
              Capturing the art
              <br />
              <em className="italic text-[#c9a96e]">behind every space</em>
            </h2>
            <div className="w-16 h-px bg-[#c9a96e] mb-8" />
            <p className="text-white/55 text-base leading-relaxed mb-5">
              Based in New Jersey, Matthew Lekker is an architectural and interior photographer with a passion for revealing the soul of spaces — from intimate residential interiors to grand commercial landmarks.
            </p>
            <p className="text-white/55 text-base leading-relaxed">
              With a keen eye for light, geometry, and atmosphere, Matthew transforms spaces into visual stories that resonate with architects, designers, builders, and hospitality brands across the Tri-State Area.
            </p>
          </motion.div>

          {/* Right — stats + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-2 md:pt-16"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <p className="text-[#c9a96e] text-3xl font-light mb-2">{stat.number}</p>
                  <p className="text-white/35 text-xs tracking-[0.2em] uppercase leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors duration-300 group"
            >
              Read Full Story
              <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
