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
];

export default function About() {
  const statsRef = useRef(null);
  const bioRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });
  const bioInView = useInView(bioRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#111111] py-28 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Stats row   top */}
        <div ref={statsRef} className="grid grid-cols-2 gap-6 md:gap-8 mb-24 pb-24 border-b border-white/8 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <p className="text-[#C8825A] text-3xl md:text-5xl font-light mb-3 tabular-nums"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                {stat.display}
              </p>
              <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bio   centered */}
        <motion.div
          ref={bioRef}
          initial={{ opacity: 0, y: 40 }}
          animate={bioInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-5">About Matthew</p>
          <h2 className="text-4xl md:text-5xl font-normal text-[#F0EDE8] tracking-tight leading-tight mb-6">
            Capturing the art
            <br />
            <span className="text-[#C8825A]">behind every space</span>
          </h2>
          <div className="w-12 h-px bg-[#C8825A] mx-auto mb-8" />
          <p className="text-[#888880] text-base leading-relaxed mb-5">
            I&apos;m Matthew Lesperance, a photographer where storytelling meets structure, available worldwide. I specialize in architectural and interior photography   working closely with architects, interior designers, builders, and boutique hotels to bring their vision to life through clean, intentional imagery.
          </p>
          <p className="text-[#888880] text-base leading-relaxed mb-12">
            Clients come to me for my calm creative direction, editorial eye, and the ability to make spaces feel as good as they look   rooted in natural light, thoughtful composition, and a deep respect for the craft of design.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-[#888880] text-xs tracking-[0.3em] uppercase hover:text-[#C8825A] transition-colors duration-300 group"
          >
            Read Full Story
            <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
