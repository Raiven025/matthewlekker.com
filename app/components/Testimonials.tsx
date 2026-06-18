'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import reviews from '@/app/data/reviews';

const STORAGE_KEY = 'ml_pinned_reviews';

const Stars = () => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-[#C8825A]" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

function Avatar({ name, photo }: { name: string; photo: string }) {
  return (
    <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-[#C8825A]/20">
      <Image src={photo} alt={name} fill sizes="44px" className="object-cover" unoptimized />
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: '-50px' });
  const [translateX, setTranslateX] = useState(0);
  const [pinned, setPinned] = useState(() => reviews.filter(r => r.pinned));

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const state: Record<string, boolean> = JSON.parse(stored);
      setPinned(reviews.filter(r => state[r.name] === true));
    }
  }, []);

  useEffect(() => {
    const calc = () => {
      if (trackRef.current && stickyRef.current) {
        const overflow = trackRef.current.scrollWidth - stickyRef.current.clientWidth + 80;
        setTranslateX(Math.max(0, overflow));
      }
    };
    const t = setTimeout(calc, 150);
    window.addEventListener('resize', calc);
    return () => { clearTimeout(t); window.removeEventListener('resize', calc); };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -translateX]);

  return (
    <div ref={containerRef} style={{ height: '250vh' }} className="relative">
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-[#111111]"
      >
        {/* Header */}
        <div ref={headerRef} className="px-8 md:px-20 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-3">Google Reviews</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#F0EDE8] tracking-tight">
              What clients say
            </h2>
          </motion.div>
        </div>

        {/* Scrolling card strip */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pl-8 md:pl-20 pr-20 will-change-transform"
        >
          {pinned.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex-shrink-0 w-[360px] bg-[#0D0D0D] rounded-2xl p-8 flex flex-col"
            >
              <Stars />
              <p className="text-[#888880] text-sm leading-relaxed flex-1 mb-8">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                <Avatar name={r.name} photo={r.photo} />
                <div>
                  <p className="text-[#F0EDE8] text-sm font-light">{r.name}</p>
                  <p className="text-[#888880]/60 text-xs tracking-wide mt-0.5">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
