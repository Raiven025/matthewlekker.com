'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, count, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const stats = [
  { display: <CountUp to={10} suffix="+" />, label: 'Years Experience' },
  { display: <CountUp to={500} suffix="+" />, label: 'Spaces Photographed' },
  { display: <CountUp to={48} suffix="hr" />, label: 'Image Delivery' },
  { display: 'Tri-State', label: 'NJ · NY · CT' },
];

export default function About() {
  const statsRef = useRef(null);
  const bioRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });
  const bioInView = useInView(bioRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#111111] py-28 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Stats row — top */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-24 pb-24 border-b border-white/8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <p className="text-[#c9a96e] text-4xl md:text-5xl font-light mb-3 tabular-nums"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                {stat.display}
              </p>
              <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bio — centered */}
        <motion.div
          ref={bioRef}
          initial={{ opacity: 0, y: 40 }}
          animate={bioInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-5">About Matthew</p>
          <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight mb-6">
            Capturing the art
            <br />
            <em className="italic text-[#c9a96e]">behind every space</em>
          </h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mb-8" />
          <p className="text-white/50 text-base leading-relaxed mb-5">
            Based in New Jersey, Matthew Lekker is an architectural and interior photographer with a passion for revealing the soul of spaces — from intimate residential interiors to grand commercial landmarks.
          </p>
          <p className="text-white/50 text-base leading-relaxed mb-12">
            With a keen eye for light, geometry, and atmosphere, Matthew transforms spaces into visual stories that resonate with architects, designers, builders, and hospitality brands across the Tri-State Area.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors duration-300 group"
          >
            Read Full Story
            <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
