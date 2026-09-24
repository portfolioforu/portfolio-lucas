export const profile = {
  name: 'Lucas Llinares-Cruz',
  role: 'BTS Électrotechnique — recherche d\'apprentissage',
  tagline:
    "Je comprends comment les choses fonctionnent en les démontant — aujourd'hui je veux en faire un métier, sur le terrain.",
  location: 'Saint-André-le-Gaz, Isère',
  email: 'lucasllinares38@gmail.com',
  phone: '07 67 12 90 65',
  availability: 'Disponible dès maintenant pour une alternance',
  cvUrl: '/CV-Lucas-Llinares-Cruz.pdf',
}

export const stats = [
  { value: '2', label: 'stages & expériences terrain' },
  { value: 'B2', label: "niveau d'anglais confirmé" },
  { value: '1', label: 'prototype électronique conçu' },
]

export const about = {
  paragraphs: [
    "Après deux ans de licence en langues appliquées anglais-espagnol, j'ai choisi de reprendre à zéro pour aller vers ce qui m'attire vraiment : comprendre comment les choses fonctionnent, et les réparer de mes mains. Mon objectif est le BTS Électrotechnique, via un Titre professionnel de mise à niveau préalable.",
    "Ce qui m'intéresse dans ce métier, c'est le mélange de rigueur technique et de travail concret : lire un schéma, comprendre une installation, intervenir sur du matériel réel, en milieu industriel comme chez un particulier.",
    "Voyages, cinéma, codage et conception 3D, jeux vidéo : je m'essaie à beaucoup de choses différentes. J'aime autant apprendre par la pratique que par la théorie, et je fais facilement face à des situations nouvelles.",
  ],
}

export const experienceIntro =
  "Un parcours qui commence par les langues et se réoriente vers la technique. Chaque étape m'a appris quelque chose de différent sur le travail en équipe, la rigueur, et l'envie de comprendre comment les systèmes fonctionnent."

export const experience = [
  {
    period: 'Recherche en cours',
    title: 'Apprenti électrotechnicien',
    org: 'Titre professionnel Électrotechnique (mise à niveau vers le BTS)',
    description:
      "En recherche active d'une entreprise pour démarrer une formation en apprentissage. Objectif : le BTS Électrotechnique, via ce titre professionnel de mise à niveau préalable. Je veux transformer une appétence pour la technique en compétences concrètes, directement sur le terrain.",
    skillsGained: ['Motivation confirmée', 'Autonomie', "Capacité d'analyse"],
  },
  {
    period: '2024 — 2025',
    title: 'Licence Langues Étrangères Appliquées (1ère année)',
    org: 'Université Grenoble Alpes',
    description:
      "Une année de licence anglais-espagnol qui m'a confirmé mon niveau en langues, et surtout aidé à comprendre que je voulais un métier plus manuel et concret.",
    skillsGained: ['Anglais B2 confirmé', 'Espagnol B1', 'Méthode de travail'],
  },
  {
    period: 'Juillet 2022',
    title: 'Service National Universel — séjour de cohésion',
    org: 'Centre IGeSA « La Fontaine du Berger » — Orcines (63)',
    description:
      "Séjour de cohésion de deux semaines en collectivité : vie en groupe, activités encadrées, premières responsabilités collectives.",
    skillsGained: ['Travail en équipe', 'Autonomie', 'Adaptabilité'],
  },
  {
    period: 'Avril 2021',
    title: "Stage d'observation — lignes de production",
    org: 'Tecumseh Europe SA — Cessieu (38)',
    description:
      "Stage d'observation d'une semaine sur les postes et les machines des lignes de production : premier contact concret avec le milieu industriel et les métiers techniques.",
    skillsGained: ['Découverte du milieu industriel', 'Observation de poste', 'Sécurité en atelier'],
  },
  {
    period: '2021 — 2024',
    title: 'Baccalauréat STI2D',
    org: 'Lycée Saint-Marc — Nivolas-Vermelle (38)',
    description:
      "Bac technologique orienté sciences et techniques de l'industrie — première approche de l'électronique, avec la conception d'un prototype de thermostat connecté.",
    skillsGained: ["Bases en électronique", 'Codage & conception 3D', 'Travail de projet'],
  },
]

export const certifications = [
  { name: "Brevet d'Initiation Aéronautique (BIA)", org: 'Éducation nationale', year: '' },
]

export const skills = [
  {
    category: 'Électricité & technique',
    items: [
      'Bases en électricité industrielle',
      'Bases en électricité chez le particulier',
      'Lecture de schémas',
      'Sécurité en atelier',
    ],
  },
  {
    category: 'Informatique & conception',
    items: ['Bureautique', 'Codage (bases)', 'Conception 3D (bases)', 'Recherche & documentation technique'],
  },
  {
    category: 'Savoir-être',
    items: ['Polyvalence', 'Adaptation rapide', "Capacité d'analyse", 'Autonomie'],
  },
  {
    category: 'Langues',
    items: ['Français (natif)', 'Anglais (B2 confirmé)', 'Espagnol (B1)'],
  },
]

export const projects = [
  {
    slug: 'thermostat-connecte-lycee',
    title: 'Prototype de thermostat connecté',
    client: 'Projet de lycée — Bac STI2D',
    tag: 'Électronique & prototypage',
    role: "Conception et réalisation (projet d'étude)",
    duration: 'Projet de terminale · 2023 — 2024',
    description:
      "Conception d'un prototype de thermostat connecté : lecture de capteur, régulation de température et boîtier imprimé en 3D, réalisé dans le cadre du Bac STI2D.",
    result: "Prototype fonctionnel présenté et validé à l'oral du baccalauréat",
    context:
      "Le projet de terminale STI2D demandait de concevoir un objet technique répondant à un besoin réel, de l'idée jusqu'au prototype fonctionnel. J'ai choisi de travailler sur un thermostat connecté pour explorer en même temps l'électronique, le code et la conception d'un boîtier.",
    objectives: [
      'Concevoir un système capable de mesurer et de réguler une température',
      'Rendre le thermostat pilotable à distance',
      "Concevoir un boîtier imprimé en 3D adapté à l'électronique interne",
    ],
    actions: [
      'Étude du besoin et choix des composants (capteur de température, microcontrôleur, relais)',
      'Câblage et tests du circuit électronique',
      'Programmation de la logique de régulation et de la communication à distance',
      'Conception du boîtier en modélisation 3D puis impression',
      "Tests, ajustements et présentation du prototype fonctionnel à l'oral du baccalauréat",
    ],
    results: [
      { value: '1', label: 'prototype fonctionnel livré' },
      { value: '3', label: 'compétences combinées : électronique, code, 3D' },
      { value: 'Oral', label: 'présenté et validé au Bac STI2D' },
    ],
    tools: ['Microcontrôleur', 'Capteur de température', 'Conception 3D', 'Notions de code embarqué'],
    learned:
      "Ce projet m'a montré que je préfère largement construire et tester avec les mains plutôt que de rester sur la théorie — c'est ce qui m'a définitivement orienté vers l'électrotechnique.",
  },
]

export const contact = {
  heading: 'On construit quelque chose ensemble ?',
  body: "Je recherche une entreprise pour m'accueillir en apprentissage sur le Titre professionnel Électrotechnique, en vue d'un BTS Électrotechnique. Sérieux, motivé et disponible rapidement.",
  availabilityNote:
    'Disponible dès maintenant, basé à Saint-André-le-Gaz (38) — mobile sur le secteur Lyon / Grenoble / Nord-Isère.',
  social: [] as { label: string; handle: string; url: string }[],
  faq: [
    {
      question: 'Quel type de contrat recherches-tu ?',
      answer:
        "Un contrat d'apprentissage pour préparer le Titre professionnel Électrotechnique, en vue d'un BTS Électrotechnique, à partir de la prochaine rentrée.",
    },
    {
      question: 'Es-tu mobile ?',
      answer:
        'Oui, je suis mobile sur le secteur Lyon - Grenoble - Nord-Isère et disponible pour me déplacer si besoin.',
    },
    {
      question: 'Quel est ton délai de réponse ?',
      answer: 'Je réponds sous 24 à 48h, par e-mail ou téléphone.',
    },
  ],
}
