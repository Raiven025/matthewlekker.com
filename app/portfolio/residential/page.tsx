'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const photos = [
  { src: '/images/Interiors/JACKSON-FOYER-Hero.jpeg', alt: 'Elegant residential foyer with natural light   NJ interior photography' },
  { src: '/images/Interiors/0J6A0011-Edit.jpg', alt: 'Residential interior   NJ home photography' },
  { src: '/images/Interiors/0J6A0057-Edit.jpg', alt: 'Interior design detail   NJ residential photography' },
  { src: '/images/Interiors/0J6A0085-Edit.jpg', alt: 'Living space with architectural details   NJ' },
  { src: '/images/Interiors/0J6A0124-Edit.jpg', alt: 'Custom residential interior   NJ home photography' },
  { src: '/images/Interiors/0J6A0188-Edit.jpg', alt: 'Residential interior photography   New Jersey' },
  { src: '/images/Interiors/0J6A0200-Edit.jpg', alt: 'Modern interior design   NJ residential photography' },
  { src: '/images/Interiors/0J6A0231-Edit.jpg', alt: 'Interior architecture   NJ home photography' },
  { src: '/images/Interiors/0J6A0240.jpeg', alt: 'Luxury home interior   NJ residential photography' },
  { src: '/images/Interiors/0J6A0264-Edit.jpg', alt: 'Custom millwork detail   NJ residential interior' },
  { src: '/images/Interiors/0J6A0285-Edit.jpg', alt: 'Bright interior space   NJ home photography' },
  { src: '/images/Interiors/0J6A0294-Edit.jpg', alt: 'Residential living area   NJ interior photography' },
  { src: '/images/Interiors/0J6A0374.jpg', alt: 'Interior design   NJ residential photography' },
  { src: '/images/Interiors/0J6A0522.jpg', alt: 'Open-plan living space   NJ residential interior' },
  { src: '/images/Interiors/0J6A0624.jpg', alt: 'Contemporary kitchen   NJ residential photography' },
  { src: '/images/Interiors/0J6A0645.jpg', alt: 'Residential dining room   NJ interior photography' },
  { src: '/images/Interiors/0J6A0704.jpeg', alt: 'Luxury residential interior   NJ photography' },
  { src: '/images/Interiors/0J6A0733.jpg', alt: 'Home interior with designer details   NJ' },
  { src: '/images/Interiors/0J6A0812.jpg', alt: 'Residential interior with natural light   NJ' },
  { src: '/images/Interiors/0J6A0824.jpg', alt: 'Custom home interior   NJ residential photography' },
  { src: '/images/Interiors/0J6A0918.jpeg', alt: 'Interior photography   NJ luxury home' },
  { src: '/images/Interiors/0J6A0977.jpg', alt: 'Residential interior design   New Jersey' },
  { src: '/images/Interiors/0J6A1047.jpeg', alt: 'Home interior   NJ residential photography' },
  { src: '/images/Interiors/0J6A5500.jpeg', alt: 'Contemporary interior   NJ home photography' },
  { src: '/images/Interiors/0J6A5517.jpeg', alt: 'Custom kitchen design   NJ residential photography' },
  { src: '/images/Interiors/0J6A5558.jpeg', alt: 'Interior design detail   NJ residential' },
  { src: '/images/Interiors/0J6A5562.jpg', alt: 'Residential living space   NJ interior photography' },
  { src: '/images/Interiors/0J6A5670.jpeg', alt: 'Modern residential interior   NJ photography' },
  { src: '/images/Interiors/0J6A5695.jpeg', alt: 'Residential interior   NJ home photography' },
  { src: '/images/Interiors/0J6A6221.jpg', alt: 'Interior architecture   NJ residential photography' },
  { src: '/images/Interiors/0J6A6234.jpg', alt: 'Luxury home interior   NJ photography' },
  { src: '/images/Interiors/0J6A6426.jpg', alt: 'Residential interior design   NJ' },
  { src: '/images/Interiors/0J6A6481.jpg', alt: 'Home interior photography   New Jersey' },
  { src: '/images/Interiors/0J6A9727.jpeg', alt: 'Modern residential interior   NJ photography' },
  { src: '/images/Interiors/0J6A9750.jpeg', alt: 'Interior design   NJ residential photography' },
  { src: '/images/Interiors/0J6A9792.jpg', alt: 'Residential interior   NJ home photography' },
  { src: '/images/Interiors/0J6A9840.jpeg', alt: 'Luxury interior   NJ residential photography' },
  { src: '/images/Interiors/0J6A9884.jpeg', alt: 'Home interior detail   NJ photography' },
  { src: '/images/Interiors/0J6A9894.jpeg', alt: 'Residential interior photography   NJ' },
  { src: '/images/Interiors/0J6A9933.jpeg', alt: 'Luxury home interior   NJ residential photography' },
  { src: '/images/Interiors/LEKK0002.jpeg', alt: 'Residential interior   NJ photography' },
  { src: '/images/Interiors/LEKK0039.jpg', alt: 'Interior design   NJ home photography' },
  { src: '/images/Interiors/LEKK0059.jpg', alt: 'Residential interior   NJ photography' },
  { src: '/images/Interiors/LEKK0094.jpg', alt: 'Luxury residential interior   NJ' },
  { src: '/images/Interiors/LEKK0100.jpg', alt: 'Home interior   NJ residential photography' },
  { src: '/images/Interiors/LEKK0101.jpg', alt: 'Interior design detail   NJ residential' },
  { src: '/images/Interiors/LEKK0103.jpg', alt: 'Interior architecture   NJ residential' },
  { src: '/images/Interiors/LEKK0110.jpg', alt: 'Custom home interior   NJ photography' },
  { src: '/images/Interiors/LEKK0112.jpg', alt: 'Interior architecture   NJ residential' },
  { src: '/images/Interiors/LEKK0128.jpg', alt: 'Residential interior design   NJ' },
  { src: '/images/Interiors/LEKK0141.jpg', alt: 'Luxury home interior   NJ photography' },
  { src: '/images/Interiors/LEKK3638-MTNLAKES.jpeg', alt: 'Mountain Lakes residence interior   NJ photography' },
  { src: '/images/Interiors/LEKK3653-MTNLAKES.jpeg', alt: 'Mountain Lakes home interior   NJ photography' },
  { src: '/images/Interiors/LEKK3718-MTNLAKES.jpeg', alt: 'Mountain Lakes residential interior   NJ' },
  { src: '/images/Interiors/LEKK3820-MTNLAKES.jpeg', alt: 'Mountain Lakes home photography   NJ' },
  { src: '/images/Interiors/LEKK4016.jpeg', alt: 'Residential interior   NJ luxury home photography' },
  { src: '/images/Interiors/LEKK4039.jpeg', alt: 'Interior design   NJ residential photography' },
  { src: '/images/Interiors/LEKK4060.jpeg', alt: 'Luxury interior   NJ home photography' },
  { src: '/images/Interiors/LEKK4079.jpeg', alt: 'Residential interior photography   NJ' },
  { src: '/images/Interiors/LEKK4097.jpg', alt: 'Home interior design   NJ photography' },
  { src: '/images/Interiors/LEKK4135.jpeg', alt: 'Custom residential interior   NJ photography' },
  { src: '/images/Interiors/LEKK4163LightOn.jpeg', alt: 'Residential interior with lighting   NJ photography' },
  { src: '/images/Interiors/LEKK4218LightOn.jpeg', alt: 'Interior with ambient lighting   NJ residential' },
  { src: '/images/Interiors/LEKK4231.jpeg', alt: 'Residential interior   NJ luxury photography' },
  { src: '/images/Interiors/LEKK8722.jpeg', alt: 'Home interior photography   New Jersey' },
  { src: '/images/Interiors/LEKK8892.jpeg', alt: 'Residential interior design   NJ photography' },
  { src: '/images/Interiors/LEKK9060.jpeg', alt: 'Luxury residential interior   NJ photography' },
];

export default function ResidentialPage() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#0a0a0a]">
      <section className="bg-[#0a0a0a] pt-20 pb-6 px-8 md:px-20">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors mb-10">
          ← Portfolio
        </Link>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">Interiors</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extralight text-white tracking-tight">Residential</motion.h1>
        <div className="w-12 h-px bg-[#c9a96e] mt-8" />
      </section>

      <div className="w-full h-[60vh] relative overflow-hidden">
        <Image src="/images/Interiors/JACKSON-FOYER-Hero.jpeg" alt="Jackson foyer   NJ residential interior photography" fill className="object-cover" priority sizes="100vw" />
      </div>

      <section ref={gridRef} className="px-8 md:px-20 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative overflow-hidden group aspect-square"
            >
              <Image src={photo.src} alt={photo.alt} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 py-20 text-center border-t border-white/5">
        <Link href="/contact"
          className="inline-block bg-[#c9a96e] text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#e8d5a3] transition-all duration-300 font-medium">
          Book a Residential Shoot
        </Link>
      </section>
    </div>
  );
}
