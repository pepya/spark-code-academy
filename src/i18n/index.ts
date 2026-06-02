import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en";
import bg from "./bg";
import es from "./es";
import lessonsEn from "./lessons-en";
import lessonsBg from "./lessons-bg";
import lessonsEs from "./lessons-es";
import flashcardsEn from "./flashcards-en";
import flashcardsBg from "./flashcards-bg";
import flashcardsEs from "./flashcards-es";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { ...en, lessonPage: lessonsEn, flashcardsPage: flashcardsEn } },
      bg: { translation: { ...bg, lessonPage: lessonsBg, flashcardsPage: flashcardsBg } },
      es: { translation: { ...es, lessonPage: lessonsEs, flashcardsPage: flashcardsEs } },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
