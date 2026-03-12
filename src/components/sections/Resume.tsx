import React, { useEffect } from "react";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { resume } from "../../constants/cv";
import { useLang } from "../../context/lang";
import { useScrollReveal, initLettersRevealOnViewAll, initStaggerChildrenOnView, initLettersReveal } from "../../utils/gsapHelpers";

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
  const nameRef = useScrollReveal({ fromY: 40, duration: 1.1, once: true, start: "top 90%" });

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
      <h1
        ref={nameRef as any}
        className="opacity-0 text-[48px] sm:text-[64px] font-black mt-2 mb-6"
        style={{
          background: "linear-gradient(90deg, #F518E1 0%, #9F00FE 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",
        }}
      >
        KERROUMI fatima zohra
      </h1>
      <div ref={containerRef as any} className="opacity-0">
        <div className="resume-btns mb-6 flex gap-3">
          <a
            href={resume.pdf.fr}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary text-white px-4 py-2 rounded hover:opacity-90"
          >
            Télécharger PDF (FR)
          </a>
          <a
            href={resume.pdf.en}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary text-white px-4 py-2 rounded hover:opacity-90"
          >
            Download PDF (EN)
          </a>
        </div>
        <ResumeCompact lang={lang} />

      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
