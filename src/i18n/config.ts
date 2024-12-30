import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { hi } from './locales/hi';
import { ta } from './locales/ta';
import { te } from './locales/te';
import { bn } from './locales/bn';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
      hi: { translation: hi },
      ta: { translation: ta },
      te: { translation: te },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
