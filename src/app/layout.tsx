import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AQUILA Etudes & Consulting | Analyse stratégique, Diagnostic & Contrôle de gestion',
  description: 'Cabinet d\'études et consulting dédié aux PME/PMI, startups et ETI. Spécialiste de la transformation et de la croissance des entreprises.',
  keywords: 'conseil stratégique, contrôle de gestion, diagnostic financier, PME, ETI, croissance entreprise',
  authors: [{ name: 'AQUILA Consulting' }],
  openGraph: {
    title: 'AQUILA Etudes & Consulting',
    description: 'Cabinet d\'études et consulting dédié aux PME/PMI, startups et ETI.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
