'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Scale, FileText, Shield, Gavel } from 'lucide-react';
import { Navbar, Footer } from '@/components';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const etapes = [
  {
    icon: <FileText size={28} />,
    title: 'Identification des besoins',
    desc: 'Identification des besoins juridiques de l\'entreprise — droit des affaires, droit social, droit des sociétés.',
  },
  {
    icon: <Scale size={28} />,
    title: 'Confrontation des options',
    desc: 'Confrontation des options envisageables au contexte social et opérationnel pour évaluer la pertinence.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Recommandation',
    desc: 'Recommandation de la procédure juridique permettant d\'obtenir le meilleur ratio efficacité / risques.',
  },
  {
    icon: <Gavel size={28} />,
    title: 'Identification des risques',
    desc: 'Identification des risques éventuels, moyens de les limiter et plans d\'action correctifs.',
  },
  {
    icon: <CheckCircle size={28} />,
    title: 'Validation',
    desc: 'Validation par le client de la stratégie retenue, sur la base des opportunités et points de vigilance.',
  },
];

export default function StrategieJuridiquePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-[var(--navy)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <div style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em]">Stratégie juridique</span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6">
                Stratégie juridique.
              </h1>
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                Conseils en droits des affaires et droits des entreprises en difficultés. 
                Anticipez vos besoins juridiques pour ne jamais être pris de court.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 md:py-20 lg:py-24 bg-[var(--warm-white)]">
          <div className="container-custom">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h2 className="section-title mb-8">🤔 Votre stratégie juridique ?</h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-left bg-white p-10">
                {[
                  '🚀 Vous avez un business plan avec une stratégie de développement',
                  '👨‍💻 Vous avez une roadmap produit ou service',
                  '🗣️ Vous avez un plan de communication et une stratégie d\'acquisition clients',
                  '🗓️ Vous avez un planning de recrutements',
                  '⚖️ Mais avez-vous une stratégie juridique ?',
                ].map((item) => (
                  <p key={item} className="text-base">{item}</p>
                ))}
                <p className="text-[var(--navy)] font-medium pt-4 border-t border-[var(--gold)]/30">
                  Votre stratégie juridique est une stratégie comme les autres au service de votre entreprise. 
                  Anticipez vos besoins en les inscrivant dans une roadmap juridique.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ETAPES */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="container-custom">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">Notre méthode</span>
              <h2 className="section-title mt-4">Détermination de la stratégie juridique.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etapes.map((etape, i) => (
                <motion.div
                  key={etape.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[var(--warm-white)] p-8 group hover:bg-[var(--navy)] transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-[var(--gold)] flex items-center justify-center mb-6 text-[var(--navy)]">
                    {etape.icon}
                  </div>
                  <span className="font-mono text-[var(--gold)] text-xs font-bold">{(i + 1).toString().padStart(2, '0')}</span>
                  <h3 className="font-heading text-xl font-semibold text-[var(--navy)] mt-2 mb-3 group-hover:text-white transition-colors">{etape.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed group-hover:text-white/70 transition-colors">{etape.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DOMAINES */}
        <section className="py-16 md:py-20 lg:py-24 bg-[var(--navy)]">
          <div className="container-custom">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div>
                <span className="text-[var(--gold)] text-sm uppercase tracking-[0.4em] font-semibold">Domaines</span>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4 mb-6">
                  Notre champ d'intervention.
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Notre champ d'intervention concerne le droit des affaires et le droit du travail, 
                  avec l'appui d'un cabinet d'avocats partenaire.
                </p>
              </div>
              <div className="space-y-6">
                {['Droit des sociétés', 'Droit des contrats commerciaux', 'Contentieux commerciaux', 'Droit du travail', 'Droit des entreprises en difficultés'].map((domaine) => (
                  <div key={domaine} className="flex items-center gap-4">
                    <CheckCircle size={20} className="text-[var(--gold)] shrink-0" />
                    <span className="text-white/80">{domaine}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 lg:py-24 bg-[var(--gold)]">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--navy)] mb-6">Faites le point sur vos besoins juridiques.</h2>
              <p className="text-[var(--navy)]/70 text-lg max-w-xl mx-auto mb-10">Un audit juridique en amont peut vous éviter bien des surprises. Discutons de votre situation.</p>
              <Link href="/contact" className="btn-primary text-sm inline-flex items-center gap-2">
                Contactez-nous <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
