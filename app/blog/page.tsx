'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen flex flex-col">

        {/* Hero */}
        <section className="relative h-[40vh] flex items-end pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/lekk1943-dxo_deepprime-3-large-qMiLUo6Isoibz7nm.jpeg)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="relative z-10 px-8 md:px-12 max-w-7xl mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-[#C47B4A] text-xs tracking-[0.4em] uppercase mb-3"
            >Insights & Stories</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extralight text-[#F0EDE8] tracking-tight"
            >The Journal</motion.h1>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="flex-1 flex items-center justify-center px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-center max-w-md"
          >
            <div className="w-16 h-px bg-[#C47B4A] mx-auto mb-8" />
            <p className="text-[#C47B4A] text-xs tracking-[0.4em] uppercase mb-4">Coming Soon</p>
            <h2 className="text-3xl font-extralight text-[#F0EDE8] tracking-tight mb-6">
              Stories from behind the lens
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-10">
              Matthew's journal   featuring shoot breakdowns, design insights, and the stories behind the spaces. Check back soon.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.3em] uppercase hover:text-[#C47B4A] transition-colors"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </section>

    </div>
  );
}
