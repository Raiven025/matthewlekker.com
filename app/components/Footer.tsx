'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-[#c9a96e] flex items-center justify-center">
                <span className="text-[#c9a96e] font-bold text-sm">ML</span>
              </div>
              <div>
                <p className="text-white text-xs font-light tracking-[0.2em] uppercase">Matthew Lekker</p>
                <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Photography</p>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              Architectural & Interior Photography<br />
              New Jersey · Tri-State Area
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4">Navigation</p>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Contact', 'Blog'].map((item) => (
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

          {/* Contact */}
          <div>
            <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <div className="space-y-2">
              <a href="mailto:info@matthewlekker.com" className="block text-white/40 text-sm hover:text-[#c9a96e] transition-colors">
                info@matthewlekker.com
              </a>
              <a href="https://www.instagram.com/matthewlekker/" target="_blank" rel="noreferrer" className="block text-white/40 text-sm hover:text-[#c9a96e] transition-colors">
                @matthewlekker
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Matthew Lekker Photography. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-wide">
            New Jersey · Architecture · Interiors · Hospitality
          </p>
        </div>
      </div>
    </footer>
  );
}
