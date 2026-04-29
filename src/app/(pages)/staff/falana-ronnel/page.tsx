'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Euro, TrendingUp, Shield, BookOpen, Target, BarChart3, Scale, GraduationCap, Briefcase } from 'lucide-react';
import { Navbar, Footer } from '@/components';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function StaffPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const parcours = [
    { year: 'Licence', title: 'Économie appliquée & Économie sociale et solidaire', icon: <GraduationCap size={18} /> },
    { year: 'Maîtrise', title: 'Économie d\'entreprise — Faculté de Grenoble', icon: <GraduationCap size={18} /> },
    { year: 'Master', title: 'Économie des organisations — Grenoble', icon: <GraduationCap size={18} /> },
    { year: 'Executive MBA', title: 'Gestion des entreprises — Université catholique de Lyon (UCLy)', icon: <GraduationCap size={18} /> },
    { year: 'Aujourd\'hui', title: 'Enseignant Université de Lyon · Dirigeant AQUILA', icon: <Briefcase size={18} /> },
  ];

  const missions = [
    {
      icon: <Shield size={28} />,
      title: 'Administrateur Indépendant',
      color: 'bg-[#0A1628]',
      target: 'Entreprises 2–15M€ CA',
      desc: 'J\'intègre les conseils d\'entreprise pour assurer une bonne gouvernance, apporter des perspectives alternatives et renforcer l\'expertise du conseil.',
      billing: 'Mandat annuel d\'honorariat',
    },
    {
      icon: <Target size={28} />,
      title: 'Manager de Transition',
      color: 'bg-[#B8860B]',
      target: 'Entreprises 2–15M€ CA',
      desc: 'Je mets ma culture du résultat au service de la performance. Du pilotage économique et financier à la restructuration.',
      billing: 'TJM (Taux Journalier Moyen)',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Diagnostic Stratégique',
      color: 'bg-[#1E3A5F]',
      target: 'Entreprises < 1M€ CA',
      desc: 'Diagnostic financier et stratégique pour identifier les causes et problématiques avec des solutions à la clé (Méthode AED inspirée de mon livre).',
      billing: 'Forfait 1 680 € HT',
    },
  ];

  const expertisesFinancieres = [
    'Diagnostic et analyse financière',
    'Audit du business process',
    'Implémentation du contrôle de gestion',
    'Valorisation des entreprises (FusAc)',
    'Montage financier et analyse de rentabilité',
    'Optimisation de la CAF',
    'Contrôle budgétaire et contrôle interne',
  ];

  const expertisesEconomiques = [
    'Analyse et optimisation du modèle d\'affaires',
    'Vision court et moyen terme agile',
    'Élaboration du projet d\'entreprise (PSE)',
    'Formation / séminaire management stratégique',
    'Croissance interne, externe et conjointe',
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
        <section className="pt-20 md:pt-24 pb-20 bg-[#0A1628] relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <div style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
                transition={{ duration: 0.9 }}
              >
                <motion.div className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="w-10 h-[1px] bg-[#B8860B]" />
                  <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em]">Fondateur & Dirigeant</span>
                </motion.div>

                <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-4">
                  FALANA Ronnel
                </h1>
                <p className="text-[#B8860B] text-lg font-medium mb-6">
                  Economiste d'entreprise · Consultant & Formateur certifié
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  Économiste d'entreprise et enseignant à l'université de Lyon. J'accompagne les dirigeants 
                  de PME/PMI et ETI dans leurs projets de transformation, de croissance et de pilotage stratégique.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-gold text-sm">
                    Prendre rendez-vous
                    <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+33752243929" className="btn-primary text-sm">
                    (+33) 07 52 24 39 29
                  </a>
                </div>
              </motion.div>

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 60 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden">
                  <Image
                    src="https://aquila-consulting.com/wp-content/uploads/2017/08/Ronnel800x800-768x768-1-300x300.jpg"
                    alt="FALANA Ronnel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#B8860B] -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ PARCOURS ═══════════════════════════════════════ */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#F8F6F3]">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em] font-semibold">Parcours</span>
              <h2 className="section-title mt-4">Mon histoire.</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {parcours.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="relative pl-8 pb-12 last:pb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Line */}
                  <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-[#B8860B]/30 last:hidden" />
                  {/* Dot */}
                  <div className="absolute left-[-5px] top-2 w-3 h-3 bg-[#B8860B] rounded-full" />
                  {/* Content */}
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-[#B8860B] font-semibold mt-1 shrink-0 w-20">{item.year}</span>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0A1628] mt-0.5">{item.icon}</span>
                      <span className="text-[var(--text-primary)] leading-relaxed">{item.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ MISSIONS ═══════════════════════════════════════ */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em] font-semibold">Types de missions</span>
              <h2 className="section-title mt-4">Comment j'interviens.</h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {missions.map((mission) => (
                <motion.div key={mission.title} variants={fadeUp}>
                  <div className="bg-[#F8F6F3] p-10 h-full group hover:shadow-xl transition-all duration-500">
                    <div className={`w-16 h-16 ${mission.color} flex items-center justify-center mb-8 text-white`}>
                      {mission.icon}
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[#0A1628] mb-2">{mission.title}</h3>
                    <p className="text-[#B8860B] text-xs font-mono uppercase tracking-wider mb-4">{mission.target}</p>
                    <p className="text-[#334155] text-sm leading-relaxed mb-6">{mission.desc}</p>
                    <div className="flex items-center gap-2 text-[#0A1628] text-xs font-medium pt-4 border-t border-[#0A1628]/10">
                      <Clock size={14} />
                      <span>{mission.billing}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ EXPERTISES ═══════════════════════════════════════ */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#0A1628]">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em] font-semibold">Expertises</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4">Mes champs d'expertise.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Dimension financière */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <BarChart3 size={24} className="text-[#B8860B]" />
                  <h3 className="font-heading text-2xl font-semibold text-white">Dimension financière</h3>
                </div>
                <ul className="space-y-4">
                  {expertisesFinancieres.map((exp) => (
                    <li key={exp} className="flex items-start gap-3 text-white/70">
                      <CheckCircle size={18} className="text-[#B8860B] shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{exp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Dimension économique */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp size={24} className="text-[#B8860B]" />
                  <h3 className="font-heading text-2xl font-semibold text-white">Dimension économique</h3>
                </div>
                <ul className="space-y-4">
                  {expertisesEconomiques.map((exp) => (
                    <li key={exp} className="flex items-start gap-3 text-white/70">
                      <CheckCircle size={18} className="text-[#B8860B] shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{exp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ CTA ═══════════════════════════════════════ */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#B8860B]">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#0A1628] mb-6">
                Besoin d'échanger ?
              </h2>
              <p className="text-[#0A1628]/70 text-lg max-w-xl mx-auto mb-10">
                Consultations ponctuelles sur des questions bien spécifiques liées à la stratégie, 
                la finance d'entreprise ou le juridique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-sm">
                  <Euro size={16} />
                  Prendre rendez-vous
                </Link>
                <Link href="/formations" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#0A1628] text-[#0A1628] font-medium tracking-wide hover:bg-[#0A1628] hover:text-white transition-all duration-300">
                  <BookOpen size={16} />
                  Voir les formations ECODIA
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
