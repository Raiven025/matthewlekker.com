'use client';

import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a96e]/15">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-14">

        {/* Brand — centered on all sizes */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="w-10 h-10 border border-[#c9a96e] flex items-center justify-center">
            <span className="text-[#c9a96e] font-bold text-sm tracking-wider">ML</span>
          </div>
          <div>
            <p className="text-white text-sm font-light tracking-[0.2em] uppercase leading-tight">Matthew Lekker</p>
            <p className="text-[#c9a96e] text-[10px] tracking-[0.35em] uppercase mt-1">Photography · NJ</p>
          </div>
        </div>

        {/* Nav — centered */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/35 text-xs tracking-[0.25em] uppercase hover:text-[#c9a96e] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact — centered */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <a
            href="mailto:info@matthewlekker.com"
            className="text-white/40 text-sm hover:text-[#c9a96e] transition-colors duration-300"
          >
            info@matthewlekker.com
          </a>
          <a
            href="https://www.instagram.com/matthewlekker/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.2em] uppercase hover:text-[#c9a96e] transition-colors duration-300"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            @matthewlekker
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-2 text-center">
          <p className="text-white/15 text-xs tracking-wide">
            © {new Date().getFullYear()} Matthew Lekker Photography. All rights reserved.
          </p>
          <p className="text-white/10 text-xs tracking-[0.25em] uppercase">
            New Jersey · Architecture · Interiors · Hospitality
          </p>
        </div>

      </div>
    </footer>
  );
}
