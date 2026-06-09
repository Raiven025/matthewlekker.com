'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const BASE = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/';
const photos = [
  { src: BASE + 'jackson-foyer-YrDJNazJOLHVElKJ.jpeg', tall: false },
  { src: BASE + 'lekk4112-dxo_deepprime-3-large-TXZRTuhKwbuFVhmO.jpeg', tall: true },
  { src: BASE + '0j6a3776-mnlJBwyeLEuDyqKw.jpg', tall: false },
  { src: BASE + 'lekk5172-dxo_deepprime-3-large-rXe5eGMkw8wyYGl4.jpeg', tall: true },
  { src: BASE + 'hotel-edit-lights-off-mnlJBRJ04buk5bnK.jpg', tall: false },
  { src: BASE + 'lekk4989-dxo_deepprime-3-large-oDrL06IDHBdwHOVp.jpeg', tall: true },
  { src: BASE + '45-0j6a6615-A85MgE71JnFrxlJo.jpg', tall: false },
  { src: BASE + 'lekk5195-dxo_deepprime-3-large-ZoKOF06HJCCN3BA0.jpeg', tall: true },
  { src: BASE + 'foyer-bar-A1az6J2BkRtWbaeG.jpeg', tall: false },
  { src: BASE + 'lekk4547-dxo_deepprime-3-large-rCZhkItTjgM4fGsy.jpeg', tall: true },
  { src: BASE + '0j6a5537-2-m7VbKpjeLeF7BQ75.jpeg', tall: false },
  { src: BASE + 'red-room-m7VDNKnvvOseg1yY.jpeg', tall: true },
  { src: BASE + 'lekk1943-dxo_deepprime-3-large-qMiLUo6Isoibz7nm.jpeg', tall: true },
  { src: BASE + '0j6a9894-YleQZR60rLUvLLWP.jpg', tall: false },
  { src: BASE + 'lekk4707-dxo_deepprime-3-large-wDrKHCtFPLut43Uo.jpeg', tall: true },
  { src: BASE + '0j6a9750-ALpPl48wpeSbwQRV.jpg', tall: false },
  { src: BASE + 'macdonald-3-YZ9j4qGLB5TKEe6V.jpg', tall: true },
];

export default function ImmersiveGallery() {
  // Outer tall container — provides the vertical scroll distance
  const containerRef = useRef<HTMLDivElement>(null);
  // Sticky inner — pins to viewport while container scrolls past
  const stickyRef = useRef<HTMLDivElement>(null);
  // The image strip — we measure its full width
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);

  const inView = useInView(headerRef, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const [translateX, setTranslateX] = useState(0);

  // Measure how far the strip overflows the viewport
  useEffect(() => {
    const calc = () => {
      if (trackRef.current && stickyRef.current) {
        const overflow = trackRef.current.scrollWidth - stickyRef.current.clientWidth;
        setTranslateX(Math.max(0, overflow));
      }
    };
    const t = setTimeout(calc, 150); // after images render
    window.addEventListener('resize', calc);
    return () => { clearTimeout(t); window.removeEventListener('resize', calc); };
  }, []);

  // scrollYProgress 0→1 maps to the full container scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Horizontal drift: strip moves left as you scroll down
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -translateX]
  );

  // Zoom: images breathe as strip sweeps across
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    prefersReducedMotion ? [1, 1, 1, 1] : [1.1, 1, 1, 1.1]
  );

  return (
    // Tall wrapper — 300vh gives plenty of scroll room on all devices
    <div ref={containerRef} style={{ height: '300vh' }}>
      {/* Sticky panel — locks to viewport during container scroll */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen bg-[#111111] overflow-hidden flex flex-col justify-center"
      >
        {/* Header */}
        <div ref={headerRef} className="max-w-5xl mx-auto px-8 md:px-20 mb-10 w-full flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between"
          >
            <div>
              <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">Gallery</p>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">The Work</h2>
            </div>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase hidden md:block">
              Scroll to explore →
            </p>
          </motion.div>
        </div>

        {/* Scroll-driven horizontal strip */}
        <div className="overflow-hidden flex-shrink-0">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 pl-8 md:pl-20 pr-8 md:pr-20 w-max"
          >
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative flex-shrink-0 overflow-hidden"
                style={{
                  width: photo.tall ? '280px' : '220px',
                  height: photo.tall ? '420px' : '340px',
                }}
              >
                {/* Image scales within cropped frame */}
                <motion.div className="absolute inset-0" style={{ scale }}>
                  <Image
                    src={photo.src}
                    alt={`Gallery photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="320px"
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile hint */}
        <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase text-center mt-8 md:hidden flex-shrink-0">
          Scroll to explore
        </p>
      </div>
    </div>
  );
}
