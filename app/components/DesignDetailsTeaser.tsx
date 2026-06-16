'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DesignDetailsTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#0D0D0D] py-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="grid md:grid-cols-2 gap-0"
      >
        {/* Image */}
        <Link href="/design-details" className="block relative h-[440px] md:h-[580px] overflow-hidden group">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=800,fit=crop/AMqlLZQweECGbqM2/hotel-edit-lights-off-mnlJBRJ04buk5bnK.jpg"
            alt="Design Details & Product Photography"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-500" />
        </Link>

        {/* Text */}
        <div className="bg-[#111111] px-14 md:px-20 py-16 md:py-20 flex flex-col justify-center">
          <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-4">Objects & Craftsmanship</p>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#F0EDE8] tracking-tight mb-5">
            Design Details<br />& Product
          </h2>
          <div className="w-12 h-px bg-[#C8825A] mb-7" />
          <p className="text-white/45 text-base leading-relaxed mb-10">
            The art of the close-up — curated product and design detail photography that celebrates craftsmanship, texture, and form.
          </p>
          <Link
            href="/design-details"
            className="inline-flex items-center gap-3 text-[#C8825A] text-xs tracking-[0.3em] uppercase hover:gap-6 transition-all duration-300 group"
          >
            View Work
            <div className="w-8 h-px bg-[#C8825A] group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
