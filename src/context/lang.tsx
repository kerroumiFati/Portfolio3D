import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "fr" | "en";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    return (saved as Lang) || "fr";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("lang", lang);
      document.documentElement.setAttribute("lang", lang);
    } catch {}
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, toggle: () => setLang((p) => (p === "fr" ? "en" : "fr")) }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
