import benneNoir from "../../assets/flottes/Benne_extra.png";
import benneVert from "../../assets/flottes/Benne_vert.png";
import chargeurCaterpillar from "../../assets/flottes/chargeurCaterpillar.png";
import citerne from "../../assets/flottes/citerne.png";
import compacteur from "../../assets/flottes/Compacteur.png";
import develon from "../../assets/flottes/DEVELON.png";
import niveleuse from "../../assets/flottes/niveleuse.png";
import pelle325C from "../../assets/flottes/pelle325C.png";
import portChar from "../../assets/flottes/port_char.png";
import serviceEquipment from "../../assets/nos-projets/DEVELON.png";
import serviceExecution from "../../assets/nos-projets/Execution.png";
import servicePublicWorks from "../../assets/nos-projets/sousTraitance.png";
import tijiritOneCamp from "../../assets/nos-projets/WhatsApp-Image-2026-02-20-at-9.29.12-AM-768x432.jpeg";
import tijiritOneTeam from "../../assets/nos-projets/WhatsApp-Image-2026-02-20-at-9.29.12-AM-1-768x576.jpeg";
import tijiritOneConvoy from "../../assets/nos-projets/WhatsApp-Image-2026-02-20-at-9.29.12-AM-2-768x576.jpeg";
import tijiritOneFleet from "../../assets/nos-projets/WhatsApp-Image-2026-02-20-at-9.29.14-AM-1-768x432.jpeg";
import tijiritOneVehicles from "../../assets/nos-projets/WhatsApp-Image-2026-02-20-at-9.29.14-AM-2-768x576.jpeg";
import tijiritTwoAircraft from "../../assets/tijirit2/WhatsApp Image 2026-06-09 at 10.16.12 AM.jpeg";
import tijiritTwoCamp from "../../assets/tijirit2/WhatsApp Image 2026-06-09 at 10.16.14 AM.jpeg";
import tijiritTwoAuger from "../../assets/tijirit2/WhatsApp Image 2026-06-09 at 10.16.52 AM.jpeg";
import tijiritTwoRc from "../../assets/tijirit2/WhatsApp Image 2026-06-09 at 10.27.23 AM.jpeg";
import tijiritTwoLab from "../../assets/tijirit2/WhatsApp Image 2026-06-09 at 11.05.52 AM.jpeg";
import tijiritTwoSamples from "../../assets/tijirit2/WhatsApp Image 2026-06-09 at 11.05.54 AM.jpeg";
import tijiritTwoField from "../../assets/tijirit2/WhatsApp Image 2026-06-09 at 12.05.52 PM.jpeg";

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
  phone: "+222 36 28 98 51 / 36 36 07 32",
  email: "mhemeidy@mml.mr",
  address: "Génie militaire – Teyarett Nouakchott – Mauritanie",
  whatsapp: "https://wa.me/22236289851",
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
    title: "Transport",
    image: "/img/trucks-howo.webp",
    text: "Transport routier national de marchandises, conteneurs, produits pétroliers, matières dangereuses, engins et véhicules, avec une exécution sécurisée et conforme aux normes.",
    items: ["Produits pétroliers", "Conteneurs", "Marchandises", "Engins & véhicules"],
  },
  {
    code: "SVC·02",
    title: "Location d'équipements",
    image: serviceEquipment,
    text: "MML met à disposition une flotte de véhicules et d'équipements lourds prête à être déployée selon les besoins de chaque projet, avec entretien régulier et conformité technique.",
    items: ["Véhicules", "Engins lourds", "Déploiement rapide", "Maintenance suivie"],
  },
  {
    code: "SVC·03",
    title: "Sous-traitance",
    image: serviceExecution,
    text: "Nous exécutons des études et travaux en sous-traitance dans plusieurs secteurs du développement en Mauritanie, en appui de partenaires nationaux et internationaux.",
    items: ["Études", "Travaux", "Partenariats", "Projets multisecteurs"],
  },
  {
    code: "SVC·04",
    title: "Travaux publics",
    image: servicePublicWorks,
    text: "MML intervient sur les travaux de terrassement, préparatoires, assainissement et projets TP de petite ou moyenne taille, avec respect des délais et standards qualité.",
    items: ["Terrassement", "Assainissement", "Digues & barrages", "Balisage routier"],
  },
];

/* Flotte — engins réels de MML, présentés comme une fiche technique (spec-sheet) */
export const fleet = [
  {
    ref: "PE-325C",
    name: "Pelle Caterpillar 325C",
    cat: "Excavation",
    image: pelle325C,
    specs: [
      ["Usage", "Excavation / chargement"],
      ["Marque", "Caterpillar"],
      ["Type", "Sur chenilles"],
    ],
  },
  {
    ref: "CH-SD300",
    name: "Chargeuse DEVELON SD300",
    cat: "Chargement",
    image: develon,
    specs: [
      ["Usage", "Chargement / reprise"],
      ["Marque", "DEVELON"],
      ["Type", "Sur pneus"],
    ],
  },
  {
    ref: "NV-160H",
    name: "Niveleuse Grader 160H",
    cat: "Nivellement",
    image: niveleuse,
    specs: [
      ["Usage", "Nivellement / pistes"],
      ["Lame", "VHP réglable"],
      ["Type", "Automotrice"],
    ],
  },
  {
    ref: "CP-563",
    name: "Compacteur Caterpillar CS-563",
    cat: "Compactage",
    image: compacteur,
    specs: [
      ["Usage", "Plateformes / voirie"],
      ["Marque", "Caterpillar"],
      ["Cylindre", "Vibrant lisse"],
    ],
  },
  {
    ref: "CT-15T",
    name: "Camion citerne Gasoil 15T",
    cat: "Ravitaillement",
    image: citerne,
    specs: [
      ["Usage", "Gasoil / ravitaillement"],
      ["Capacité", "15 tonnes"],
      ["Config", "Citerne routière"],
    ],
  },
  {
    ref: "BN-HOWO-V",
    name: "Camion benne HOWO",
    cat: "Transport vrac",
    image: benneVert,
    specs: [
      ["Usage", "Vrac / agrégats"],
      ["Marque", "HOWO"],
      ["Config", "6x4 robuste"],
    ],
  },
  {
    ref: "BN-HOWO-N",
    name: "Camion benne HOWO (2 ponts  arrière)",
    cat: "Transport vrac",
    image: benneNoir,
    specs: [
      ["Usage", "Vrac / chantier"],
      ["Marque", "HOWO"],
      ["Config", "Benne renforcée"],
    ],
  },
  {
    ref: "CH-950G",
    name: "Chargeuse Caterpillar 950G",
    cat: "Chargement",
    image: chargeurCaterpillar,
    specs: [
      ["Usage", "Chargement / reprise"],
      ["Marque", "Caterpillar"],
      ["Type", "Sur pneus"],
    ],
  },
  {
    ref: "PC-HOWO",
    name: "Porte-char HOWO 371",
    cat: "Transport lourd",
    image: portChar,
    specs: [
      ["Usage", "Transport engins"],
      ["Marque", "HOWO"],
      ["Config", "Porte-char"],
    ],
  },
];

export const fleetMore = [
  "Toyota GX",
  "Toyota Hilux"
];

export const projectCases = [
  {
    log: "TIJIRIT I",
    title: "Couverture logistique d'une campagne aurifère",
    period: "7 novembre - 14 février 2026",
    sector: "Prospection aurifère",
    location: "Zone de Tijirit",
    summary:
      "MML a assuré la couverture complète d'une campagne d'exploration minière : camp de vie, catering, transport, carburant, eau, engins et continuité opérationnelle sur site.",
    stats: [
      ["Période", "Nov. - fév. 2026"],
      ["Moyens", "D8, citernes, porte-char"],
      ["HSE", "Zéro incident"],
    ],
    highlights: [
      "Campement de vie et support quotidien",
      "Bulldozer D8, citernes eau et gasoil",
      "Porte-char, véhicules tout terrain et groupes électrogènes",
      "Connexion internet et logistique de campagne",
    ],
    gallery: [
      { src: tijiritOneCamp, caption: "Équipe et rig sur site" },
      { src: tijiritOneTeam, caption: "Mobilisation terrain" },
      { src: tijiritOneConvoy, caption: "Convoi et appui logistique" },
      { src: tijiritOneFleet, caption: "Véhicules tout terrain" },
      { src: tijiritOneVehicles, caption: "Flotte de support" },
    ],
  },
  {
    log: "TIJIRIT II",
    title: "Trois campagnes d'exploration coordonnées",
    period: "Campagne 2026 - 2 à 3 mois",
    sector: "Exploration minière",
    location: "Permis de Tijirit",
    summary:
      "Avec Bigconsulting, MML a organisé la logistique de trois campagnes simultanées : forage AUGER, forage RC et géophysique aéroportée, avec équipes jour/nuit et traitement rigoureux des échantillons.",
    stats: [
      ["Camp vie", "38 tentes"],
      ["Rythme", "24h/24"],
      ["RC", "Jusqu'à 300 m"],
    ],
    highlights: [
      "Forage AUGER pour la reconnaissance de surface",
      "Forage RC en profondeur selon la qualité du sol",
      "Campagne géophysique aéroportée",
      "Préparation, division et archivage des échantillons",
    ],
    gallery: [
      { src: tijiritTwoRc, caption: "Rig RC en opération" },
      { src: tijiritTwoAircraft, caption: "Campagne géophysique aéroportée" },
      { src: tijiritTwoCamp, caption: "Camp de vie et équipes" },
      { src: tijiritTwoAuger, caption: "Campagne AUGER" },
      { src: tijiritTwoLab, caption: "Préparation des échantillons" },
      { src: tijiritTwoSamples, caption: "Traçabilité et archivage" },
      { src: tijiritTwoField, caption: "Suivi terrain" },
    ],
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
  credit: "développer par  — Chinguiti Labs",
};
