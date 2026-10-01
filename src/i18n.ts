import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Язык по умолчанию
    debug: import.meta.env.DEV, // Включаем отладку только в разработке
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Путь к JSON-файлам
    },
    interpolation: {
      escapeValue: false, // React сам экранирует, поэтому отключаем
    },
  });

export default i18n;
