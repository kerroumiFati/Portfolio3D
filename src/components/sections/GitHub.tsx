import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { useLang } from "../../context/lang";
import { useScrollReveal } from "../../utils/gsapHelpers";
import { fadeIn } from "../../utils/motion";

const USERNAME = "kerroumiFati";

const CARDS = [
  {
    src: `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=F518E1&icon_color=F518E1&text_color=ffffff`,
    alt: "GitHub Stats",
  },
  {
    src: `https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=radical&hide_border=true&background=0d1117&ring=F518E1&fire=F518E1&currStreakLabel=F518E1`,
    alt: "GitHub Streak",
  },
  {
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=radical&hide_border=true&bg_color=0d1117&title_color=F518E1&text_color=ffffff`,
    alt: "Top Languages",
  },
];

const GitHub = () => {
  const { lang } = useLang();
  const containerRef = useScrollReveal({ fromY: 30, duration: 1, once: true, start: "top 85%" });

  return (
    <>
      <Header
        useMotion={true}
        p={lang === "fr" ? "Contributions Open Source" : "Open Source Contributions"}
        h2={lang === "fr" ? "Activité GitHub." : "GitHub Activity."}
      />

      <div ref={containerRef as any} className="opacity-0 mt-10 flex flex-col items-center gap-8">
        {CARDS.map((card, index) => (
          <motion.div
            key={card.alt}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              boxShadow: "0 12px 40px rgba(245,24,225,0.35)",
            }}
            className="w-full max-w-2xl overflow-hidden rounded-2xl transition-shadow duration-300"
            style={{ boxShadow: "0 0 20px rgba(245,24,225,0.1)" }}
          >
            <img
              src={card.src}
              alt={card.alt}
              loading="lazy"
              className="h-auto w-full"
            />
          </motion.div>
        ))}

        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #F518E1 0%, #9F00FE 100%)",
            boxShadow: "0 0 20px rgba(245,24,225,0.3)",
          }}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          {lang === "fr" ? "Voir le Profil GitHub Complet" : "View Full GitHub Profile"}
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(GitHub, "github");
