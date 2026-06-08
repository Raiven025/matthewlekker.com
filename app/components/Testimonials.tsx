'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Matthew has an exceptional eye for light and composition. The images he delivered transformed how we present our residential projects to clients.",
    name: "Sarah Mitchell",
    title: "Principal Architect",
    company: "Mitchell Design Studio, NJ",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote: "We've worked with several architectural photographers over the years. Matthew's attention to detail and fast turnaround make him our first call for every new property.",
    name: "James Thornton",
    title: "Real Estate Developer",
    company: "Thornton Properties, NJ",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    quote: "The hospitality photography Matthew delivered for our hotel was exactly what we needed — every image communicated luxury without feeling staged.",
    name: "Emily Reyes",
    title: "Director of Marketing",
    company: "The Grand Hotel, NJ",
    avatar: "https://i.pravatar.cc/80?img=44",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-28 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">Client Feedback</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            What clients say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="border border-white/5 hover:border-[#c9a96e]/20 p-8 flex flex-col gap-6 transition-all duration-500"
            >
              <span className="text-[#c9a96e] text-4xl leading-none select-none">&ldquo;</span>

              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {t.quote}
              </p>

              <div className="border-t border-white/5 pt-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-[#c9a96e]/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-light">{t.name}</p>
                  <p className="text-white/30 text-xs tracking-wide">{t.title} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
