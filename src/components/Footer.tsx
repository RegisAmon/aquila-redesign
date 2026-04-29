import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Col 1 - Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--gold)] flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-[var(--navy)]">A</span>
              </div>
              <div>
                <span className="font-heading text-xl font-semibold text-white tracking-wide">AQUILA</span>
                <span className="block text-[10px] tracking-[0.3em] text-white/50 uppercase">Etudes & Consulting</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Cabinet d'études et consulting dédié aux PME/PMI, startups et ETI. 
              Spécialiste de la transformation et de la croissance des entreprises.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:aquila@aquila-consulting.com"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-[var(--gold)]">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/staff/falana-ronnel', label: 'À propos' },
                { href: '/etudes-financieres', label: 'Études financières' },
                { href: '/strategie-juridique', label: 'Stratégie juridique' },
                { href: '/formations', label: 'ECODIA France' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--gold)] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-[var(--gold)]">Nos expertises</h4>
            <ul className="space-y-3">
              {[
                'Diagnostic stratégique',
                'Contrôle de gestion',
                'Stratégie juridique',
                'Management de transition',
                'Administrateur indépendant',
                'Formation professionnelle',
              ].map((service) => (
                <li key={service} className="text-white/60 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-[var(--gold)]">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+33752243929"
                className="flex items-start gap-3 text-white/60 hover:text-[var(--gold)] text-sm transition-colors group"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>(+33) 07 52 24 39 29</span>
              </a>
              <a
                href="mailto:aquila@aquila-consulting.com"
                className="flex items-start gap-3 text-white/60 hover:text-[var(--gold)] text-sm transition-colors"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>aquila@aquila-consulting.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p>Lyon : Bureaux des chênes</p>
                  <p>5 rue du chapoly, 69290 St Genis les O.</p>
                  <p className="mt-1">Vienne : 47 rue Vimaine, 38200</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© 2024 SAS FAL & ASSOCIES (AQUILA CONSULTING). Filiale du groupe FIDUCIA</p>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <span>SIRET : 899 281 554 000 35</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
