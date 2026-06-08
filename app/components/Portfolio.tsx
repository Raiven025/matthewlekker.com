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
    description: 'Where design meets daily life — capturing the warmth and elegance of residential spaces.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AMqlLZQweECGbqM2/jackson-foyer-YrDJNazJOLHVElKJ.jpeg',
    href: '/portfolio/residential',
    span: 'col-span-2 md:col-span-1',
  },
  {
    id: 'exterior',
    title: 'Architecture',
    subtitle: 'Exteriors',
    description: 'The bold geometry of buildings — form, light, and structure at their finest.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=432,fit=crop/AMqlLZQweECGbqM2/45-0j6a6615-A85MgE71JnFrxlJo.jpg',
    href: '/portfolio/exterior',
    span: 'col-span-2 md:col-span-1',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Spaces',
    description: 'Professional environments that inspire — offices, showrooms, and commercial properties.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/AMqlLZQweECGbqM2/0j6a3776-mnlJBwyeLEuDyqKw.jpg',
    href: '/portfolio/commercial',
    span: 'col-span-2 md:col-span-1',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    subtitle: 'Hotels & Venues',
    description: 'Luxury hotels, restaurants, and event spaces — where every detail tells a story.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=558,fit=crop/AMqlLZQweECGbqM2/hotel-edit-lights-off-mnlJBRJ04buk5bnK.jpg',
    href: '/portfolio/hospitality',
    span: 'col-span-2 md:col-span-1',
  },
];

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${cat.span} group relative overflow-hidden cursor-pointer`}
    >
      <Link href={cat.href} className="block relative h-[420px] md:h-[500px]">
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

        {/* Number */}
        <div className="absolute top-6 right-6 text-white/20 text-6xl font-bold leading-none">
          0{index + 1}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-2">{cat.subtitle}</p>
          <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide mb-3">{cat.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[5rem]">
            {cat.description}
          </p>
          <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">View Work</span>
            <div className="w-8 h-px bg-[#c9a96e]" />
          </div>
        </div>

        {/* Border on hover */}
        <div className="absolute inset-0 border border-[#c9a96e]/0 group-hover:border-[#c9a96e]/30 transition-all duration-500" />
      </Link>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#0a0a0a] py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
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
              className="text-white/50 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors flex items-center gap-3"
            >
              View All Work
              <div className="w-8 h-px bg-current" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
