# MML — Site vitrine

Redesign du site vitrine de **MML sarl** (Mauritanian Mining Logistics) par **Chinguiti Labs**.

Direction de design : **« Dossier de terrain »** — le site se lit comme un relevé d'expédition
minière (courbes de niveau topographiques, coordonnées GPS, fiches techniques en monospace,
journal de chantier). Palette désert chaud + bleu de marque.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- framer-motion (animations), lucide-react (icônes)
- Polices : Archivo Expanded (titres), IBM Plex Sans (corps), IBM Plex Mono (data)

## Démarrage

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # vérif TS + build production -> dist/
npm run preview    # prévisualiser le build
```

## Structure

```
src/
  data/site.ts        Tout le contenu (copie FR) — centralisé pour un futur i18n FR/EN/AR
  index.css           Système de design (tokens couleur/typo, courbes de niveau, mono)
  components/
    ui.tsx            Primitives : Button, Eyebrow, Coordinate, Contours (signature SVG)
    Nav, Hero, About, Services, Fleet, Projects, Sectors, Contact, Footer
public/img/           Visuels curés (engins, chantiers, logos)
scripts/shot.mjs      Outil de capture (puppeteer-core + Chrome système)
```

## À compléter avant mise en ligne (côté client)

Tout est centralisé dans `src/data/site.ts` :

- **Coordonnées réelles** : `company.phone`, `company.email`, `company.city` (placeholders actuels).
- **Chiffres** : `stats` (10+ ans, 24/7…) — confirmer ou affiner.
- **Projets** : `projects` — coordonnées/dates indiquées comme « indicatives ». Préciser les vrais
  sites et autorisations de communication.
- **Formulaire de contact** : actuellement front-only (affiche une confirmation). Brancher un
  service d'envoi (Formspree, API, e-mail…).
- **Photos** : certaines images sources portent un filigrane appareil (« TCL10 »). Idéalement les
  remplacer par des versions sans surimpression.

## i18n (prochaine étape)

Toute la copie vit dans `src/data/site.ts`. Pour le multilingue FR/EN/AR, envelopper chaque
chaîne dans `{ fr, en, ar }` et exposer un sélecteur de langue + `dir="rtl"` pour l'arabe.
