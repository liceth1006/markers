import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Configuración de i18next
i18n
  .use(HttpApi) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'en', 
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', 
    },
    react: {
      useSuspense: false, 
    },
    ns: ['translation','categories', 'department','color'],  
    defaultNS: 'translation',  
  });

export default i18n;