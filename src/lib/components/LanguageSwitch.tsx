import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";
import React from "react";

const languages = ["ko", "en"];

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  return (
    <div
      id="desktop-lang-toggle"
      className="hidden md:flex items-center bg-aden-dark/40 border border-white/[0.06] rounded-[26px] p-2 cursor-pointer"
    >
      {languages.map((lang) => {
        return (
          <a
            key={lang}
            href={
              lang === "en" ? "/aden-landing/v1" : `/aden-landing/${lang}/v1`
            }
            type="button"
            className={cn(
              "px-4 py-2 rounded-[18px] font-play text-sm font-bold transition-all uppercase text-aden-text-muted",
              i18n.language === lang && "bg-aden-primary text-white",
            )}
          >
            {lang}
          </a>
        );
      })}
    </div>
  );
}
