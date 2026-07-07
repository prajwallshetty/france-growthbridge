"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { translations } from "../translations";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

export function LanguageProvider({ children, defaultLanguage = "en" }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const router = useRouter();

  // Load saved preference from localStorage/cookie
  useEffect(() => {
    const saved = localStorage.getItem("gb_locale") as Language;
    if (saved === "en" || saved === "fr") {
      if (saved !== language) {
        setLanguageState(saved);
      }
      // Ensure cookie matches
      document.cookie = `gb_locale=${saved}; path=/; max-age=31536000; SameSite=Lax`;
    } else {
      // Default to English as requested
      if (language !== "en") {
        setLanguageState("en");
      }
      document.cookie = `gb_locale=en; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.cookie = `gb_locale=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    localStorage.setItem("gb_locale", lang);
    router.refresh(); // Refresh Server Components dynamically
  };

  // Helper to retrieve dot notation paths in translations object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (path: string): any => {
    const keys = path.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = translations[language];

    for (const key of keys) {
      if (current === undefined || current === null) {
        // Fallback to English if key doesn't exist in current language
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let enFallback: any = translations["en"];
        for (const fallbackKey of keys) {
          if (enFallback === undefined || enFallback === null) return path;
          enFallback = enFallback[fallbackKey];
        }
        return enFallback !== undefined ? enFallback : path;
      }
      current = current[key];
    }

    return current !== undefined ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
