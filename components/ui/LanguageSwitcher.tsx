"use client";

import React from "react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#E9E3DA] bg-white p-1 text-[11px] font-bold shadow-sm">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
          language === "en" ? "bg-[#111111] text-white" : "text-[#6A6A6A] hover:text-[#111111]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
          language === "fr" ? "bg-[#111111] text-white" : "text-[#6A6A6A] hover:text-[#111111]"
        }`}
      >
        FR
      </button>
    </div>
  );
}
