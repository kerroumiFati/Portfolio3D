import { BrowserRouter } from "react-router-dom";
import serviceHover from "./assets/service-hover.jpg";
import CustomCursor from "./components/layout/CustomCursor";
import BackToTop from "./components/layout/BackToTop";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Resume,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { initScrollSmoother, setupGsapBaseline } from "./utils/gsapHelpers";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
    // Baseline GSAP setup
    setupGsapBaseline();
    // Initialize smooth scrolling if plugin is available (CDN/Club GSAP)
    initScrollSmoother("#smooth-wrapper", "#smooth-content", { smooth: 1.1, effects: true });
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0 cursor-none">
        <CustomCursor />
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat cursor-none">
              <Hero />
            </div>
            <About />
            <Resume />
            <Experience />
            <Tech />
            <div
              className="relative"
              style={{
                backgroundImage: `url(${serviceHover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10">
                <Works />
              </div>
            </div>
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
