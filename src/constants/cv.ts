export type TResumeContent = {
  profil: string;
  competences: {
    developpement: string[];
    specialisations: string[];
  };
  experiences: Array<{
    titre: string;
    periode?: string;
    details: string[];
  }>;
  formation: string[];
  langues: string[];
  qualites: string[];
  interets: string[];
};

export type TResume = {
  fr: TResumeContent;
  en: TResumeContent;
  pdf: {
    fr: string; // URL path to FR PDF
    en: string; // URL path to EN PDF
  };
};

export const resume: TResume = {
  pdf: {
    fr: "/cv/cv-fr.pdf",
    en: "/cv/cv-en.pdf",
  },
  fr: {
    profil:
      "Développeuse Full Stack passionnée avec 4+ années d'expérience dans le développement d'applications web et mobiles. Expertise en Python/Django, React.js, et solutions ERP. Expérience complémentaire en enseignement et formation informatique.",
    competences: {
      developpement: [
        "Frontend: React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3",
        "Frameworks CSS: Tailwind CSS, Bootstrap",
        "Backend: Python/Django, Node.js, Express.js",
        "Bases de données: PostgreSQL, MongoDB",
        "Technologies mobiles: Natives & hybrides",
        "Outils: Electron, Ajax, Git",
      ],
      specialisations: [
        "Applications ERP (Enterprise Resource Planning)",
        "Intégration de systèmes (balances, caisses enregistreuses)",
        "Import/Export de données Excel",
        "Architecture MERN Stack",
      ],
    },
    experiences: [
      {
        titre: "Développeuse Full Stack | Alfec",
        periode: "2023",
        details: [
          "Application ERP Enterprise — Python/Django, Tailwind CSS; gestion des processus métier et interface responsive",
          "Système de Gestion Laboratoire Kerux — React, Electron, Express, PostgreSQL; intégration balances, reçus automatiques, upload de documents",
          "Plateforme E-commerce Restaurant Kerux — MERN + Next.js; intégration caisse enregistreuse, Bootstrap/TypeScript, synchro temps réel",
          "Application de Reporting & Analytics — Django, Bootstrap CSS, PostgreSQL; rapports détaillés et dashboards",
          "Système de Gestion des Devis — React, Electron, Express, PostgreSQL; import automatisé Excel",
          "Calendrier de Gestion des Tâches — Django, JavaScript, Ajax, Bootstrap CSS; planification avancée",
        ],
      },
      {
        titre: "Développeuse Web & Mobile | Freelance",
        periode: "2019 - 2021",
        details: [
          "Développement d'applications mobiles natives",
          "Création de sites web responsive",
          "Développement de logiciels sur mesure",
        ],
      },
      {
        titre: "Professeure d'Informatique | Collège",
        periode: "Janvier 2023 - Juillet 2023",
        details: [
          "Enseignement des fondamentaux informatiques",
          "Préparation de cours et évaluation des élèves",
          "Encadrement de projets étudiants",
        ],
      },
      {
        titre: "Expériences Complémentaires",
        details: [
          "Secrétaire — École Privée Amir Khaled (Nov 2022 - Jan 2023)",
          "Enseignante de Mathématiques — Cours de soutien (2021-2022, temps partiel)",
          "Conseillère de vente — Pharmacie (2019-2020)",
        ],
      },
    ],
    formation: ["À compléter avec vos diplômes et formations"],
    langues: ["Arabe (langue maternelle)", "Anglais (C1)", "Français (B2, TCF SO)"],
    qualites: ["Communication", "Adaptabilité", "Professionnalisme", "Leadership"],
    interets: ["Veille technologique et nouvelles technologies", "Enseignement et formation", "Contribution open source"],
  },
  en: {
    profil:
      "Full Stack Developer passionate about web and mobile development. Expertise in Python/Django, React.js, and ERP solutions. Additional background in teaching and IT training.",
    competences: {
      developpement: [
        "Frontend: React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3",
        "CSS Frameworks: Tailwind CSS, Bootstrap",
        "Backend: Python/Django, Node.js, Express.js",
        "Databases: PostgreSQL, MongoDB",
        "Mobile: Native & hybrid development",
        "Tools: Electron, Ajax, Git",
      ],
      specialisations: [
        "ERP Applications (Enterprise Resource Planning)",
        "Systems integration (scales, POS)",
        "Excel Import/Export",
        "MERN Stack Architecture",
      ],
    },
    experiences: [
      {
        titre: "Full Stack Developer | Alfec",
        periode: "2023",
        details: [
          "ERP Enterprise — Python/Django, Tailwind CSS; business process management and responsive UI",
          "Kerux Lab Management — React, Electron, Express, PostgreSQL; scale integration, auto receipts, document upload",
          "Kerux E-commerce — MERN + Next.js; POS integration, Bootstrap/TypeScript, real-time sync",
          "Reporting & Analytics — Django, Bootstrap CSS, PostgreSQL; detailed reports and dashboards",
          "Quote Management — React, Electron, Express, PostgreSQL; automated Excel import",
          "Task Calendar — Django, JavaScript, Ajax, Bootstrap CSS; advanced planning",
        ],
      },
      {
        titre: "Web & Mobile Developer | Freelance",
        periode: "2019 - 2021",
        details: [
          "Native mobile applications",
          "Responsive websites",
          "Custom software development",
        ],
      },
      {
        titre: "Computer Science Teacher | Middle School",
        periode: "Jan 2023 - Jul 2023",
        details: [
          "Fundamentals teaching",
          "Course preparation and evaluation",
          "Student project supervision",
        ],
      },
      {
        titre: "Additional Experience",
        details: [
          "Secretary — Private School Amir Khaled (Nov 2022 - Jan 2023)",
          "Math Teacher — Tutoring (2021-2022, part-time)",
          "Sales Advisor — Pharmacy (2019-2020)",
        ],
      },
    ],
    formation: ["To be completed with degrees and training"],
    langues: ["Arabic (native)", "English (C1)", "French (B2, TCF SO)"],
    qualites: ["Communication", "Adaptability", "Professionalism", "Leadership"],
    interets: ["Tech watch and new technologies", "Teaching and training", "Open source contribution"],
  },
};
