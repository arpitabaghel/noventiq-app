import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next
i18n
  .use(HttpApi) // Load translations using HTTP backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    supportedLngs: ['en', 'hi'], // Supported languages
    fallbackLng: 'en', // Fallback language
    debug: true, // Enable debug mode (optional)

    interpolation: {
      escapeValue: false, // React already escapes values
    },

   
  });

export default i18n;
