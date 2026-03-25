import { useEffect } from "react";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { useLang } from "../../context/lang";
import { initStaggerChildrenOnView } from "../../utils/gsapHelpers";

const STEPS = {
  fr: [
    {
      title: "Comprendre",
      desc: "Analyser le besoin métier et identifier les contraintes techniques et fonctionnelles.",
    },
    {
      title: "Concevoir",
      desc: "Proposer une maquette simple — structure des écrans et flux utilisateur.",
    },
    {
      title: "Développer",
      desc: "Coder en petites itérations avec des retours fréquents pour rester aligné.",
    },
    {
      title: "Valider",
      desc: "Tester sur des cas réels et documenter le fonctionnement pour la maintenabilité.",
    },
  ],
  en: [
    {
      title: "Understand",
      desc: "Analyse the business need and identify technical and functional constraints.",
    },
    {
      title: "Design",
      desc: "Propose a simple mockup — screen structure and user flow.",
    },
    {
      title: "Develop",
      desc: "Code in small iterations with frequent feedback to stay aligned.",
    },
    {
      title: "Validate",
      desc: "Test on real cases and document the process for maintainability.",
    },
  ],
};

const WorkProcess = () => {
  const { lang } = useLang();
  const steps = STEPS[lang];

  useEffect(() => {
    const trigger = initStaggerChildrenOnView(".wp-grid", ".wp-step", {
      fromY: 28,
      duration: 0.6,
      stagger: 0.15,
    });
    return () => { try { (trigger as any)?.kill?.(); } catch {} };
  }, []);

  return (
    <>
      <Header
        useMotion={true}
        p={lang === "fr" ? "Processus de travail" : "Work Process"}
        h2={lang === "fr" ? "Ma façon de travailler." : "How I Work."}
      />

      <div className="wp-grid mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="wp-step opacity-0 flex gap-5 rounded-2xl border border-white/10 bg-[#0d0d1a] p-6 transition-all duration-300 hover:border-[#F518E1]/40 hover:shadow-[0_0_24px_rgba(245,24,225,0.15)]"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #F518E1 0%, #9F00FE 100%)" }}
            >
              {i + 1}
            </span>

            <div>
              <h4 className="mb-1 text-[17px] font-semibold text-white">{step.title}</h4>
              <p className="text-secondary text-[14px] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorkProcess, "process");
