'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle, Building2, Users, BarChart3, Shield } from 'lucide-react';
import { Navbar, Footer } from '@/components';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const pourquoi = [
  'Analyser votre modèle économique',
  'Anticiper votre rentabilité',
  'Optimiser vos performances globales',
  'Déployer votre stratégie au niveau opérationnel',
  'Maîtriser vos coûts et votre supply chain',
];

const missions = [
  'Définition et déploiement de la stratégie au niveau opérationnel',
  'Élaboration et allocation des budgets',
  'Mise en place de procédures de gestion',
  'Suivi des résultats par activité / BU / filiales',
  'Choix des indicateurs clés et gestion des risques',
  'Production des états de gestion et animation des revues',
  'Soutien à la décision financière',
];

const etapes = [
  {
    numero: '01',
    title: 'Audit & Diagnostic',
    desc: 'Phase courte d\'audit et de diagnostic avec préconisations et mise en œuvre immédiate.',
  },
  {
    numero: '02',
    title: 'Déploiement',
    desc: 'Déploiement des plans d\'actions à travers la mise en place du contrôle de gestion sur une période plus longue.',
  },
];

const holdings = [
  'Gain de temps pour le manager ou responsable de site',
  'Optimisation de la productivité',
  'Travail de pilotage de compte par des experts',
  'Support pour des décisions financières rapides',
];

const franchises = [
  'Contrôle de la performance des franchisés',
  'Gain de temps et de productivité',
  'Conseils d\'un expert pour un meilleur pilotage',
  'Assure le retour des royalties auprès du franchiseur',
];

export default function EtudesFinancieresPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="pt-40 pb-20 bg-[var(--navy)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <div style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em]">Études financières</span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6">
                Contrôle de gestion.
              </h1>
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                Le contrôle de gestion est une fonction clé de l'entreprise pour analyser le modèle économique, 
                anticiper la rentabilité et optimiser les performances globales.
              </p>
            </motion.div>
          </div>
        </section>

        {/* POURQUOI */}
        <section className="py-24 bg-[var(--warm-white)]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">Pourquoi ?</span>
                <h2 className="section-title mt-4 mb-6">Pourquoi développer<br />le contrôle de gestion ?</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  Le contrôle de gestion est un poste clé pour l'entreprise. Dès l'atteinte de la trentaine de salariés, 
                  une entreprise doit pouvoir entamer la mise en place de son pôle contrôle de gestion.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Discuter de votre besoin
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <ul className="space-y-4">
                  {pourquoi.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[var(--gold)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-primary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSIONS */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">Rôle</span>
              <h2 className="section-title mt-4">À quoi sert concrètement<br />le contrôle de gestion ?</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.map((m, i) => (
                <motion.div key={m} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className="flex items-start gap-4 p-6 bg-[var(--warm-white)] h-full group hover:bg-[var(--navy)] transition-all duration-500">
                    <span className="font-mono text-[var(--gold)] text-xs font-bold mt-1">{(i + 1).toString().padStart(2, '0')}</span>
                    <p className="text-[var(--text-primary)] text-sm group-hover:text-white/80 transition-colors leading-relaxed">{m}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOLDING & FRANCHISE */}
        <section className="py-24 bg-[var(--warm-white)]">
          <div className="container-custom">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">Expertise</span>
              <h2 className="section-title mt-4">Holding & Franchise.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Building2 size={28} />, title: 'Pour les Holdings', points: holdings, color: 'bg-[var(--navy)]' },
                { icon: <Users size={28} />, title: 'Pour les Franchiseurs', points: franchises, color: 'bg-[var(--gold)]' },
              ].map((bloc) => (
                <motion.div key={bloc.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <div className="bg-white p-10 h-full">
                    <div className={`w-16 h-16 ${bloc.color} flex items-center justify-center mb-8 text-white`}>
                      {bloc.icon}
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[var(--navy)] mb-6">{bloc.title}</h3>
                    <ul className="space-y-4">
                      {bloc.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-[var(--gold)] shrink-0 mt-0.5" />
                          <span className="text-[var(--text-secondary)] text-sm">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODE */}
        <section className="py-24 bg-[var(--navy)]">
          <div className="container-custom">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">Méthode</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4">Notre façon de travailler.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {etapes.map((etape, i) => (
                <motion.div key={etape.numero} initial={{ opacity: 0, x: i === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <div className="bg-[var(--navy-light)] p-10 h-full relative overflow-hidden group hover:bg-[var(--gold)] transition-all duration-500">
                    <span className="font-mono text-7xl font-bold text-white/5 absolute top-4 right-6">{etape.numero}</span>
                    <h3 className="font-heading text-2xl font-semibold text-white mb-4 group-hover:text-[var(--navy)] transition-colors">{etape.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed group-hover:text-[var(--navy)]/70 transition-colors">{etape.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[var(--gold)]">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--navy)] mb-6">Démarrez votre contrôle de gestion.</h2>
              <p className="text-[var(--navy)]/70 text-lg max-w-xl mx-auto mb-10">Prenons 30 minutes pour comprendre votre situation et définir ensemble un plan d'action.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-sm">Prendre rendez-vous <ArrowRight size={16} /></Link>
                <Link href="/formations" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--navy)] text-[var(--navy)] font-medium tracking-wide hover:bg-[var(--navy)] hover:text-white transition-all duration-300 text-sm">Formation contrôle de gestion</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
