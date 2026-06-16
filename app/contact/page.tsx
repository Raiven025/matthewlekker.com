'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projectTypes = [
  'Residential Interior',
  'Architecture Exterior',
  'Commercial Space',
  'Hospitality / Hotel',
  'Other',
];

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', projectType: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Formspree: sign up free at formspree.io → create form → replace YOUR_FORM_ID below
    // Until then, form shows success UI but does not send email.
    const FORMSPREE_ID = 'YOUR_FORM_ID';
    if (FORMSPREE_ID !== 'YOUR_FORM_ID') {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Network error');
      } catch {
        setLoading(false);
        alert('Something went wrong. Please email matthew@matthewlekker.com directly.');
        return;
      }
    } else {
      await new Promise(r => setTimeout(r, 800));
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0D0D0D] min-h-screen">

        {/* Page Hero */}
        <section className="relative h-[50vh] flex items-end pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AMqlLZQweECGbqM2/hotel-edit-lights-off-mnlJBRJ04buk5bnK.jpg)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
          <div className="relative z-10 px-8 md:px-20 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-[#C47B4A] text-xs tracking-[0.4em] uppercase mb-3"
            >Let's Work Together</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extralight text-[#F0EDE8] tracking-tight"
            >Contact</motion.h1>
          </div>
        </section>

        {/* Contact Content */}
        <section ref={ref} className="px-8 md:px-20 py-28 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left   Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C47B4A] text-xs tracking-[0.4em] uppercase mb-4">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#F0EDE8] tracking-tight mb-6 leading-tight">
                Ready to elevate<br />
                <span className="text-[#C47B4A]">your space?</span>
              </h2>
              <div className="w-16 h-px bg-[#C47B4A] mb-8" />
              <p className="text-white/50 text-base leading-relaxed mb-10">
                Whether you're an architect, interior designer, developer, or hospitality brand — Matthew is available for projects worldwide.
              </p>

              <div className="space-y-6">
                <div className="border-l border-[#C47B4A]/30 pl-5">
                  <p className="text-[#C47B4A] text-xs tracking-[0.3em] uppercase mb-1">Email</p>
                  <a href="mailto:matthew@matthewlekker.com" className="text-[#F0EDE8]/70 hover:text-[#E8A87C] transition-colors text-sm">
                    matthew@matthewlekker.com
                  </a>
                </div>
                <div className="border-l border-[#C47B4A]/30 pl-5">
                  <p className="text-[#C47B4A] text-xs tracking-[0.3em] uppercase mb-1">Instagram</p>
                  <a href="https://www.instagram.com/matthewlekker/" target="_blank" rel="noreferrer" className="text-[#F0EDE8]/70 hover:text-[#E8A87C] transition-colors text-sm">
                    @matthewlekker
                  </a>
                </div>
                <div className="border-l border-[#C47B4A]/30 pl-5">
                  <p className="text-[#C47B4A] text-xs tracking-[0.3em] uppercase mb-1">Service Area</p>
                  <p className="text-white/70 text-sm">Available Worldwide</p>
                </div>
              </div>
            </motion.div>

            {/* Right   Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {submitted ? (
                <div className="border border-[#C47B4A]/30 p-12 text-center">
                  <div className="w-12 h-px bg-[#C47B4A] mx-auto mb-6" />
                  <p className="text-[#C47B4A] text-xs tracking-[0.4em] uppercase mb-4">Message Received</p>
                  <h3 className="text-2xl font-extralight text-white mb-4">Thank you, {form.name}.</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Matthew will be in touch within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#C47B4A] text-xs tracking-[0.3em] uppercase mb-2">Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        className="w-full bg-transparent border border-white/10 focus:border-[#C47B4A] px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C47B4A] text-xs tracking-[0.3em] uppercase mb-2">Email *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full bg-transparent border border-white/10 focus:border-[#C47B4A] px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#C47B4A] text-xs tracking-[0.3em] uppercase mb-2">Phone</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full bg-transparent border border-white/10 focus:border-[#C47B4A] px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/20"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C47B4A] text-xs tracking-[0.3em] uppercase mb-2">Project Type</label>
                      <select
                        name="projectType" value={form.projectType} onChange={handleChange}
                        className="w-full bg-[#0D0D0D] border border-white/10 focus:border-[#C47B4A] px-4 py-3 text-white text-sm outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0D0D0D]">Select type</option>
                        {projectTypes.map(t => <option key={t} value={t} className="bg-[#0D0D0D]">{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#C47B4A] text-xs tracking-[0.3em] uppercase mb-2">Message *</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange} rows={6}
                      className="w-full bg-transparent border border-white/10 focus:border-[#C47B4A] px-4 py-3 text-white text-sm outline-none transition-colors resize-none placeholder:text-white/20"
                      placeholder="Tell Matthew about your project   location, scope, timeline…"
                    />
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="w-full copper-gradient text-black text-xs tracking-[0.3em] uppercase py-4 hover:opacity-90 transition-all duration-300 font-medium disabled:opacity-50"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                  <p className="text-white/20 text-xs text-center tracking-wide">
                    Your information is never shared or sold.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </section>
    </div>
  );
}
