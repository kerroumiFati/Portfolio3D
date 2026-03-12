import React from "react";
import { styles } from "../../constants/styles";
import { useScrollReveal } from "../../utils/gsapHelpers";

interface IHeader {
  useMotion: boolean;
  p: string;
  h2: string;
}

export const Header: React.FC<IHeader> = ({ useMotion, p, h2 }) => {
  const containerRef = useScrollReveal({ fromY: 30, duration: 1, once: true, start: "top 85%" });

  return (
    <div ref={containerRef as any} className="opacity-0">
      <p className={styles.sectionSubText}>{p}</p>
      <h2 className={`${styles.sectionHeadText} titre-degrade`}>{h2}</h2>
    </div>
  );
};
