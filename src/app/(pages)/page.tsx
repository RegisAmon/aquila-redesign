'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, ChevronDown, TrendingUp, Shield, BookOpen, Users, Target, BarChart3, Scale } from 'lucide-react';
import { Navbar, Footer } from '@/components';

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(end); // SSR = final value; animates to 0 on mount then counts up
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const started = useRef(false);

  useEffect(() => {
    if (isInView && !started.current) {
      started.current = true;
      setCount(0); // reset only when section is visible
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(end);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return { count, ref };
}

function KPICard({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center group">
      <div className="font-mono text-5xl md:text-6xl font-bold text-[var(--navy)] mb-2">
        {count}{suffix}
      </div>
      <div className="text-[var(--navy)]/60 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HomePage() {
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const poles = [
    {
      icon: <Target size={32} />,
      title: 'Stratégie & Diagnostic',
      desc: 'Diagnostiquez votre entreprise et construisez une stratégie de croissance solide.',
      href: '/etudes-financieres',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Contrôle de Gestion',
      desc: 'Pilotez votre performance avec des outils de gestion adaptés à votre activité.',
      href: '/etudes-financieres',
    },
    {
      icon: <Scale size={32} />,
      title: 'Stratégie Juridique',
      desc: 'Anticipez vos besoins juridiques et sécurisez vos décisions stratégiques.',
      href: '/strategie-juridique',
    },
  ];

  const expertises = [
    {
      icon: <TrendingUp size={24} />,
      title: 'Croissance interne & externe',
      desc: 'Accompagnement sur la croissance organique, les acquisitions et les alliances stratégiques.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Administrateur Indépendant',
      desc: 'Gouvernance renforcée, regard extérieur et expertise pour votre conseil d\'administration.',
    },
    {
      icon: <Users size={24} />,
      title: 'Management de Transition',
      desc: 'Intervention rapide pour piloter la transformation, la restructuration ou la structuration.',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Formation ECODIA',
      desc: 'Montez en compétences sur le pilotage financier, le management stratégique et le leadership.',
      href: '/formations',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0A1628] overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* Gold accent line */}
          <motion.div
            className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--gold)] via-[var(--gold)] to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: loaded ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Content */}
          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              {/* Pre-title */}
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="w-12 h-[1px] bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-medium">
                  PME · ETI · Startups
                </span>
              </motion.div>

              {/* Main title */}
              <motion.h1
                className="font-heading text-4xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.95] mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Transformez votre
                <br />
                <span className="text-gradient">entreprise</span>
                <br />
                avec précision.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Cabinet d'études et consulting spécialisé dans la croissance des PME, 
                la structuration du contrôle de gestion et le pilotage stratégique.
              </motion.p>

              {/* CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/contact" className="btn-gold text-base">
                  Parlons de votre projet
                  <ArrowRight size={18} />
                </Link>
                <Link href="/staff/falana-ronnel" className="btn-primary text-base">
                  Découvrir AQUILA
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>

          {/* Right decorative element */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: loaded ? 0.05 : 0, scale: loaded ? 1 : 0.8 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <div className="w-full h-full border border-[var(--gold)] rounded-full" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════ POLES ═══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-[var(--warm-white)]">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.span variants={fadeUp} className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">
                Nos pôles
              </motion.span>
              <motion.h2 variants={fadeUp} className="section-title mt-6">
                Ce que nous faisons.
              </motion.h2>
              <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-6">
                Trois expertises complémentaires pour accompagner les entreprises à chaque étape de leur développement.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {poles.map((pole, i) => (
                <motion.div key={pole.title} variants={fadeUp}>
                  <Link
                    href={pole.href}
                    className="group block bg-white p-8 md:p-10 lg:p-12 h-full transition-all duration-500 border border-black/5 hover:shadow-xl hover:border-black/10"
                    style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                  >
                    <div className="w-16 h-16 bg-[#0A1628] flex items-center justify-center mb-8 text-[var(--gold)] transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                      {pole.icon}
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[var(--navy)] mb-4">
                      {pole.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                      {pole.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--gold)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>En savoir plus</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ ABOUT RONNEL ═══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-[#0A1628] relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <div
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden">
                  <Image
                    src="https://aquila-consulting.com/wp-content/uploads/2017/08/Ronnel800x800-768x768-1-300x300.jpg"
                    alt="FALANA Ronnel - Fondateur AQUILA"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Gold frame accent */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--gold)] -z-10" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
              >
                <motion.span variants={fadeUp} className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">
                  Le fondateur
                </motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4 mb-6">
                  FALANA Ronnel
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/50 text-sm uppercase tracking-widest mb-8">
                  Economiste d'entreprise · Consultant & Formateur certifié
                </motion.p>
                <motion.p variants={fadeUp} className="text-white/70 leading-relaxed mb-6">
                  Économiste d'entreprise et enseignant à l'université de Lyon, 
                  Ronnel FALANA accompagne les dirigeants de PME/PMI et ETI depuis plus de 10 ans 
                  dans leurs projets de transformation et de croissance.
                </motion.p>
                <motion.p variants={fadeUp} className="text-white/70 leading-relaxed mb-8">
                  Son approche : intervenir directement auprès du CoDir ou du COMEX pour 
                  co-construire la stratégie d'entreprise, assurer sa mise en œuvre 
                  et piloter le contrôle de gestion.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/staff/falana-ronnel" className="btn-gold text-sm">
                    Voir son profil complet
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ KPIs ═══════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-[var(--gold)]">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              <KPICard value={150} suffix="+" label="Entreprises accompagnées" />
              <KPICard value={10} suffix="+" label="Années d'expertise" />
              <KPICard value={50} suffix="+" label="Formations dispensées" />
              <KPICard value={98} suffix="%" label="Clients satisfaits" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ EXPERTISES ═══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-[var(--warm-white)]">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.span variants={fadeUp} className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">
                Expertises
              </motion.span>
              <motion.h2 variants={fadeUp} className="section-title mt-4">
                Nos savoir-faire.
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {expertises.map((exp) => (
                <motion.div key={exp.title} variants={fadeUp}>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#0A1628] flex items-center justify-center text-[var(--gold)] shrink-0 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] transition-all duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-[var(--navy)] mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ FORMATIONS ═══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
              >
                <motion.span variants={fadeUp} className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">
                  Formation
                </motion.span>
                <motion.h2 variants={fadeUp} className="section-title mt-4 mb-6">
                  ECODIA France.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  AQUILA – FORM'ACTION est un véritable laboratoire de montée en compétences 
                  pour le chef d'entreprise et ses équipes. Formations au pilotage financier, 
                  management stratégique et leadership.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
                  {['Pilotage financier', 'Management stratégique', 'Techniques managériales', 'Leadership'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-[var(--warm-white)] text-[var(--navy)] text-xs font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </motion.div>
                <Link href="/formations" className="btn-primary text-sm">
                  Voir les formations
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9 }}
                className="bg-[#0A1628] p-10 md:p-14"
              >
                <div className="space-y-8">
                  {[
                    { code: 'AFDC-MPE', title: 'Mesure de la performance', price: '3 150 €', hours: '21h' },
                    { code: 'AFDC-TML', title: 'Management stratégique', price: '3 150 €', hours: '21h' },
                    { code: 'AFDC-MSE', title: 'Management TPE/PME', price: '3 360 €', hours: '35h' },
                    { code: 'AFDC-CDG', title: 'Contrôle de gestion', price: '7 600 €', hours: '400h' },
                  ].map((formation) => (
                    <div key={formation.code} className="flex items-center justify-between border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <div>
                        <span className="text-[var(--gold)] text-xs font-mono">{formation.code}</span>
                        <p className="text-white font-medium mt-1">{formation.title}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">{formation.price}</p>
                        <p className="text-white/40 text-xs">{formation.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ CTA ═══════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[#0A1628] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <motion.div
            className="container-custom relative z-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">
              Prêt à avancer ?
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-semibold text-white mt-4 mb-6">
              Parlons de votre projet.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Que vous ayez besoin d'un diagnostic, d'un accompagnement en contrôle de gestion 
              ou d'une formation sur mesure, nous sommes là pour vous aider.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-base">
                Prendre rendez-vous
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+33752243929" className="btn-primary text-base">
                (+33) 07 52 24 39 29
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
