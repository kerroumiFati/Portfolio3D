import { useEffect } from "react";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { resume } from "../../constants/cv";
import { useLang } from "../../context/lang";
import { useScrollReveal, initStaggerChildrenOnView } from "../../utils/gsapHelpers";

type Lang = "fr" | "en";
const ResumeCompact = ({ lang = "fr" }: { lang?: Lang }) => {
  const data = resume[lang];
  return (
    <div className="resume-section mt-10   grid grid-cols-1 gap-6 md:grid-cols-2 rounded-xl">
      {/* Wave background decoration */}
      
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-10">
          <path d="M0,200 C300,100 600,300 900,150 C1050,75 1150,180 1200,160 L1200,400 L0,400 Z" fill="#C71585" />
          <path d="M0,250 C200,150 500,350 800,200 C1000,100 1100,220 1200,200 L1200,400 L0,400 Z" fill="#FF1493" opacity="0.5" />
        </svg>
        
      </div>

      {/* Table des expériences */}
      <div className="resume-table relative z-10 w-full">
        {data.experiences.map((exp, i) => {
          const parts = exp.titre.split(" | ");
          const poste = parts[0] || exp.titre;
          const entreprise = parts[1] || "";
          return (
            <div key={i} className="resume-row">
              <div className="grid grid-cols-3 gap-4 py-6 px-4 items-center">
                <span className="text-white text-[15px] font-medium">{poste}</span>
                <span className="text-white/70 text-[15px]">{entreprise}</span>
                <span className="text-white/70 text-[15px]">{exp.periode || ""}</span>
              </div>
              <div className="border-b border-white/10 mx-4" />
            </div>
          );
        })}
      </div>

      {/* Langues & Formation en bas */}
      <div className="resume-bottom relative z-10 grid grid-cols-2 gap-6 mt-8 px-4 pb-6">
        <div className="resume-col">
          <h4 className="text-white font-semibold mb-2">{lang === "fr" ? "Langues" : "Languages"}</h4>
          <ul className="space-y-1">
            {data.langues.map((l, i) => (
              <li key={i} className="text-white/60 text-sm">{l}</li>
            ))}
          </ul>
        </div>
        <div className="resume-col">
          <h4 className="text-white font-semibold mb-2">{lang === "fr" ? "Compétences clés" : "Key Skills"}</h4>
          <ul className="space-y-1">
            {data.competences.specialisations.map((s, i) => (
              <li key={i} className="text-white/60 text-sm">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  const { lang } = useLang();
  const containerRef = useScrollReveal({ fromY: 30, duration: 1, once: true, start: "top 85%" });

  useEffect(() => {
    const triggers: any[] = [];
    // Animate each experience row with stagger
    triggers.push(initStaggerChildrenOnView(".resume-table", ".resume-row", { fromY: 24, duration: 0.6, stagger: 0.12 }));
    // Animate bottom grid items
    triggers.push(initStaggerChildrenOnView(".resume-bottom", ".resume-col", { fromY: 18, duration: 0.55, stagger: 0.1 }));
    // Animate download buttons
    triggers.push(initStaggerChildrenOnView(".resume-btns", "a", { fromY: 16, duration: 0.5, stagger: 0.1 }));

    return () => {
      triggers.forEach((t) => { try { (t as any)?.kill?.(); } catch {} });
    };
  }, []);

  return (
    <>
      <Header useMotion={true} p={lang === "fr" ? "Résumé" : "Resume"} h2={lang === "fr" ? "CV." : "Resume."} />
      <div ref={containerRef as any} className="opacity-0">
        <div className="resume-btns mb-8 flex flex-wrap gap-4">
          <a
            href={resume.pdf.fr}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(90deg, #F518E1 0%, #9F00FE 100%)", boxShadow: "0 0 20px rgba(245,24,225,0.3)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger PDF (FR)
          </a>
          <a
            href={resume.pdf.en}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#F518E1]/60"
            style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0 0 20px rgba(159,0,254,0.1)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF (EN)
          </a>
        </div>
        <ResumeCompact lang={lang} />

      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
