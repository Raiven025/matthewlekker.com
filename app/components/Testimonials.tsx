'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Matt Lesperance has become my go-to photographer. He is super personable, has great ideas, and is very easy to work with. He has a whole menu of services to cater to your needs and budget. He makes every listing stand out and showcases every feature to get the property sold.",
    name: "Arianne Gomez Rodriguez",
    role: "Real Estate · Aerial Photography",
    initials: "AG",
    photo: "/testimonials/arianne.jpg",
  },
  {
    quote: "I can't say enough about Matt and the team at Lekker. My real estate photos for clients are always amazing. Matt has also worked with me personally on passion projects and events. His attention to detail and ability to guide the process is unmatched. In a word — obsessed.",
    name: "Nicole Romanik",
    role: "Local Guide · Real Estate",
    initials: "NR",
    photo: "/testimonials/nicole-romanik.jpg",
  },
  {
    quote: "Matt was the most professional and amazing photographer I've ever worked with. He made our house look incredible and was so warm and easy to work with. He was responsive through text, phone, and email. You won't be sorry — Matt and his company are wonderful.",
    name: "Margaret Geib",
    role: "Residential Photography",
    initials: "MG",
    photo: "/testimonials/margaret.jpg",
  },
  {
    quote: "In my 17 years of working in real estate, I've worked with many great photographers. Matt pays such close attention to detail, takes pride in his work, and puts out an amazing finished product. My clients have been so impressed with his work. Trust me.",
    name: "Nicole Moody",
    role: "Real Estate · 17 Years Experience",
    initials: "NM",
    photo: "/testimonials/nicole-moody.jpg",
  },
  {
    quote: "Matt is ACTUALLY THE BEST. His knowledge of real estate and tourism adds a unique perspective and understanding. His vision and attention to detail is impeccable. He's one of the most helpful individuals I've ever worked with and a genuine pleasure to be around.",
    name: "Nadine Khalil",
    role: "Real Estate & Tourism",
    initials: "NK",
    photo: "/testimonials/nadine.jpg",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-[#c9a96e]" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

function Avatar({ photo, name, initials }: { photo: string; name: string; initials: string }) {
  return (
    <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-[#c9a96e]/30 bg-[#111] relative">
      <Image
        src={photo}
        alt={name}
        fill
        className="object-cover"
        unoptimized
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      {/* Initials fallback shown behind image */}
      <span className="absolute inset-0 flex items-center justify-center text-[#c9a96e] text-xs font-medium -z-10">
        {initials}
      </span>
    </div>
  );
}

function Card({ t, delay, inView }: { t: typeof testimonials[0]; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="border border-white/5 hover:border-[#c9a96e]/20 p-8 flex flex-col gap-5 transition-colors duration-500"
    >
      <Stars />
      <p className="text-white/60 text-sm leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="border-t border-white/5 pt-5 flex items-center gap-4">
        <Avatar photo={t.photo} name={t.name} initials={t.initials} />
        <div>
          <p className="text-white text-sm font-light">{t.name}</p>
          <p className="text-white/30 text-xs tracking-wide mt-0.5">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const topInView = useInView(topRef, { once: true, margin: '-80px' });
  const bottomInView = useInView(bottomRef, { once: true, margin: '-60px' });

  return (
    <section className="bg-[#0a0a0a] py-28 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={topRef}
          initial={{ opacity: 0, y: 30 }}
          animate={topInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">Google Reviews</p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              What clients say
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/place/Lekker+Photography/@40.7891893,-74.05684,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c9a96e] border border-[#c9a96e]/30 px-5 py-3 hover:bg-[#c9a96e]/5 hover:border-[#c9a96e]/60 transition-all duration-300 self-start md:self-auto whitespace-nowrap"
          >
            See all reviews
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* First 3 cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <Card key={i} t={t} delay={i * 0.12} inView={topInView} />
          ))}
        </div>

        {/* Cards 4 & 5 — animate in on scroll */}
        <div ref={bottomRef} className="grid md:grid-cols-2 gap-5 md:px-[16.67%]">
          {testimonials.slice(3).map((t, i) => (
            <Card key={i} t={t} delay={i * 0.15} inView={bottomInView} />
          ))}
        </div>

      </div>
    </section>
  );
}
