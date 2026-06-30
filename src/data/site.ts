/* ============================================================================
   MML — Données & contenu (centralisés pour un futur i18n FR/EN/AR).
   Toute la copie vit ici. Les composants ne contiennent aucun texte en dur.
   ========================================================================== */

export const company = {
  name: "MML sarl",
  legal: "Mauritanian Mining Logistics",
  tagline: "Logistique de terrain",
  domain: "mml.mr",
  baseYear: 2014,
  // À confirmer par le client :
  phone: "+222 00 00 00 00",
  email: "contact@mml.mr",
  city: "Nouakchott, Mauritanie",
  whatsapp: "https://wa.me/22200000000",
};

export const nav = [
  { label: "Terrain", href: "#terrain" },
  { label: "Services", href: "#services" },
  { label: "Flotte", href: "#flotte" },
  { label: "Chantiers", href: "#chantiers" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Mauritanie · 20°N — 13°W",
  // Là où s'arrête la route, MML continue.
  titleTop: "Là où s'arrête",
  titleAccent: "la route,",
  titleBottom: "MML continue.",
  lead:
    "Location d'engins, transport et travaux publics jusqu'aux sites les plus isolés du Sahara. Nous mobilisons la machine, l'équipage et la logistique — et nous livrons sur le terrain, pas seulement sur le papier.",
  ctaPrimary: "Demander un devis",
  ctaSecondary: "Voir la flotte",
  coordinate: "TIJIRIT · CARTE DE RELEVÉ 014",
};

/* Bande défilante sous le hero — vocabulaire réel du métier */
export const ticker = [
  "Terrassement",
  "Forage minier",
  "Transport vrac",
  "Citerne eau & carburant",
  "Pistes & plateformes",
  "Base-vie",
  "Conteneurs",
  "Niveleuse · Compacteur · Pelle",
];

export const stats = [
  { value: "10", suffix: "+", label: "ans sur le terrain", note: "depuis 2014" },
  { value: "24", suffix: "/7", label: "mobilisation", note: "sites isolés" },
  { value: "100", suffix: "%", label: "couverture nationale", note: "Sahara compris" },
  { value: "4", suffix: "", label: "métiers intégrés", note: "engins · transport · TP · logistique" },
];

export const about = {
  eyebrow: "Le terrain",
  title: "Le désert n'est pas un obstacle. C'est notre zone d'opération.",
  body: [
    "MML sarl est née en Mauritanie d'un constat simple : la plupart des prestataires s'arrêtent là où la piste devient difficile. Nous avons construit l'inverse — une entreprise faite pour aller plus loin, plus vite, avec le bon matériel et les bonnes équipes.",
    "Depuis plus de dix ans, nous accompagnons les opérateurs miniers, le BTP et l'industrie là où la logistique fait la différence entre un projet qui avance et un projet qui attend. Engins entretenus selon des normes strictes, équipages aguerris au désert, réactivité réelle.",
  ],
  pillars: [
    {
      code: "01",
      title: "Polyvalence",
      text: "Quatre métiers sous un seul toit : engins, transport, travaux publics et logistique de projet. Un seul interlocuteur du devis à la livraison.",
    },
    {
      code: "02",
      title: "Fiabilité",
      text: "Flotte entretenue en atelier selon des normes strictes. On ne mobilise pas une machine qu'on ne ferait pas rouler nous-mêmes.",
    },
    {
      code: "03",
      title: "Réactivité",
      text: "Mobilisation rapide vers les sites les plus isolés. Quand le terrain l'exige, on est déjà en route.",
    },
  ],
};

export const services = [
  {
    code: "SVC·01",
    title: "Location d'engins",
    image: "/img/grader.webp",
    text: "Niveleuses, compacteurs, chargeuses et pelles — avec ou sans opérateur. Du terrassement à l'entretien de pistes, le bon engin pour chaque phase de chantier.",
    items: ["Niveleuse CAT", "Compacteur", "Chargeuse", "Pelle sur chenilles"],
  },
  {
    code: "SVC·02",
    title: "Transport routier",
    image: "/img/trucks-howo.webp",
    text: "Vrac, conteneurs et citernes (eau, carburant). Une flotte de poids lourds dimensionnée pour les longues distances et les pistes mauritaniennes.",
    items: ["Bennes vrac", "Porte-conteneurs", "Citerne eau", "Citerne carburant"],
  },
  {
    code: "SVC·03",
    title: "Travaux publics",
    image: "/img/works.jpeg",
    text: "Terrassement, pistes d'accès, plateformes et voirie. De la préparation de site minier à l'entretien des routes, on exécute sur le terrain.",
    items: ["Terrassement", "Pistes d'accès", "Plateformes", "Voirie"],
  },
  {
    code: "SVC·04",
    title: "Logistique de projet",
    image: "/img/camp.jpeg",
    text: "Acheminement, base-vie et support aux campagnes de forage sur sites isolés. La logistique complète qui tient un chantier loin de tout.",
    items: ["Base-vie", "Acheminement", "Support forage", "Approvisionnement"],
  },
];

/* Flotte — présentée comme une fiche technique (spec-sheet) */
export const fleet = [
  {
    ref: "GR-160",
    name: "Niveleuse CAT 160H",
    cat: "Terrassement",
    image: "/img/grader.webp",
    specs: [
      ["Usage", "Nivellement · pistes"],
      ["Lame", "Réglable VHP"],
      ["Terrain", "Désert · piste"],
    ],
  },
  {
    ref: "CP-563",
    name: "Compacteur CAT CS-563",
    cat: "Compactage",
    image: "/img/compactor.webp",
    specs: [
      ["Usage", "Plateformes · voirie"],
      ["Cylindre", "Vibrant lisse"],
      ["Terrain", "Sol · remblai"],
    ],
  },
  {
    ref: "EX-325",
    name: "Pelle CAT 325C",
    cat: "Excavation",
    image: "/img/excavator-325.jpeg",
    specs: [
      ["Usage", "Excavation · chargement"],
      ["Type", "Chenilles"],
      ["Terrain", "Tous terrains"],
    ],
  },
  {
    ref: "HW-VRAC",
    name: "Bennes HOWO",
    cat: "Transport vrac",
    image: "/img/trucks-howo.webp",
    specs: [
      ["Usage", "Vrac · agrégats"],
      ["Config", "6×4 robuste"],
      ["Terrain", "Longue distance"],
    ],
  },
  {
    ref: "CIT-EAU",
    name: "Camion-citerne",
    cat: "Eau & carburant",
    image: "/img/tanker.webp",
    specs: [
      ["Usage", "Eau · carburant"],
      ["Cuve", "Grande capacité"],
      ["Terrain", "Ravitaillement site"],
    ],
  },
  {
    ref: "LD-DUNE",
    name: "Chargeuse sur pneus",
    cat: "Chargement",
    image: "/img/loader-sand.jpeg",
    specs: [
      ["Usage", "Chargement · reprise"],
      ["Godet", "Polyvalent"],
      ["Terrain", "Sable · dune"],
    ],
  },
];

/* Chantiers — « journal de terrain » avec coordonnées et dates réelles */
export const projects = [
  {
    log: "LOG·01",
    title: "Campagne de forage — Tijirit",
    coord: "20°31′N · 13°02′W",
    date: "Mai 2025",
    sector: "Exploration minière",
    image: "/img/drill-rig.jpeg",
    text: "Support logistique complet d'une campagne de forage en plein erg : acheminement du matériel, base-vie, eau et carburant. Site opérationnel sans interruption.",
    metric: "132 m de profondeur EOH",
  },
  {
    log: "LOG·02",
    title: "Mobilisation équipes & EPI",
    coord: "Corridor minier nord",
    date: "2025",
    sector: "HSE · personnel",
    image: "/img/team-hse.jpeg",
    text: "Transport et hébergement des équipes sur site distant, dans le respect des standards HSE des opérateurs miniers. Rotation assurée sans rupture.",
    metric: "Équipes complètes mobilisées",
  },
  {
    log: "LOG·03",
    title: "Terrassement & pistes d'accès",
    coord: "Zone d'exploitation",
    date: "2024 — 2025",
    sector: "Travaux publics",
    image: "/img/works.jpeg",
    text: "Ouverture et entretien de pistes d'accès, préparation de plateformes pour engins lourds. Le terrain rendu praticable avant l'arrivée des opérations.",
    metric: "Plateformes livrées",
  },
  {
    log: "LOG·04",
    title: "Rotation transport vrac",
    coord: "Axe Nouakchott — site",
    date: "En continu",
    sector: "Transport",
    image: "/img/trucks-fleet.jpeg",
    text: "Flotte de bennes HOWO dédiée au transport d'agrégats et de matériaux sur longue distance, avec planning de rotation optimisé.",
    metric: "Flotte dédiée",
  },
];

export const sectors = [
  { code: "A", name: "Mines & exploration", note: "Forage, terrassement, base-vie" },
  { code: "B", name: "BTP & construction", note: "Engins, transport, plateformes" },
  { code: "C", name: "Pétrole & énergie", note: "Logistique, citernes, accès" },
  { code: "D", name: "Agro-industrie", note: "Plantations, brasseries, vrac" },
];

export const contact = {
  eyebrow: "Contact",
  title: "Un chantier loin de tout ? Parlons-en.",
  lead:
    "Décrivez-nous le site, les volumes et les délais. On revient vers vous avec le matériel adapté et un devis clair.",
  fields: {
    name: "Nom & société",
    email: "Email",
    phone: "Téléphone",
    message: "Votre projet (site, volumes, délais)",
    submit: "Envoyer la demande",
  },
  directLabel: "Ou directement",
};

export const footer = {
  blurb:
    "Mauritanian Mining Logistics. Location d'engins, transport routier, travaux publics et logistique de projet à travers la Mauritanie.",
  rights: "Tous droits réservés.",
  credit: "Conception & développement — Chinguiti Labs",
};
