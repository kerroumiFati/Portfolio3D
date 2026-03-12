type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: (
    {
      form: {
        name: {
          span: string;
          placeholder: string;
        };
        email: {
          span: string;
          placeholder: string;
        };
        message: {
          span: string;
          placeholder: string;
        };
      };
    } & TSection
  );
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
  translations?: {
    fr: {
      hero: { p: string[] };
      sections: {
        about: Required<TSection>;
        experience: TSection;
        works: Required<TSection>;
        contact: TSection & {
          form: {
            name: { span: string; placeholder: string };
            email: { span: string; placeholder: string };
            message: { span: string; placeholder: string };
          };
        };
      };
    };
  };
};

export const config: TConfig = {
  translations: {
    fr: {
      hero: {
        p: [
          "Je conçois des Logiciels, des interfaces",
          "utilisateur et des applications web",
        ],
      },
      sections: {
        about: {
          p: "Introduction",
          h2: "Aperçu.",
          content:
            "Développeuse Full Stack avec expérience en TypeScript/JavaScript et expertise React, Next.js,Node.js et Express.js.Je collabore avec les clients pour créer des solutions efficaces et ergonomiques.",
        },
        experience: {
          p: "Ce que j'ai fait jusqu'à présent",
          h2: "Expérience professionnelle.",
        },
        works: {
          p: "Mes projets",
          h2: "Projets.",
          content:
            "Sélection de projets illustrant mes compétences. Chaque carte inclut une description, des technologies et des liens.",
        },
        contact: {
          p: "Me contacter",
          h2: "Contact.",
          form: {
            name: { span: "Votre nom", placeholder: "Quel est votre nom ?" },
            email: {
              span: "Votre email",
              placeholder: "Quel est votre email ?",
            },
            message: {
              span: "Votre message",
              placeholder: "Que souhaitez-vous dire ?",
            },
          },
        },
      },
    },
  },
  html: {
    title: "KERROUMI  fatima zohra ",
    fullName: "KERROUMI  fatima zohra",
    email: "KerroumiZahra.fatima@mail.com",
  },
  hero: {
    name: "KERROUMI  fatima zohra",
    p: ["I develop , user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
