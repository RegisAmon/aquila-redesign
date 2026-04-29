'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Navbar, Footer } from '@/components';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="pt-40 pb-16 bg-[var(--navy)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <div style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-4">Nous contacter.</h1>
              <p className="text-white/60 text-lg max-w-xl">Parlons de votre projet, de vos besoins en conseil ou en formation.</p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="py-24 bg-[var(--warm-white)]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

              {/* LEFT - Infos */}
              <motion.div
                className="lg:col-span-2 space-y-12"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[var(--gold)] flex items-center justify-center">
                      <Phone size={18} className="text-[var(--navy)]" />
                    </div>
                    <span className="text-[var(--gold)] text-sm uppercase tracking-widest font-semibold">Téléphone</span>
                  </div>
                  <a href="tel:+33752243929" className="text-[var(--navy)] text-2xl font-semibold hover:text-[var(--gold)] transition-colors">
                    (+33) 07 52 24 39 29
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[var(--gold)] flex items-center justify-center">
                      <Mail size={18} className="text-[var(--navy)]" />
                    </div>
                    <span className="text-[var(--gold)] text-sm uppercase tracking-widest font-semibold">Email</span>
                  </div>
                  <a href="mailto:aquila@aquila-consulting.com" className="text-[var(--navy)] text-lg hover:text-[var(--gold)] transition-colors">
                    aquila@aquila-consulting.com
                  </a>
                </div>

                {/* Addresses */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[var(--gold)] flex items-center justify-center">
                      <MapPin size={18} className="text-[var(--navy)]" />
                    </div>
                    <span className="text-[var(--gold)] text-sm uppercase tracking-widest font-semibold">Nos bureaux</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-6">
                      <p className="font-semibold text-[var(--navy)]">Lyon</p>
                      <p className="text-[var(--text-secondary)] text-sm">Bureaux des chênes</p>
                      <p className="text-[var(--text-secondary)] text-sm">5 rue du chapoly, 69290 St Genis les O.</p>
                    </div>
                    <div className="bg-white p-6">
                      <p className="font-semibold text-[var(--navy)]">Vienne (Isère)</p>
                      <p className="text-[var(--text-secondary)] text-sm">47 rue Vimaine, 38200 Vienne</p>
                      <p className="text-[var(--text-secondary)] text-sm">L'Essentiel Cwk</p>
                    </div>
                  </div>
                </div>

                {/* Info footer */}
                <div className="bg-[var(--navy)] p-8">
                  <p className="text-white/50 text-xs leading-relaxed">
                    <span className="text-white font-semibold">AQUILA Etudes & Consulting</span><br />
                    Marque de FSC France (Consulting et formation)<br />
                    SIRET : 899 281 554 000 35<br />
                    NDA : 84380782838 · Code APE : 7022Z
                  </p>
                </div>
              </motion.div>

              {/* RIGHT - Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white p-10 md:p-14">
                  {!sent ? (
                    <>
                      <h2 className="font-heading text-3xl font-semibold text-[var(--navy)] mb-2">Votre message.</h2>
                      <p className="text-[var(--text-secondary)] text-sm mb-10">Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h.</p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="text-[var(--navy)] text-sm font-medium mb-2 block">Votre nom *</label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className="w-full border-b-2 border-[var(--navy)]/10 pb-3 bg-transparent text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                              placeholder="Jean Dupont"
                            />
                          </div>
                          <div>
                            <label className="text-[var(--navy)] text-sm font-medium mb-2 block">Votre e-mail *</label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className="w-full border-b-2 border-[var(--navy)]/10 pb-3 bg-transparent text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                              placeholder="jean@entreprise.fr"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[var(--navy)] text-sm font-medium mb-2 block">Objet *</label>
                          <input
                            type="text"
                            required
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="w-full border-b-2 border-[var(--navy)]/10 pb-3 bg-transparent text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                            placeholder="Demande de diagnostic stratégique"
                          />
                        </div>
                        <div>
                          <label className="text-[var(--navy)] text-sm font-medium mb-2 block">Votre message</label>
                          <textarea
                            rows={5}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full border-b-2 border-[var(--navy)]/10 pb-3 bg-transparent text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                            placeholder="Décrivez votre besoin..."
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-gold w-full justify-center text-base disabled:opacity-50"
                        >
                          {loading ? (
                            <span className="animate-pulse">Envoi en cours...</span>
                          ) : (
                            <>
                              Envoyer <Send size={16} />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <CheckCircle size={60} className="text-[var(--gold)] mx-auto mb-6" />
                      <h2 className="font-heading text-3xl font-semibold text-[var(--navy)] mb-4">Message envoyé !</h2>
                      <p className="text-[var(--text-secondary)]">Nous vous répondrons sous 24h. Merci pour votre confiance.</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
