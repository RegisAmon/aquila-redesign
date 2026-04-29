# 🦅 AQUILA Consulting — Roadmap Redesign

## Contexte
Refonte complète du site https://aquila-consulting.com/
Direction créative : **"Executive Minimalism"** — L'élégance sobre d'un cabinet de conseil haut de gamme.

---

## Design System

### Palette
| Rôle | Couleur | Hex |
|------|---------|-----|
| Primary (dark) | Navy profond | `#0A1628` |
| Secondary | Bleu consulting | `#1E3A5F` |
| Accent | Or | `#C9A84C` |
| Background | Warm white | `#F8F6F3` |
| Text Primary | Anthracite | `#1A1A1A` |
| Text Secondary | Gris moyen | `#6B7280` |

### Typographie
- **Headings :** `Cormorant Garamond` — élégant, authority
- **Body :** `DM Sans` — moderne, lisible
- **Accent / Numbers :** `Space Grotesk` — KPIs, chiffres

---

## Stack
- **Framework :** Next.js 14+ (App Router)
- **Styling :** Tailwind CSS
- **Animations :** Framer Motion
- **Icons :** Lucide React
- **Fonts :** Google Fonts
- **Hosting :** Vercel

---

## Pages à créer

### 1. Homepage `/`
- Hero full-screen avec animation cinématique
- Section "Ce que nous faisons" (3 pôles en cards)
- Section "À propos" Ronnel (bio courte)
- Section KPIs animés (counter au scroll)
- Section "Pôles d'expertise" (accordion)
- CTA "Parlons de votre projet"

### 2. Page Staff `/staff/falana-ronnel`
- Hero avec photo + titre
- Bio structurée (timeline parcours)
- Domaines d'expertise (grid icônes)
- Types de missions (3 cards)
- Tableau tarifaire
- CTA prise de RDV

### 3. Page Études Financières `/etudes-financieres`
- Hero section
- Problématiques (accordion)
- Méthode en 2 phases (timeline)
- Pour Holding / Franchise
- CTA

### 4. Page Stratégie Juridique `/strategie-juridique`
- Hero section
- Les 5 étapes de la stratégie
- CTA

### 5. Page Formations `/formations`
- Hero section
- Catalogue cards (formations + prix)
- Liens PDFs programmes
- CTA inscription

### 6. Page Contact `/contact`
- Formulaire modernisé
- Infos contact (Lyon + Vienne)
- Carte ou image bureau

---

## Étapes de dev

### Sprint 1 — Setup & Design System
- [ ] Config Tailwind avec design tokens
- [ ] Layout global (Navbar + Footer)
- [ ] Fonts Google
- [ ] Composants de base (Button, Card, Section)
- [ ] Animations de base (fade-in, slide-up)

### Sprint 2 — Homepage
- [ ] Hero
- [ ] Section pôles
- [ ] Section à propos
- [ ] Section KPIs
- [ ] Section expertise
- [ ] CTA final

### Sprint 3 — Pages intérieures
- [ ] Page staff Falana Ronnel
- [ ] Template page pôle
- [ ] Page formations
- [ ] Page contact

### Sprint 4 — Finalisation
- [ ] Responsive (mobile-first)
- [ ] Performance (Lighthouse 90+)
- [ ] SEO (meta, OG, sitemap)
- [ ] Déploiement Vercel

---

## Assets manquants (à obtenir du client)
- [ ] Photo pro haute définition Ronnel FALANA
- [ ] Photo bureau (Lyon ou Vienne)
- [ ] Logo Aquila en SVG
- [ ] PDFs programmes de formation (déjà sur le site)

---

## Notes
- Textes à réécrire/refactoriser (actuellement trop denses)
- Vidéos : spot promo Aquila + intro Ronnel (sources à récupérer)
- Multi-langue EN/FR possible en v2
