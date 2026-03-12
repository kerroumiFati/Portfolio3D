import Tilt from "react-parallax-tilt";
import React, { useEffect } from "react";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects, projectsFr } from "../../constants";
import { useScrollReveal, initDraggableRow } from "../../utils/gsapHelpers";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useLang } from "../../context/lang";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <div>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#c94d4d"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[18px] font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const { lang } = useLang();
  useEffect(() => {
    // Initialize draggable projects row
    const drag = initDraggableRow('.projects-viewport', '.projects-track');
    const auto = import('../../utils/gsapHelpers').then(m => m.initAutoScrollRow('.projects-viewport', '.projects-track', 40));
    return () => {
      try { (drag as any)?.kill?.(); } catch {}
      auto.then((tl) => { try { (tl as any)?.kill?.(); } catch {}});
    };
  }, []);
  // Duplicate project cards (each project appears twice)
  const activeProjects = lang === "fr" ? projectsFr : projects;
  const duplicated: TProject[] = [...activeProjects, ...activeProjects];
  return (
    <>
      <Header
        useMotion={true}
        {...(lang === "fr" && config.translations?.fr
          ? config.translations.fr.sections.works
          : config.sections.works)}
      />

      <div className="flex w-full">
        <p
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px] opacity-0"
          ref={useScrollReveal({ fromY: 20, duration: 0.8, once: true, start: "top 90%" }) as any}
        >
          {config.sections.works.content}
        </p>
      </div>

      <div className="mt-20">
        <div className="relative">
          <button aria-label="Scroll left" className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20" onClick={() => import('../../utils/gsapHelpers').then(m => m.scrollRowBy('.projects-track',  -300))}>
            ‹
          </button>
          <button aria-label="Scroll right" className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20" onClick={() => import('../../utils/gsapHelpers').then(m => m.scrollRowBy('.projects-track', 300))}>
            ›
          </button>
          <div className="projects-viewport overflow-hidden px-10">
            <div className="projects-track flex gap-7 will-change-transform">
              {duplicated.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
