import React from "react";
import Tilt from "react-parallax-tilt";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useLang } from "../../context/lang";
import { useScrollReveal } from "../../utils/gsapHelpers";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => {
  const cardRef = useScrollReveal({ fromY: 40, duration: 0.75, delay: index * 0.15, ease: "power3.out", once: true, start: "top 90%" });
  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      glareColor="#c94d4d"
    >
      <div className="max-w-[250px] w-full xs:w-[250px]">
        <div
          ref={cardRef as any}
          data-cursor-hover
          className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px] opacity-0 transition-transform duration-200 will-change-transform hover:scale-[1.02]"
        >
          <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
            <img
              src={icon}
              alt="web-development"
              className="h-16 w-16 object-contain"
            />

            <h3 className="text-center text-[20px] font-bold text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const { lang } = useLang();
  const serviceTitleFr: Record<string, string> = {
    "Web Developer": " ERP",
    "React Native Developer": " Mobile",
    "Backend Developer": " Logiciel",
    "Content Creator": "Web",
  };
  const aboutTexts =
    lang === "fr" && config.translations?.fr
      ? config.translations.fr.sections.about
      : config.sections.about;
  return (
    <>
      <Header useMotion={true} {...aboutTexts} />

      <p
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px] opacity-0"
        ref={useScrollReveal({ fromY: 24, duration: 0.9, once: true, start: "top 90%" }) as any}
      >
        {aboutTexts.content}
      </p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            title={lang === "fr" ? serviceTitleFr[service.title] || service.title : service.title}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
