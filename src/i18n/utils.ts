import { ui } from './ui';
const defaultLang = 'en';

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
      return ui[lang][key] || ui[defaultLang][key];
    }
  }