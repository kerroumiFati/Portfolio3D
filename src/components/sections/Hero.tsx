import { useEffect } from "react";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import avatarPC from "../../assets/avatarPC.png";
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

          {/* Avatar générique */}
          <div className="hidden md:flex items-center justify-center flex-1 mt-[160px]">
            <div className="relative">
              {/* Cercles d'orbite animés */}
              <div className="absolute inset-0 rounded-full border-2 border-[#C71585]/30 animate-[spin_8s_linear_infinite]"
                style={{ width: "420px", height: "420px", top: "-60px", left: "-60px" }} />
              <div className="absolute inset-0 rounded-full border border-[#C71585]/20 animate-[spin_12s_linear_infinite_reverse]"
                style={{ width: "480px", height: "480px", top: "-90px", left: "-90px" }} />
              {/* Avatar cercle principal */}
              <div className="relative flex items-center justify-center w-[300px] h-[300px] rounded-full
                bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]
                border-4 border-[#C71585]/60
                shadow-[0_0_40px_rgba(199,21,133,0.4),inset_0_0_40px_rgba(199,21,133,0.05)]">
                <img
                  src={avatarPC}
                  alt="avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Point lumineux en haut */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C71585] shadow-[0_0_12px_rgba(199,21,133,0.9)] animate-pulse" />
              {/* GIF en dessous de l'avatar */}
             
            </div>
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
