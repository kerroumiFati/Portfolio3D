import { useEffect, useRef } from "react";

// Use GSAP from global window (CDN). Avoid mixing with npm imports.
const w: any = (typeof window !== 'undefined' ? window : {}) as any;
const gsap = w.gsap;
const ScrollTrigger = w.ScrollTrigger;
const Draggable = w.Draggable;
const ScrollToPlugin = w.ScrollToPlugin;
const TextPlugin = w.TextPlugin;

// Register plugin (calling multiple times is safe in GSAP)
if (gsap) {
  try {
    gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin, TextPlugin);
  } catch {}
} else {
  console.warn("GSAP CDN not loaded yet - animations will be no-ops until scripts load.");
}

export const setupGsapBaseline = () => {
  // Global defaults for smoother feel
  ScrollTrigger.defaults({ markers: false });
  gsap.ticker.lagSmoothing(500, 33);

  // Respect reduced motion
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: reduce)", () => {
    // Disable ScrollTrigger animations by default
    ScrollTrigger.getAll().forEach((st) => st.disable(false));
  });
};

export type RevealOptions = {
  fromY?: number; // initial translateY
  fromOpacity?: number; // initial opacity
  duration?: number;
  delay?: number;
  ease?: string;
  once?: boolean; // animate only first time
  start?: string; // ScrollTrigger start, e.g., "top 80%"
};

export const useScrollReveal = (options?: RevealOptions) => {
  const elRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const {
      fromY = 40,
      fromOpacity = 0,
      duration = 0.9,
      delay = 0,
      ease = "power3.out",
      once = true,
      start = "top 85%",
    } = options || {};

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: fromY, opacity: fromOpacity },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
            once,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options]);

  return elRef as React.MutableRefObject<HTMLElement | null>;
};

export const useLoopYoyo = (distance = 24, duration = 1.5) => {
  const elRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, { y: distance, repeat: -1, yoyo: true, duration, ease: "power1.inOut" });
    }, el);
    return () => ctx.revert();
  }, [distance, duration]);

  return elRef as React.MutableRefObject<HTMLElement | null>;
};

// Initializes a ScrollTrigger-driven timeline for elements with the provided class
export const initScrollWormTimeline = () => {
  // Create a timeline with the specified ScrollTrigger configuration
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: ".scroll-trigger-ready__worm-wrap",
      start: "top 90%",
      end: "bottom 30%",
    },
  });
  // Example tween: subtle parallax on the violet gradient line
  tl.to(".violet-gradient", { y: -60, ease: "none" }, 0);
  return tl;
};

// Create a pinned windmill timeline per the requested config
export const initPinnedWindmillTimeline = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      pin: true,
      trigger: "#pin-windmill",
      start: "50% 50%",
      endTrigger: "#pin-windmill-wrap",
      end: "bottom 50%",
    },
  });
  tl.to("#pin-windmill-svg", { rotateZ: 900, ease: "none" });
  return tl;
};

// Optional: initialize GSAP ScrollSmoother if available (Club GSAP / CDN only)
export const initScrollSmoother = async (
  wrapperSelector = "#smooth-wrapper",
  contentSelector = "#smooth-content",
  options: Record<string, any> = { smooth: 1, effects: true }
) => {
  try {
    const w = window as any;

    // Avoid mixing CDN gsap and npm gsap which causes _mainInstance.refresh is not a function
    const globalGsap = w?.gsap;
    if (globalGsap && globalGsap !== gsap && globalGsap.version !== gsap.version) {
      console.warn(
        "ScrollSmoother skipped: detected multiple GSAP instances (CDN and npm) with different versions. Use a single source (prefer npm)."
      );
      return null;
    }

    let ScrollSmootherPlugin = w?.ScrollSmoother;

    // If a global plugin exists but gsap versions mismatch, skip to prevent runtime errors
    if (ScrollSmootherPlugin && globalGsap && globalGsap !== gsap) {
      console.warn(
        "ScrollSmoother skipped: plugin is bound to a different GSAP instance."
      );
      return null;
    }

    if (!ScrollSmootherPlugin) {
      // Try dynamic import; works only with Club GSAP local files
      try {
        // @ts-ignore
        const mod = await import(/* @vite-ignore */ "gsap/ScrollSmoother");
        ScrollSmootherPlugin = (mod as any)?.ScrollSmoother;
      } catch {
        // no-op
      }
    }

    if (!ScrollSmootherPlugin) {
      console.warn("GSAP ScrollSmoother not available. Load via Club GSAP or matching CDN core.");
      return null;
    }

    gsap.registerPlugin(ScrollSmootherPlugin);
    const smoother = ScrollSmootherPlugin.create({
      wrapper: wrapperSelector,
      content: contentSelector,
      ...options,
    });
    return smoother;
  } catch (e) {
    console.warn("Failed to initialize ScrollSmoother:", e);
    return null;
  }
};

// Initialize parallax/trailing effects using data-speed attributes
// Usage: <div data-speed="0.8"></div>
// Positive values move opposite to scroll at varying intensities; tweak baseDistance for scale
export const initDataSpeedParallax = (selector = "[data-speed]", baseDistance = 100) => {
  const tweens: gsap.core.Tween[] = [];
  const elements = gsap.utils.toArray<HTMLElement>(selector);
  elements.forEach((el) => {
    const speedRaw = el.getAttribute("data-speed") || "1";
    const speed = parseFloat(speedRaw);
    if (!isFinite(speed)) return;

    // Move element vertically relative to scroll. Higher speed => stronger parallax.
    const distance = (speed - 1) * baseDistance; // speed=1 ~ 0 movement; 0.8 slight down, 2.0 stronger up
    const tween = gsap.to(el, {
      y: distance,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    tweens.push(tween);
  });

  return () => {
    tweens.forEach((t) => {
      try { (t as any)?.scrollTrigger?.kill?.(); (t as any)?.kill?.(); } catch {}
    });
  };
};

// Split text into letter spans and animate them in
export const initLettersReveal = (
  selectorOrEl: string | HTMLElement,
  options: { stagger?: number; fromY?: number; duration?: number; ease?: string } = {}
) => {
  const {
    stagger = 0.03,
    fromY = 30,
    duration = 1.0,
    ease = "power3.out",
  } = options;

  const el = typeof selectorOrEl === 'string' ? document.querySelector<HTMLElement>(selectorOrEl) : (selectorOrEl as HTMLElement);
  if (!el) return null;

  const text = el.textContent || "";
  const letters = Array.from(text);
  const html = letters
    .map((ch, i) => {
      if (ch === " ") return `<span class="letter" style="display:inline-block;width:0.35em;--i:${i}">&nbsp;</span>`;
      return `<span class=\"letter\" style=\"display:inline-block;--i:${i}\">${ch}</span>`;
    })
    .join("");
  el.innerHTML = html;

  const spans = Array.from(el.querySelectorAll<HTMLElement>(".letter"));
  const tl = gsap.timeline();
  tl.fromTo(
    spans,
    { y: fromY, opacity: 0 },
    { y: 0, opacity: 1, duration, ease, stagger }
  );
  return tl;
};

// Reveal letters when element scrolls into view (once)
export const initLettersRevealOnView = (
  selector: string,
  options: { stagger?: number; fromY?: number; duration?: number; ease?: string } = {},
  start = "top 85%"
) => {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return null;
  if ((el as any).__letters_on_view) return null;
  (el as any).__letters_on_view = true;
  const st = ScrollTrigger.create({
    trigger: el,
    start,
    once: true,
    onEnter: () => {
     initLettersReveal(el, options);
    },
  });
  return st;
};

export const initLettersRevealOnViewAll = (
  selector: string,
  options: { stagger?: number; fromY?: number; duration?: number; ease?: string } = {},
  start = "top 85%"
) => {
  const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  const triggers = els.map((el) => {
    if ((el as any).__letters_on_view) return null;
    (el as any).__letters_on_view = true;
    return ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => initLettersReveal(el, options),
    });
  }).filter(Boolean) as ScrollTrigger[];
  return triggers;
};

// Type or scramble through phrases using TextPlugin if available; fallback to fade/slide
export const initTypePhrases = (
  selector: string,
  phrases: string[],
  options: { interval?: number; typeSpeed?: number; ease?: string } = {}
) => {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el || !phrases.length) return null;
  const { interval = 2.0, typeSpeed = 0.5, ease = "power2.out" } = options;

  if (TextPlugin) {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });
    phrases.forEach((txt) => {
      tl.to(el, { duration: typeSpeed, text: txt, ease })
        .to(el, { duration: interval, text: txt })
        .to(el, { duration: 0.25, opacity: 0 })
        .set(el, { text: "" })
        .to(el, { duration: 0.25, opacity: 1 });
    });
    return tl;
  }
  // Fallback
  return initRotatingPhrases(selector, phrases, { interval });
};
export const initRotatingPhrases = (
  selector: string,
  phrases: string[],
  options: { interval?: number; ease?: string; outDistance?: number; inDistance?: number } = {}
) => {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el || !phrases || phrases.length === 0) return null;

  const { interval = 2.2, ease = "power3.out", outDistance = 16, inDistance = 16 } = options;

  let idx = 0;
  const setText = (t: string) => {
    el.textContent = t;
  };

  setText(phrases[0]);
  gsap.set(el, { y: 0, opacity: 1 });

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  tl.to(el, { y: outDistance, opacity: 0, duration: 0.35, ease: "power2.in", delay: interval })
    .add(() => {
      idx = (idx + 1) % phrases.length;
      setText(phrases[idx]);
    })
    .fromTo(el, { y: -inDistance, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease });

  return tl;
};

// Stagger-animate children of a parent when it scrolls into view
export const smoothScrollTo = (target: string | Element, offset = 0, duration = 1) => {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - offset;
  try {
    const smoother = (window as any).ScrollSmoother?.get?.();
    if (smoother) {
      smoother.scrollTo(y, true);
      return;
    }
  } catch {}
  gsap.to(window, { duration, scrollTo: { y, autoKill: true }, ease: "power2.out" });
};

export const initDraggableRow = (viewportSel: string, trackSel: string) => {
  const viewport = document.querySelector<HTMLElement>(viewportSel);
  const track = document.querySelector<HTMLElement>(trackSel);
  if (!viewport || !track) return null;
  const vpWidth = viewport.clientWidth;
  const trackWidth = track.scrollWidth;
  const maxX = 0;
  const minX = Math.min(0, vpWidth - trackWidth);
  // store bounds on dataset for controls
  (track as any)._bounds = { minX, maxX };
  const drag = Draggable.create(track, {
    type: "x",
    bounds: { minX, maxX },
    inertia: false,
    edgeResistance: 0.85,
  });
  return drag[0];
};

export const scrollRowBy = (trackSel: string, delta: number) => {
  const track = document.querySelector<HTMLElement>(trackSel);
  if (!track) return;
  const bounds = (track as any)._bounds || { minX: -Infinity, maxX: 0 };
  const current = gsap.getProperty(track, 'x') as number || 0;
  const target = Math.max(bounds.minX, Math.min(bounds.maxX, current + delta));
  gsap.to(track, { x: target, duration: 0.6, ease: 'power3.out' });
};

export const initAutoScrollRow = (viewportSel: string, trackSel: string, speed = 30) => {
  const viewport = document.querySelector<HTMLElement>(viewportSel);
  const track = document.querySelector<HTMLElement>(trackSel);
  if (!viewport || !track) return null;
  const bounds = (track as any)._bounds || { minX: -1000, maxX: 0 };
  const distance = Math.abs(bounds.minX - bounds.maxX);
  const duration = distance / speed; // px per second
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  tl.to(track, { x: bounds.minX, duration, ease: 'none' })
    .to(track, { x: bounds.maxX, duration, ease: 'none' });
  // pause on hover
  viewport.addEventListener('mouseenter', () => tl.pause());
  viewport.addEventListener('mouseleave', () => tl.resume());
  return tl;
};

export const initStaggerChildrenOnView = (
  parentSelector: string,
  childSelector: string,
  options: { fromY?: number; fromOpacity?: number; duration?: number; ease?: string; stagger?: number } = {},
  start = "top 90%"
) => {
  const {
    fromY = 24,
    fromOpacity = 0,
    duration = 0.6,
    ease = "power2.out",
    stagger = 0.06,
  } = options;
  const parent = document.querySelector<HTMLElement>(parentSelector);
  if (!parent) return null;
  const children = Array.from(parent.querySelectorAll<HTMLElement>(childSelector));
  if (!children.length) return null;

  // Ensure starting state without layout shift
  gsap.set(children, { y: fromY, opacity: fromOpacity });

  const st = ScrollTrigger.create({
    trigger: parent,
    start,
    once: true,
    onEnter: () => {
      gsap.to(children, { y: 0, opacity: 1, duration, ease, stagger });
    },
  });
  return st;
};
