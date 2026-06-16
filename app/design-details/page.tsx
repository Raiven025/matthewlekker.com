'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from '@/app/components/Lightbox';

const photos: { src: string; alt: string }[] = [
  { src: '/images/Interiors/LEKK0094.jpg', alt: 'Fabuwood drawer with cutlery organizer — design detail photography' },
  { src: '/images/Interiors/LEKK0100.jpg', alt: 'Fabuwood drawer insert with knife block — cabinet detail photography' },
  { src: '/images/Interiors/LEKK0101.jpg', alt: 'Fabuwood cutlery organizer drawer — product detail photography' },
  { src: '/images/Interiors/LEKK0103.jpg', alt: 'Open drawer with cutlery and knife insert — kitchen detail photography' },
  { src: '/images/Interiors/LEKK0110.jpg', alt: 'Fabuwood pull-out spice cabinet — product detail photography' },
  { src: '/images/Interiors/LEKK0112.jpg', alt: 'Fabuwood pull-out pantry rack — cabinet detail photography' },
  { src: '/images/Interiors/0J6A0824.jpg', alt: 'Professional range with pot filler — kitchen detail photography' },
  { src: '/images/Interiors/LEKK4231.jpeg', alt: 'Freestanding bathtub and stone tile — bathroom detail photography' },
  { src: '/images/Interiors/LEKK8892.jpeg', alt: 'Overhead staircase detail — architectural design photography' },
  { src: '/images/Interiors/0J6A0188-Edit.jpg', alt: 'Butler pantry wet bar — design detail photography' },
];

export default function DesignDetailsPage() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-80px' });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#0D0D0D]">
      <section className="bg-[#0D0D0D] pt-20 pb-6 px-8 md:px-20">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-4">Objects & Craftsmanship</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extralight text-[#F0EDE8] tracking-tight">Design Details <span className="text-[#C8825A]">&amp; Product</span></motion.h1>
        <div className="w-12 h-px bg-[#C8825A] mt-8" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#888880] text-base leading-relaxed mt-6 max-w-xl">
          Close-up photography that celebrates the details — materials, textures, finishes, and the craftsmanship behind beautifully designed products and spaces.
        </motion.p>
      </section>

      {photos.length > 0 ? (
        <>
          <div className="w-full h-[60vh] relative overflow-hidden mt-10">
            <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover" priority sizes="100vw" />
          </div>

          <section ref={gridRef} className="px-8 md:px-20 py-24 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {photos.map((photo, i) => (
                <motion.button key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.04, 1) }}
                  onClick={() => setLightboxIndex(i)}
                  className="relative overflow-hidden group aspect-square cursor-pointer focus:outline-none"
                >
                  <Image src={photo.src} alt={photo.alt} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="px-8 md:px-20 py-40 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-px bg-[#C8825A]/30 mb-10" />
          <p className="text-[#888880] text-sm tracking-[0.2em] uppercase">Gallery Coming Soon</p>
          <p className="text-[#888880]/50 text-xs mt-3">Images will appear here once uploaded.</p>
        </section>
      )}

      <section className="px-8 md:px-20 py-20 text-center border-t border-white/5">
        <Link href="/contact"
          className="inline-block copper-gradient text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:opacity-90 transition-all duration-300 font-medium">
          Book a Product Shoot
        </Link>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && photos.length > 0 && (
          <Lightbox
            photos={photos}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNext={() => setLightboxIndex(i => i !== null ? Math.min(i + 1, photos.length - 1) : null)}
            onPrev={() => setLightboxIndex(i => i !== null ? Math.max(i - 1, 0) : null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
