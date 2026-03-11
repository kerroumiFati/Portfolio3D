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
    <div className="resume-section mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <h3 className="tm-reveal hover-title text-white text-xl font-bold mb-2">Profil</h3>
        <p className="text-secondary leading-7">{data.profil}</p>
      </div>

      <div>
        <h3 className="tm-reveal hover-title text-white text-xl font-bold mb-2">Compétences</h3>
        <ul className="list-disc list-inside text-secondary space-y-1">
          {data.competences.developpement.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h4 className="text-white font-semibold mt-3">Spécialisations</h4>
        <ul className="list-disc list-inside text-secondary space-y-1">
          {data.competences.specialisations.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="tm-reveal hover-title text-white text-xl font-bold mb-2">Expériences</h3>
        <ul className="space-y-2 text-secondary">
          {data.experiences.map((exp, i) => (
            <li key={i}>
              <p className="text-white font-semibold">{exp.titre}{exp.periode ? ` — ${exp.periode}` : ""}</p>
              <ul className="list-disc list-inside">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="tm-reveal hover-title text-white text-xl font-bold mb-2">Autres</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-white font-semibold">Formation</h4>
            <ul className="list-disc list-inside text-secondary">
              {data.formation.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Langues</h4>
            <ul className="list-disc list-inside text-secondary">
              {data.langues.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Qualités</h4>
            <ul className="list-disc list-inside text-secondary">
              {data.qualites.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Centres d'intérêt</h4>
            <ul className="list-disc list-inside text-secondary">
              {data.interets.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  const { lang } = useLang();
  const containerRef = useScrollReveal({ fromY: 30, duration: 1, once: true, start: "top 85%" });

  useEffect(() => {
    // Animate each section title like Tonemaki when it comes into view
    const triggers: any[] = [];
    initLettersRevealOnViewAll(".resume-section h3.tm-reveal", { stagger: 0.025, fromY: 32, duration: 0.9 });

    // Stagger in lists and grid items
    triggers.push(initStaggerChildrenOnView(".resume-section", "ul li", { fromY: 14, duration: 0.5, stagger: 0.04 }));
    triggers.push(initStaggerChildrenOnView(".resume-section .grid", ".grid > div", { fromY: 18, duration: 0.55, stagger: 0.05 }));
    // Animate the download buttons
    triggers.push(initStaggerChildrenOnView(".mb-6.flex.gap-3", "a", { fromY: 16, duration: 0.5, stagger: 0.1 }));

    return () => {
      triggers.forEach((t) => {
        try { (t as any)?.kill?.(); } catch {}
      });
    };
  }, []);

  return (
    <>
      <Header useMotion={true} p={lang === "fr" ? "Résumé" : "Resume"} h2={lang === "fr" ? "CV." : "Resume."} />
      <div ref={containerRef as any} className="opacity-0">
        <div className="mb-6 flex gap-3">
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
