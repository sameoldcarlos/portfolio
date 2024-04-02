import { defineStore } from 'pinia';
import { ref } from 'vue';
import Cookies from 'js-cookie';

const supportedLanguages = ['en', 'es', 'pt'];
const defaultLanguage = 'en';
const storedLanguage = Cookies.get('language') || defaultLanguage;

export const useLanguage = defineStore('language', () => {
  const language = ref(storedLanguage);
  const isLanguageSupported = language => supportedLanguages.includes(language);

  function setLanguage(lang) {
    if (isLanguageSupported(lang)) {
      language.value = lang;
      Cookies.set('language', lang);
    }
  }

  return {
    language,
    setLanguage,
  };

});
