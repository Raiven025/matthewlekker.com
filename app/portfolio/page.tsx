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
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=800,fit=crop/AMqlLZQweECGbqM2/jackson-foyer-YrDJNazJOLHVElKJ.jpeg',
    href: '/portfolio/residential',
  },
  {
    id: 'exterior',
    title: 'Architecture',
    subtitle: 'Exteriors',
    description: 'The bold geometry of buildings   form, light, and structure at their finest.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=800,fit=crop/AMqlLZQweECGbqM2/45-0j6a6615-A85MgE71JnFrxlJo.jpg',
    href: '/portfolio/exterior',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Spaces',
    description: 'Professional environments that inspire   offices, showrooms, and retail properties.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=800,fit=crop/AMqlLZQweECGbqM2/0j6a3776-mnlJBwyeLEuDyqKw.jpg',
    href: '/portfolio/commercial',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    subtitle: 'Hotels & Venues',
    description: 'Luxury hotels, restaurants, and event spaces   where every detail tells a story.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=800,fit=crop/AMqlLZQweECGbqM2/hotel-edit-lights-off-mnlJBRJ04buk5bnK.jpg',
    href: '/portfolio/hospitality',
  },
  {
    id: 'design-details',
    title: 'Design Details & Product',
    subtitle: 'Objects & Craftsmanship',
    description: 'The art of the close-up — curated product and design detail photography that celebrates craftsmanship.',
    image: '/images/Interiors/0J6A0188-Edit.jpg',
    href: '/design-details',
  },
];

function CategoryBlock({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:[direction:rtl]'}`}
    >
      {/* Image */}
      <Link href={cat.href} className="block relative h-[440px] md:h-[580px] overflow-hidden group" style={{ direction: 'ltr' }}>
        <Image
          src={cat.image} alt={cat.title} fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-500" />
      </Link>

      {/* Text */}
      <div className={`bg-[#111111] px-14 md:px-20 py-16 md:py-20 flex flex-col justify-center ${isEven ? '' : '[direction:ltr]'}`}>
        <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-4">{cat.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-extralight text-[#F0EDE8] tracking-tight mb-5">{cat.title}</h2>
        <div className="w-12 h-px bg-[#C8825A] mb-7" />
        <p className="text-white/45 text-base leading-relaxed mb-10">{cat.description}</p>
        <Link
          href={cat.href}
          className="inline-flex items-center gap-3 text-[#C8825A] text-xs tracking-[0.3em] uppercase hover:gap-6 transition-all duration-300 group"
        >
          View Work
          <div className="w-8 h-px bg-[#C8825A] group-hover:w-12 transition-all duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-[#0D0D0D]">

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/0j6a5558-dOqD4bxW1PfxqZBK.jpeg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
        <div className="relative z-10 px-8 md:px-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-4"
          >Selected Work</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight text-[#F0EDE8] tracking-tight leading-none"
          >The Portfolio</motion.h1>
        </div>
      </section>

      {/* Category Blocks */}
      <section className="divide-y divide-white/5">
        {categories.map((cat, i) => (
          <CategoryBlock key={cat.id} cat={cat} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="py-28 px-8 md:px-20 text-center bg-[#111111]">
        <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-5">Let's Work Together</p>
        <h2 className="text-4xl md:text-5xl font-extralight text-[#F0EDE8] tracking-tight mb-10">
          Have a project in mind?
        </h2>
        <Link
          href="/contact"
          className="inline-block copper-gradient text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:opacity-90 transition-all duration-300 font-medium"
        >
          Book a Shoot
        </Link>
      </section>

    </div>
  );
}
