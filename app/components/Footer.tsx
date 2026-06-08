'use client';

import Link from 'next/link';

const navLinks = ['Home', 'About', 'Portfolio', 'Contact', 'Blog'];

const services = [
  'Residential Interiors',
  'Architecture Exteriors',
  'Commercial Spaces',
  'Hospitality & Hotels',
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a96e]/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

          {/* Brand — spans 2 cols on md */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-[#c9a96e] flex items-center justify-center flex-shrink-0">
                <span className="text-[#c9a96e] font-bold text-lg tracking-wider">ML</span>
              </div>
              <div>
                <p className="text-white text-sm font-light tracking-[0.2em] uppercase">Matthew Lekker</p>
                <p className="text-[#c9a96e] text-xs tracking-[0.35em] uppercase">Photography</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Award-winning architectural &amp; interior photography based in New Jersey, serving the Tri-State Area and beyond.
            </p>
            {/* Social */}
            <a
              href="https://www.instagram.com/matthewlekker/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/40 text-xs tracking-[0.2em] uppercase hover:text-[#c9a96e] transition-colors group"
            >
              {/* Instagram icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @matthewlekker
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#c9a96e] text-xs tracking-[0.35em] uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-white/40 text-sm hover:text-[#c9a96e] transition-colors tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Contact */}
          <div>
            <p className="text-[#c9a96e] text-xs tracking-[0.35em] uppercase mb-5">Services</p>
            <ul className="space-y-3 mb-8">
              {services.map((s) => (
                <li key={s} className="text-white/40 text-sm tracking-wide">{s}</li>
              ))}
            </ul>
            <p className="text-[#c9a96e] text-xs tracking-[0.35em] uppercase mb-3">Contact</p>
            <a
              href="mailto:info@matthewlekker.com"
              className="block text-white/40 text-sm hover:text-[#c9a96e] transition-colors mb-1"
            >
              info@matthewlekker.com
            </a>
            <p className="text-white/25 text-xs tracking-wide">New Jersey · Tri-State Area</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Matthew Lekker Photography. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-[0.2em] uppercase">
            New Jersey · Architecture · Interiors · Hospitality
          </p>
        </div>

      </div>
    </footer>
  );
}
