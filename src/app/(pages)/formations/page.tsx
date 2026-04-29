'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Download, BookOpen, GraduationCap, Users, Target } from 'lucide-react';
import { Navbar, Footer } from '@/components';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const formations = [
  {
    code: 'AFDC-MPE',
    title: 'Mesure de la performance économique et environnement comptable',
    price: '3 150 €',
    hours: '21h',
    public: 'Dirigeants – managers – équipes',
    modules: ['Module 1 (14h)', 'Module 2 (7h)'],
    moduleLabels: ['Les grands principes du pilotage et de la comptabilité d\'entreprise', 'Conception des outils de pilotage pour l\'entreprise'],
    pdf: 'https://aquila-consulting.com/wp-content/uploads/2024/02/DEROULE-PEDAGOGIQUE_AFDC-MPEC.pdf',
  },
  {
    code: 'AFDC-TML',
    title: 'Formation en techniques managériales et leadership',
    price: '3 150 €',
    hours: '21h',
    public: 'Dirigeants – formateurs – managers',
    modules: ['Module 1', 'Module 2', 'Module 3', 'Module 4'],
    moduleLabels: ['L\'entreprise et son business process (3h)', 'Identification des facteurs de l\'organisation (6h)', 'Management humain et gestion des conflits (9h)', 'Leadership et posture du manager (2h)'],
    pdf: 'https://aquila-consulting.com/wp-content/uploads/2024/02/DEROULE-PEDAGOGIQUE-FORM_TML.pdf',
  },
  {
    code: 'AFDC-MSE',
    title: 'Management stratégique des TPE / PME',
    price: '3 360 €',
    hours: '35h',
    public: 'Dirigeants – cadres dirigeants',
    modules: ['Module 1', 'Module 2', 'Module 3'],
    moduleLabels: ['Initier la réflexion stratégique de l\'entreprise', 'Analyser et anticiper les évolutions de l\'environnement externe', 'Déterminer les choix stratégiques de l\'entreprise'],
    pdf: 'https://aquila-consulting.com/wp-content/uploads/2024/02/DEROULE-PEDAGOGIQUE_AFDC-MSE.pdf',
  },
  {
    code: 'AFDC-MSC',
    title: 'Marketing stratégique et management commercial TPM/PME',
    price: '3 360 €',
    hours: '35h',
    public: 'Entreprises souhaitant développer un nouveau produit',
    modules: ['Module 1', 'Module 2', 'Module 3'],
    moduleLabels: ['De l\'offre au plan d\'action marketing – étude de marché', 'Élaboration du plan d\'action Marketing (P.A.M)', 'Stratégie de communication et plan d\'action commerciale (P.A.C)'],
    pdf: null,
  },
  {
    code: 'AFDC-CDG',
    title: 'Contrôle de gestion',
    price: '7 600 €',
    hours: '400h',
    public: 'Comptables souhaitant monter en compétence / Dirigeants',
    modules: ['Module 1', 'Module 2', 'Module 3', 'Module 4'],
    moduleLabels: ['Appliquer la logique financière', 'Évaluer l\'activité et la profitabilité', 'Évaluer les équilibres financiers', 'Construire un tableau de bord'],
    pdf: null,
    long: true,
  },
];

export default function FormationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="pt-20 lg:pt-32 pb-12 md:pb-16 lg:pb-20 bg-[#0A1628] relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <div style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em]">Formation professionnelle</span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6">
                ECODIA France.
              </h1>
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                AQUILA – FORM'ACTION est un laboratoire de montée en compétences pour le chef d'entreprise et ses équipes.
                Formations certifiantes prises en charge par les OPCO.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 md:py-24 lg:py-32 bg-[#F8F6F3]">
          <div className="container-custom">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {[
                { icon: <GraduationCap size={24} />, title: 'Formations certifiantes', desc: 'Code NDA : 84380782838' },
                { icon: <Users size={24} />, title: 'Opco & financement', desc: 'Prise en charge possible via votre OPCO' },
                { icon: <Target size={24} />, title: 'Sur mesure', desc: 'Formation commandée par l\'entreprise pour ses salariés' },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="flex items-start gap-4 bg-white p-8">
                  <div className="w-12 h-12 bg-[#B8860B] flex items-center justify-center text-[#0A1628] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[#0A1628]">{item.title}</h3>
                    <p className="text-[#334155] text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CATALOGUE */}
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container-custom">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em] font-semibold">Catalogue</span>
              <h2 className="section-title mt-4">Nos actions de formations.</h2>
            </motion.div>

            <div className="space-y-8">
              {formations.map((formation, i) => (
                <motion.div
                  key={formation.code}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F8F6F3] p-8 group hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left */}
                    <div className="lg:w-48 shrink-0">
                      <span className="font-mono text-[#B8860B] text-xs font-bold tracking-wider">{formation.code}</span>
                      <div className="mt-2">
                        <span className="font-heading text-3xl font-semibold text-[#0A1628]">{formation.price}</span>
                        <span className="text-[#334155] text-sm ml-2">/ {formation.hours}</span>
                      </div>
                      <p className="text-[#334155] text-xs mt-1">{formation.public}</p>
                    </div>

                    {/* Middle */}
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-[#0A1628] mb-4">{formation.title}</h3>
                      <div className={`space-y-2 ${formation.long ? 'grid grid-cols-1 md:grid-cols-2 gap-2' : ''}`}>
                        {formation.moduleLabels.map((label, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-[#B8860B] shrink-0 mt-0.5" />
                            <span className="text-[#334155] text-xs leading-relaxed">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-3 shrink-0 lg:items-end">
                      <Link href="/contact" className="btn-primary text-sm whitespace-nowrap">
                        Demander un devis
                        <ArrowRight size={14} />
                      </Link>
                      {formation.pdf && (
                        <a href={formation.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#0A1628] text-xs font-medium hover:text-[#B8860B] transition-colors">
                          <Download size={14} />
                          Télécharger le programme
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 lg:py-32 bg-[#0A1628]">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <BookOpen size={40} className="text-[#B8860B] mx-auto mb-6" />
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">Montez en compétences.</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">Discutons de votre projet de formation et des possibilité de prise en charge avec votre OPCO.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-gold text-sm">Demander un devis <ArrowRight size={16} /></Link>
                <a href="tel:+337****3929" className="btn-primary text-sm">Appeler au 07 52 24 39 29</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
