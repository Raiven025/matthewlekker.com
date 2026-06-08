'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const photos = [
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/lekk5195-dxo_deepprime-3-large-ZoKOF06HJCCN3BA0.jpeg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/0j6a5537-2-m7VbKpjeLeF7BQ75.jpeg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/0j6a5558-dOqD4bxW1PfxqZBK.jpeg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/lekk4989-dxo_deepprime-3-large-oDrL06IDHBdwHOVp.jpeg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/lekk1943-dxo_deepprime-3-large-qMiLUo6Isoibz7nm.jpeg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/0j6a9894-YleQZR60rLUvLLWP.jpg',
];

export default function ImmersiveGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
              The Work
            </h2>
          </div>
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase hidden md:block">
            Scroll to explore →
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <motion.div style={{ x }} className="flex gap-4 pl-6 w-max">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative flex-shrink-0 overflow-hidden group"
            style={{ width: i % 3 === 1 ? '320px' : '260px', height: i % 3 === 1 ? '420px' : '360px' }}
          >
            <Image
              src={photo}
              alt={`Gallery photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
