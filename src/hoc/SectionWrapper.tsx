import React from "react";
import { styles } from "../constants/styles";
import { useScrollReveal } from "../utils/gsapHelpers";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    const ref = useScrollReveal({ fromY: 20, once: true, start: "top 80%" });

    return (
      <section
        ref={ref as any}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl opacity-0`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
