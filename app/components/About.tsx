'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
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
    <section className="bg-[#111111] py-24 px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative isolate"
          >
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/lekk5172-dxo_deepprime-3-large-rXe5eGMkw8wyYGl4.jpeg"
                alt="Matthew Lekker Photography"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#c9a96e]/30 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-[#c9a96e]" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">About Matthew</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-6 leading-tight">
              Capturing the art
              <br />
              <em className="italic text-[#c9a96e]">behind every space</em>
            </h2>
            <div className="w-16 h-px bg-[#c9a96e] mb-8" />
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Based in New Jersey, Matthew Lekker is an architectural and interior photographer with a passion for revealing the soul of spaces — from intimate residential interiors to grand commercial landmarks.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              With a keen eye for light, geometry, and atmosphere, Matthew transforms spaces into visual stories that resonate with architects, designers, builders, and hospitality brands across the tristate area and beyond.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="border-l border-[#c9a96e]/30 pl-4"
                >
                  <p className="text-[#c9a96e] text-2xl font-light">{stat.number}</p>
                  <p className="text-white/40 text-xs tracking-[0.2em] uppercase mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-white/60 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors group"
            >
              Read Full Story
              <div className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
