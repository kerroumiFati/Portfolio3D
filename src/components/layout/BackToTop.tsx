import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { smoothScrollTo } from "../../utils/gsapHelpers";

const BackToTop: React.FC = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 400;
      if (show !== visible) setVisible(show);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { autoAlpha: visible ? 1 : 0, y: visible ? 0 : 20, duration: 0.3, ease: "power2.out" });
  }, [visible]);

  return (
    <button
      ref={ref}
      aria-label="Back to top"
      onClick={() => smoothScrollTo(document.body, 0, 0.8)}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-white/90 px-4 py-3 text-sm font-medium text-black shadow-lg hover:bg-white"
      style={{ opacity: 0, transform: "translateY(20px)" }}
    >
      ↑ Top
    </button>
  );
};

export default BackToTop;
