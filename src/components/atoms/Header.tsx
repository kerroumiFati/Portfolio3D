import React, { useEffect, useRef } from "react";
import { styles } from "../../constants/styles";
import { useScrollReveal } from "../../utils/gsapHelpers";

interface IHeader {
  useMotion: boolean; // kept for backward compatibility
  p: string;
  h2: string;
}

export const Header: React.FC<IHeader> = ({ useMotion, p, h2 }) => {
  const containerRef = useScrollReveal({ fromY: 30, duration: 1, once: true, start: "top 85%" });
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Optional Tonemaki via global (CDN). If absent, we just skip.
    let cleanup: (() => void) | null = null;
    try {
      const w = window as any;
      const tm = w?.tonemaki || w?.Tonemaki || null;
      if (tm && headingRef.current) {
        const el = headingRef.current;
        const instance = tm.create(el, { mode: "letters" });
        instance.show({ stagger: 0.03, duration: 800, easing: "ease-out" });
        cleanup = () => instance?.destroy?.();
      }
    } catch {}
    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div ref={containerRef as any} className="opacity-0">
      <p className={styles.sectionSubText}>{p}</p>
      <h2 ref={headingRef} className={styles.sectionHeadText}>{h2}</h2>
    </div>
  );
};
