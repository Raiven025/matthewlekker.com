'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { number: '10+', label: 'Years in Architectural Photography' },
  { number: '500+', label: 'Spaces Photographed' },
];

const services = [
  {
    title: 'Residential Interiors',
    description: 'Capturing the warmth, light, and design of custom homes and luxury residences.',
  },
  {
    title: 'Architecture Exteriors',
    description: 'Bold geometry, façades, and structural beauty photographed at the perfect moment.',
  },
  {
    title: 'Commercial Spaces',
    description: 'Offices, showrooms, and retail environments that inspire clients and tenants.',
  },
  {
    title: 'Hospitality & Hotels',
    description: 'Hotels, restaurants, and event venues   every detail photographed to attract guests.',
  },
];

const process = [
  { step: '01', title: 'Consultation', description: 'We discuss your project, goals, timeline, and deliverables. No guesswork.' },
  { step: '02', title: 'Shoot Day', description: 'On-location photography with professional lighting, staging, and composition.' },
  { step: '03', title: 'Editing', description: 'Expert post-processing   color grading, retouching, and detail enhancement.' },
  { step: '04', title: 'Delivery', description: 'High-resolution images delivered via private gallery within the agreed timeline.' },
];

export default function AboutPage() {
  const statsRef = useRef(null);
  const bioRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  const bioInView = useInView(bioRef, { once: true, margin: '-80px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' });
  const processInView = useInView(processRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#0D0D0D]">

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/lekk5172-dxo_deepprime-3-large-rXe5eGMkw8wyYGl4.jpeg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="relative z-10 px-8 md:px-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-4"
          >About Matthew</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight text-[#F0EDE8] tracking-tight leading-none"
          >The Photographer</motion.h1>
        </div>
      </section>

      {/* Bio */}
      <section ref={bioRef} className="py-28 px-8 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative isolate"
          >
            <div className="relative h-[540px] overflow-hidden">
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=900,fit=crop/AMqlLZQweECGbqM2/1612275894979-mePJN4ke0NU5KGan.jpeg"
                alt="Matthew Lesperance   Architectural & Interior Photographer, New Jersey"
                fill className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-3/4 h-3/4 border border-[#C8825A]/20 -z-10" />
            <div className="absolute -top-5 -left-5 w-20 h-20 border-t border-l border-[#C8825A]" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-5">Elevated Perspectives</p>
            <h2 className="text-3xl md:text-4xl font-extralight text-[#F0EDE8] tracking-tight mb-6 leading-tight">
              Where storytelling<br />
              <span className="text-[#C8825A]">meets structure</span>
            </h2>
            <div className="w-16 h-px bg-[#C8825A] mb-8" />
            <p className="text-white/55 text-base leading-relaxed mb-6">
              I&apos;m Matthew Lesperance, a photographer where storytelling meets structure, available worldwide. I specialize in architectural and interior photography   working closely with architects, interior designers, builders, and boutique hotels to bring their vision to life through clean, intentional imagery.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-6">
              Clients come to me for my calm creative direction, editorial eye, and the ability to make spaces feel as good as they look. With years of hands-on experience, I&apos;ve built a signature style rooted in natural light, thoughtful composition, and a deep respect for the craft of design.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-12">
              Translating a three-dimensional space into a two-dimensional image isn&apos;t just about the click of a shutter   it&apos;s about capturing feeling, atmosphere, and identity.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 copper-gradient text-black text-xs tracking-[0.3em] uppercase px-8 py-4 hover:opacity-90 transition-all duration-300 font-medium"
            >
              Start a Project
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-[#111111] py-24 px-8 md:px-20">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-[#C8825A] text-4xl font-extralight mb-3">{stat.number}</p>
              <p className="text-white/35 text-xs tracking-[0.25em] uppercase leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-28 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-3">What I Offer</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#F0EDE8] tracking-tight">Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-white/5 hover:border-[#C8825A]/25 p-10 transition-all duration-500 group"
              >
                <div className="w-8 h-px bg-[#C8825A] mb-6" />
                <h3 className="text-white text-lg font-light tracking-wide mb-4 group-hover:text-[#C8825A] transition-colors">{s.title}</h3>
                <p className="text-[#888880] text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="bg-[#111111] py-28 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-3">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#F0EDE8] tracking-tight">The Process</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-10">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <p className="text-[#C8825A]/25 text-5xl font-bold mb-5">{p.step}</p>
                <div className="w-8 h-px bg-[#C8825A] mb-5" />
                <h3 className="text-white text-base font-light tracking-wide mb-3">{p.title}</h3>
                <p className="text-[#888880] text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8 md:px-20 text-center">
        <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-5">Ready?</p>
        <h2 className="text-4xl md:text-5xl font-extralight text-[#F0EDE8] tracking-tight mb-10">
          Let&apos;s create something<br />
          <span className="text-[#C8825A]">extraordinary.</span>
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
