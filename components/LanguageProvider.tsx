"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language;
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-[#E9E3DA] bg-white/70 p-1 backdrop-blur-sm shadow-sm hover:border-[#111111]/30 transition-all z-50">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 text-[10px] font-black uppercase rounded-full transition-all cursor-pointer ${
          language === "en"
            ? "bg-[#111111] text-white shadow-sm"
            : "text-[#6A6A6A] hover:text-[#111111]"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        className={`px-2.5 py-1 text-[10px] font-black uppercase rounded-full transition-all cursor-pointer ${
          language === "fr"
            ? "bg-[#111111] text-white shadow-sm"
            : "text-[#6A6A6A] hover:text-[#111111]"
        }`}
      >
        FR
      </button>
    </div>
  );
}
