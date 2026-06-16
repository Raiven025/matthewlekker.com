'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'residential',
    title: 'Residential',
    subtitle: 'Interiors',
    description: 'Where design meets daily life   capturing the warmth and elegance of residential spaces.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/jackson-foyer-YrDJNazJOLHVElKJ.jpeg',
    href: '/portfolio/residential',
  },
  {
    id: 'exterior',
    title: 'Architecture',
    subtitle: 'Exteriors',
    description: 'The bold geometry of buildings   form, light, and structure at their finest.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=432,fit=crop/AMqlLZQweECGbqM2/45-0j6a6615-A85MgE71JnFrxlJo.jpg',
    href: '/portfolio/exterior',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Spaces',
    description: 'Professional environments that inspire   offices, showrooms, and commercial properties.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/AMqlLZQweECGbqM2/0j6a3776-mnlJBwyeLEuDyqKw.jpg',
    href: '/portfolio/commercial',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    subtitle: 'Hotels & Venues',
    description: 'Luxury hotels, restaurants, and event spaces   where every detail tells a story.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=558,fit=crop/AMqlLZQweECGbqM2/hotel-edit-lights-off-mnlJBRJ04buk5bnK.jpg',
    href: '/portfolio/hospitality',
  },
];

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <Link href={cat.href} className="block relative h-[440px] md:h-[520px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

        {/* Index number */}
        <div className="absolute top-7 right-7 text-white/15 text-5xl font-bold leading-none select-none">
          0{index + 1}
        </div>

        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <p className="text-[#C47B4A] text-xs tracking-[0.35em] uppercase mb-3">{cat.subtitle}</p>
          <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide mb-3">{cat.title}</h3>
          <p className="text-white/55 text-sm leading-relaxed overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[5rem]">
            {cat.description}
          </p>
          <div className="flex items-center gap-3 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[#C47B4A] text-xs tracking-[0.3em] uppercase">View Work</span>
            <div className="w-8 h-px bg-[#C47B4A]" />
          </div>
        </div>

        {/* Gold border on hover */}
        <div className="absolute inset-0 border border-[#C47B4A]/0 group-hover:border-[#C47B4A]/25 transition-all duration-500" />
      </Link>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#0D0D0D] py-28 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={ref} className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C47B4A] text-xs tracking-[0.4em] uppercase mb-3">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#F0EDE8] tracking-tight">
              The Portfolio
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="text-white/40 text-xs tracking-[0.3em] uppercase hover:text-[#C47B4A] transition-colors duration-300 flex items-center gap-3"
            >
              View All Work
              <div className="w-8 h-px bg-current" />
            </Link>
          </motion.div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
