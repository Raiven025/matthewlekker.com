'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const photos = [
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/lekk5195-dxo_deepprime-3-large-ZoKOF06HJCCN3BA0.jpeg', tall: false },
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/0j6a5537-2-m7VbKpjeLeF7BQ75.jpeg', tall: true },
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/0j6a5558-dOqD4bxW1PfxqZBK.jpeg', tall: false },
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/lekk4989-dxo_deepprime-3-large-oDrL06IDHBdwHOVp.jpeg', tall: true },
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/lekk1943-dxo_deepprime-3-large-qMiLUo6Isoibz7nm.jpeg', tall: false },
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/0j6a9894-YleQZR60rLUvLLWP.jpg', tall: true },
];

export default function ImmersiveGallery() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: '-50px' });

  const trackRef = useRef<HTMLDivElement>(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (trackRef.current) {
        const track = trackRef.current;
        setDragLimit(track.scrollWidth - track.parentElement!.clientWidth);
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return (
    <section className="bg-[#111111] py-28 overflow-hidden">
      {/* Header */}
      <div ref={headerRef} className="max-w-5xl mx-auto px-8 md:px-20 mb-12">
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
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase hidden md:block select-none">
            Drag to explore →
          </p>
        </motion.div>
      </div>

      {/* Draggable strip */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragElastic={0.08}
          dragMomentum={true}
          className="flex gap-4 pl-8 md:pl-20 pr-8 md:pr-20 w-max"
          style={{ touchAction: 'pan-x' }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative flex-shrink-0 overflow-hidden pointer-events-none"
              style={{
                width: photo.tall ? '280px' : '220px',
                height: photo.tall ? '420px' : '340px',
              }}
            >
              <Image
                src={photo.src}
                alt={`Gallery photo ${i + 1}`}
                fill
                className="object-cover"
                sizes="320px"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile hint */}
      <p className="text-white/20 text-xs tracking-[0.3em] uppercase text-center mt-8 md:hidden select-none">
        Swipe to explore
      </p>
    </section>
  );
}
