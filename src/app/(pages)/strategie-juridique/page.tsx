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
        <section className="pt-20 lg:pt-32 pb-12 md:pb-16 lg:pb-20 bg-[#0A1628] relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <div style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-[1px] bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em]">Stratégie juridique</span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-8">
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
        <section className="py-16 md:py-24 lg:py-32 bg-[#F8F6F3]">
          <div className="container-custom">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h2 className="section-title mb-8">🤔 Votre stratégie juridique ?</h2>
              <div className="space-y-5 text-[#334155] leading-relaxed text-left bg-white p-10">
                {[
                  '🚀 Vous avez un business plan avec une stratégie de développement',
                  '👨‍💻 Vous avez une roadmap produit ou service',
                  '🗣️ Vous avez un plan de communication et une stratégie d\'acquisition clients',
                  '🗓️ Vous avez un planning de recrutements',
                  '⚖️ Mais avez-vous une stratégie juridique ?',
                ].map((item) => (
                  <p key={item} className="text-base">{item}</p>
                ))}
                <p className="text-[#0A1628] font-medium pt-6 border-t border-[#B8860B]/30">
                  Votre stratégie juridique est une stratégie comme les autres au service de votre entreprise. 
                  Anticipez vos besoins en les inscrivant dans une roadmap juridique.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ETAPES */}
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container-custom">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em] font-semibold">Notre méthode</span>
              <h2 className="section-title mt-8">Détermination de la stratégie juridique.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {etapes.map((etape, i) => (
                <motion.div
                  key={etape.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F8F6F3] p-10 group hover:bg-[#0A1628] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 bg-[#B8860B] flex items-center justify-center mb-8 text-[#0A1628]">
                    {etape.icon}
                  </div>
                  <span className="font-mono text-[#B8860B] text-xs font-bold mb-4">{(i + 1).toString().padStart(2, '0')}</span>
                  <h3 className="font-heading text-xl font-semibold text-[#0A1628] mb-4 group-hover:text-white transition-colors">{etape.title}</h3>
                  <p className="text-[#334155] text-sm leading-relaxed flex-1 group-hover:text-white/70 transition-colors">{etape.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DOMAINES */}
        <section className="py-16 md:py-24 lg:py-32 bg-[#0A1628]">
          <div className="container-custom">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div>
                <span className="text-[#B8860B] text-sm uppercase tracking-[0.4em] font-semibold">Domaines</span>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-8 mb-8">
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
                    <CheckCircle size={20} className="text-[#B8860B] shrink-0" />
                    <span className="text-white/80">{domaine}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 lg:py-32 bg-[#B8860B]">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#0A1628] mb-8">Faites le point sur vos besoins juridiques.</h2>
              <p className="text-[#0A1628]/70 text-lg max-w-xl mx-auto mb-12">Un audit juridique en amont peut vous éviter bien des surprises. Discutons de votre situation.</p>
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
