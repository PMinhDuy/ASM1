import LanguageDetector from 'i18next-browser-languagedetector';
import enLocale from './../../configs/locales/enTranslate.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viLocate from './../../configs/locales/viTranslate.json';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    resources: {
      en: {
        translation: enLocale,
      },
      vi: {
        translation: viLocate,
      },
    },
    lng: 'en',
  });

export default i18n;
