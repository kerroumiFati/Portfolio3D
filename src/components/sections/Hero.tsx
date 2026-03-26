import { useEffect } from "react";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

import { useLoopYoyo, initScrollWormTimeline, initPinnedWindmillTimeline, initDataSpeedParallax, initTypePhrases } from "../../utils/gsapHelpers";

const Hero = () => {
  const dotRef = useLoopYoyo(24, 1.5);

  useEffect(() => {
    const tl1 = initScrollWormTimeline();
    const tl2 = initPinnedWindmillTimeline();
    const cleanupParallax = initDataSpeedParallax();
    // tlName skipped: gradient incompatible with letter-split animation

    const phrases = [
      'Full‑stack developer',
      'ERP',
      'Logiciels',
      'Sites web',
      'Portfolio',
    ];
    const phrasesFr = [
      'Développeur Full‑stack',
      'ERP',
      'Logiciels',
      'Sites web',
      'Portfolio',
    ];
    const currentPhrases = document.documentElement.lang === 'fr' ? phrasesFr : phrases;
    const tlRoles = initTypePhrases('#hero-roles', currentPhrases, { interval: 2.0, typeSpeed: 0.6 });

    return () => {
      try { tl1?.kill?.(); } catch {}
      try { tl2?.kill?.(); } catch {}
      try { cleanupParallax?.(); } catch {}
      try { (tlRoles as any)?.kill?.(); } catch {}
    };
  }, []);

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="scroll-trigger-ready__worm-wrap mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#C71585] shadow-[0_0_20px_rgba(199,21,133,0.6)] animate-pulse" />
          <div className="violet-gradient h-40 w-1 sm:h-80" data-speed="1.2" />
        </div>

        <div className="flex flex-1 flex-row items-start justify-between">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span id="hero-name" className="titre-degrade whitespace-nowrap">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {(config.translations?.fr && document.documentElement.lang === "fr"
                ? config.translations.fr.hero.p[0]
                : config.hero.p[0])}
              <br className="hidden sm:block" />
              {(config.translations?.fr && document.documentElement.lang === "fr"
                ? config.translations.fr.hero.p[1]
                : config.hero.p[1])}
            </p>
            <p className={`${styles.heroSubText} text-white-100 mt-1`}>
              <span id="hero-roles" className="titre-degrade"></span>
            </p>
          </div>

        </div>
      </div>

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <div ref={dotRef as any} className="bg-secondary mb-1 h-3 w-3 rounded-full" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
