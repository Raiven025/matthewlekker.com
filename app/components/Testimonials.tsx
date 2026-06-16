'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Matt Lesperance has become my go-to photographer. He is super personable, has great ideas, and is very easy to work with. He has a whole menu of services to cater to your needs and budget. He makes every listing stand out and showcases every feature to get the property sold.",
    name: "Arianne Gomez Rodriguez",
    role: "Real Estate · Aerial Photography",
    photo: "/testimonials/Arianne.png",
  },
  {
    quote: "I can't say enough about Matt and the team at Lekker. My real estate photos for clients are always amazing. Matt has also worked with me personally on passion projects and events. His attention to detail and ability to guide the process is unmatched. In a word, obsessed.",
    name: "Nicole Romanik",
    role: "Local Guide · Real Estate",
    photo: "/testimonials/Nicole.png",
  },
  {
    quote: "Matt was the most professional and amazing photographer I've ever worked with. He made our house look incredible and was so warm and easy to work with. He was responsive through text, phone, and email. You won't be sorry, Matt and his company are wonderful.",
    name: "Margaret Geib",
    role: "Residential Photography",
    photo: "/testimonials/Margaret.png",
  },
  {
    quote: "In my 17 years of working in real estate, I've worked with many great photographers. Matt pays such close attention to detail, takes pride in his work, and puts out an amazing finished product. My clients have been so impressed with his work. Trust me.",
    name: "Nicole Moody",
    role: "Real Estate · 17 Years Experience",
    photo: "/testimonials/NicoleM.png",
  },
  {
    quote: "Matt is ACTUALLY THE BEST. His knowledge of real estate and tourism adds a unique perspective and understanding. His vision and attention to detail is impeccable. He's one of the most helpful individuals I've ever worked with and a genuine pleasure to be around.",
    name: "Nadine Khalil",
    role: "Real Estate & Tourism",
    photo: "/testimonials/Nadine.png",
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-[#C47B4A]" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: '-50px' });
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (trackRef.current && stickyRef.current) {
        const overflow = trackRef.current.scrollWidth - stickyRef.current.clientWidth + 80;
        setTranslateX(Math.max(0, overflow));
      }
    };
    const t = setTimeout(calc, 150);
    window.addEventListener('resize', calc);
    return () => { clearTimeout(t); window.removeEventListener('resize', calc); };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -translateX]);

  return (
    <div ref={containerRef} style={{ height: '250vh' }} className="relative">
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-[#111111]"
      >
        {/* Header */}
        <div ref={headerRef} className="px-8 md:px-20 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <p className="text-[#C47B4A] text-xs tracking-[0.4em] uppercase mb-3">Google Reviews</p>
              <h2 className="text-4xl md:text-5xl font-light text-[#F0EDE8] tracking-tight">
                What clients say
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/place/Lekker+Photography/@40.7891893,-74.05684,15z/data=!4m8!3m7!1s0x0:0xe906723ceeefd814!8m2!3d40.7891893!4d-74.05684!9m1!1b1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#C47B4A] border border-[#C47B4A]/30 px-5 py-3 hover:bg-[#C47B4A]/5 hover:border-[#C47B4A]/60 transition-all duration-300 self-start md:self-auto whitespace-nowrap"
            >
              See all reviews
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Scrolling card strip */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pl-8 md:pl-20 pr-20 will-change-transform"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex-shrink-0 w-[360px] bg-[#0D0D0D] rounded-2xl p-8 flex flex-col"
            >
              <Stars />
              <p className="text-white/60 text-sm leading-relaxed flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-[#C47B4A]/20">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-[#F0EDE8] text-sm font-light">{t.name}</p>
                  <p className="text-white/30 text-xs tracking-wide mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
