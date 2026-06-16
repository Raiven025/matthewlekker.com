'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Matt Lesperance has become my go-to photographer. He is super personable, has great ideas, and is very easy to work with. He has a whole menu of services to cater to your needs and budget. He makes every listing stand out and showcases every feature to get the property sold.",
    name: "Arianne Gomez Rodriguez",
    role: "Real Estate · Aerial Photography",
    photo: "/testimonials/arianne.jpg",
  },
  {
    quote: "I can't say enough about Matt and the team at Lekker. My real estate photos for clients are always amazing. Matt has also worked with me personally on passion projects and events. His attention to detail and ability to guide the process is unmatched. In a word, obsessed.",
    name: "Nicole Romanik",
    role: "Local Guide · Real Estate",
    photo: "/testimonials/nicole-romanik.jpg",
  },
  {
    quote: "Matt was the most professional and amazing photographer I've ever worked with. He made our house look incredible and was so warm and easy to work with. He was responsive through text, phone, and email. You won't be sorry, Matt and his company are wonderful.",
    name: "Margaret Geib",
    role: "Residential Photography",
    photo: "/testimonials/margaret.jpg",
  },
  {
    quote: "In my 17 years of working in real estate, I've worked with many great photographers. Matt pays such close attention to detail, takes pride in his work, and puts out an amazing finished product. My clients have been so impressed with his work. Trust me.",
    name: "Nicole Moody",
    role: "Real Estate · 17 Years Experience",
    photo: "/testimonials/nicole-moody.jpg",
  },
  {
    quote: "Matt is ACTUALLY THE BEST. His knowledge of real estate and tourism adds a unique perspective and understanding. His vision and attention to detail is impeccable. He's one of the most helpful individuals I've ever worked with and a genuine pleasure to be around.",
    name: "Nadine Khalil",
    role: "Real Estate & Tourism",
    photo: "/testimonials/nadine.jpg",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-[#c9a96e]" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const CARD_WIDTH = 380;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [index, setIndex] = useState(0);
  const max = testimonials.length - 3;

  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const next = () => setIndex(i => Math.min(i + 1, max));

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">Google Reviews</p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              What clients say
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Nav arrows */}
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] disabled:opacity-20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={index === max}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] disabled:opacity-20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="https://www.google.com/maps/place/Lekker+Photography/@40.7891893,-74.05684,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c9a96e] border border-[#c9a96e]/30 px-5 py-3 hover:bg-[#c9a96e]/5 hover:border-[#c9a96e]/60 transition-all duration-300 whitespace-nowrap"
            >
              See all reviews
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
        >
          <motion.div
            className="flex gap-5"
            animate={{ x: -index * STEP }}
            transition={{ type: 'spring', stiffness: 300, damping: 40 }}
            drag="x"
            dragConstraints={{ left: -max * STEP, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 bg-[#111111] rounded-2xl p-8 flex flex-col gap-0 select-none cursor-grab active:cursor-grabbing"
                style={{ width: CARD_WIDTH }}
              >
                <Stars />
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                  <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-[#c9a96e]/20">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-light">{t.name}</p>
                    <p className="text-white/30 text-xs tracking-wide mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {testimonials.slice(0, max + 1).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-px transition-all duration-300 ${i === index ? 'w-8 bg-[#c9a96e]' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
