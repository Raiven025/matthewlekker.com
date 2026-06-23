'use client';

import { useState, useEffect } from 'react';
import reviews from '@/app/data/reviews';

const STORAGE_KEY = 'ml_pinned_reviews';
const firstName = (name: string) => name.trim().split(/\s+/)[0];

export default function AdminReviewsPage() {
  const [state, setState] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setState(JSON.parse(stored));
    } else {
      const defaults: Record<string, boolean> = {};
      reviews.forEach(r => { defaults[r.name] = r.pinned; });
      setState(defaults);
    }
  }, []);

  const pinned = Object.values(state).filter(Boolean).length;

  const toggle = (name: string) => {
    const current = state[name] ?? false;
    if (!current && pinned >= 5) return;
    setState(prev => ({ ...prev, [name]: !current }));
    setSaved(false);
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-28 pb-20 px-8 md:px-20">
      <p className="text-[#C8825A] text-xs tracking-[0.4em] uppercase mb-3">Admin</p>
      <h1 className="text-4xl md:text-5xl font-extralight text-[#F0EDE8] tracking-tight mb-2">
        Manage Reviews
      </h1>
      <p className="text-[#888880] text-sm mb-2">
        Select up to <span className="text-[#C8825A]">5 reviews</span> to display on the site. Click a card to pin or unpin it.
      </p>
      <p className="text-[#888880]/60 text-xs mb-10">
        {pinned}/5 pinned
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {reviews.map((r) => {
          const isPinned = state[r.name] ?? false;
          const isDisabled = !isPinned && pinned >= 5;
          return (
            <button
              key={r.name}
              onClick={() => toggle(r.name)}
              disabled={isDisabled}
              className={`text-left rounded-2xl p-6 border transition-all duration-200 ${
                isPinned
                  ? 'bg-[#1a1208] border-[#C8825A] shadow-[0_0_20px_rgba(200,130,90,0.15)]'
                  : isDisabled
                  ? 'bg-[#111111] border-white/5 opacity-40 cursor-not-allowed'
                  : 'bg-[#111111] border-white/5 hover:border-[#C8825A]/40 cursor-pointer'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-[#C8825A]" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                {isPinned && (
                  <span className="text-[#C8825A] text-xs tracking-[0.2em] uppercase">Pinned</span>
                )}
              </div>
              <p className="text-[#888880] text-xs leading-relaxed mb-4 line-clamp-3">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="border-t border-white/5 pt-3 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-full flex-shrink-0 border border-[#C8825A]/25 bg-[#C8825A]/10 flex items-center justify-center"
                >
                  <span className="text-[#C8825A] text-xs tracking-[0.15em] uppercase">
                    {firstName(r.name).charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#F0EDE8] text-sm font-light">{firstName(r.name)}</p>
                  <p className="text-[#888880]/60 text-xs mt-0.5">{r.role}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={save}
        className="copper-gradient text-black text-xs tracking-[0.3em] uppercase px-12 py-4 hover:opacity-90 transition-all duration-300 font-medium"
      >
        {saved ? '✓ Saved!' : 'Save Changes'}
      </button>
    </div>
  );
}
