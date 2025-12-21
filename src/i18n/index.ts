import { en } from './en';
import { es } from './es';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const translations = { en, es } as const;

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return 'en';
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    return l === 'en' ? path : `/${l}${path}`;
  };
}
