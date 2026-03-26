import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  FoodLab,
  Vitrine,
  LGDistr,
  ERPNext,
  EcommerceSite,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "CV",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "ERP",
    icon: web,
  },
  {
    title: "Mobile",
    icon: mobile,
  },
  {
    title: "Logiciel",
    icon: backend,
  },
  {
    title: "Web",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const experiencesEn: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#26474E",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#77021D",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#26474E",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#77021D",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const experiencesFr: TExperience[] = [
  {
    title: "Développeuse logiciel & web ",
    companyName: "Freelance / Projets personnels",
    icon: starbucks,
    iconBg: "#26474E",
    date: "2020 -  Aujourd’hui",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies associées.",
      "Collaborer avec des équipes pluridisciplinaires (designers, Product Managers, développeurs) pour créer des produits de haute qualité.",
      "Mettre en œuvre des designs responsives et assurer la compatibilité inter-navigateurs.",
      "Participer aux revues de code et fournir des retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeuse Mobile",
    companyName: "",
    icon: tesla,
    iconBg: "#77021D",
    date: "2021 - 2025",
    points: [
      "Développement d’applications mobiles cross‑platform avec React Native,et d'autres technologies associées  ",
      "Incluant géolocalisation (GPS), notifications push, impression de reçus, scan de codes‑barres/QR et ",
      "parcours d’achat en ligne complet (produits, panier, paiement)"
    ],
  },
  {
    title: "Développeuse ERP",
    companyName: "",
    icon: shopify,
    iconBg: "#26474E",
    date: "2023 – Aujourd’hui",
    points: [
      "Personnalisation d’ERPNext pour la gestion RH et paie : adaptation des doctypes, formulaires et rapports selon les besoins d’entreprises industrielles en Algérie",
      "Développement de modules de gestion de stock et suivi des mouvements (entrées/sorties, inventaires, alertes) intégrés à des tableaux de bord clairs pour les responsables.",
       "Conception d’un ERP personnalisé aligné sur les processus métier spécifiques, avec des fonctionnalités de gestion de stock, facturation, et suivi des livraisons.",
      " Mise en place de l’import automatique de données via fichiers Excel pour alimenter produits, mouvements et données  ",
      "Génération de documents PDF (factures, bons de commande, états récapitulatifs) directement depuis le système.",
      "Implémentation de la traçabilité complète des opérations (historique des actions, journaux de modifications, suivi des statuts).",
      "Configuration de notifications internes et de suivis par e‑mail pour les validations, retards, alertes de stock et échéances."

    ],
  },
  {
    title: "Développeur Full Stack",
    companyName: "",
    icon: meta,
    iconBg: "#77021D",
    date: "Jan 2023 - Présent",
    points: [
      "Conception et développement d’applications web complètes avec Django, React.js et PostgreSQL, incluant des fonctionnalités de gestion de contenu, authentification, et tableaux de bord interactifs.",
      "Mise en place d’interfaces modernes et responsive",
      "Intégration de fonctionnalités avancées : Gestion des utilisateurs et rôles ,Génération de factures ,Notifications et suivi en temps réel",
      "Développement d’applications desktop",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Inventory & Distribution ",
    description:
      "Software for managing stock, distribution, users, barcode scanning, sales, purchases, orders, GPS tracking, notifications, invoicing, and delivery tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: LGDistr,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Food Lab",
    description:
      "Development of a weighing and laboratory management software for chicken and vegetables, including stock management and delivery tracking",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },{
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: FoodLab,
    sourceCodeLink: "https://github.com/",
  },
   {
    name: "Showcase Website",
    description:
      "Responsive one-page website with a clean design, smooth scrolling, and distinct sections for a captivating homepage, detailed services, portfolio, and direct contact",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Vitrine,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "E-Commerce",
    description:
      "Ready-to-wear online store designed to simplify the purchase journey — filterable catalog (category, popularity), smooth checkout (cart, promo codes, payment via Stripe) and a mobile-first responsive UI.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Stripe", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: EcommerceSite,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "ERP ",
    description:
      "ERPNext (open-source) module implementation and customization, including Purchasing, Sales, HR,Logistics, and Hospitality,to support business operations.",
    tags: [
      {
        name: "Frappe ",
        color: "blue-text-gradient",
      },{
        name: "Boostrap",
        color: "pink-text-gradient",
      },
      {
        name: "MariaDB",
        color: "green-text-gradient",
      },
      
    ],
    image: ERPNext,
    sourceCodeLink: "https://github.com/",
  },
];

const projectsFr: TProject[] = [
  {
    name: "Inventaire & Distribution",
    description:
      "Logiciel de gestion de stock, distribution, utilisateurs, scan de codes-barres, ventes, achats, commandes, suivi GPS, notifications, facturation et suivi des livraisons.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: LGDistr,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Food Lab",
    description:
      "Développement d'un logiciel de pesage et de gestion de laboratoire pour poulets et légumes, incluant la gestion des stocks et le suivi des livraisons.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      
      { name: "restapi", color: "green-text-gradient" },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: FoodLab,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Site vitrine",
    description:
      "Site vitrine responsive à design épuré, scroll fluide, avec sections distinctes pour accueil accrocheur, services détaillés, réalisations et contact direct.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: Vitrine,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "E-Commerce",
    description:
      "Boutique en ligne de prêt-à-porter avec catalogue filtrable (catégories, popularité), tunnel de commande fluide — panier, codes promo, paiement Stripe — et interface optimisée mobile/desktop.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Stripe", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: EcommerceSite,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "ERP",
    description:
      "Implémentation et personnalisation de modules ERPNext (open-source) : Achats, Ventes, RH, Logistique et Hôtellerie, pour soutenir les opérations métier.",
    tags: [
      { name: "Frappe", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "MariaDB", color: "green-text-gradient" },
    ],
    image: ERPNext,
    sourceCodeLink: "https://github.com/",
  },
];

const testimonialsFr: TTestimonial[] = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site aussi beau que notre produit, mais Rick m'a prouvé le contraire.",
    name: "Sara Lee",
    designation: "DAF",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré un développeur web qui se soucie autant du succès de ses clients que Rick.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Après que Rick a optimisé notre site, notre trafic a augmenté de 50 %. Nous ne pouvons pas assez le remercier !",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, testimonials, testimonialsFr, projects, projectsFr };
