import { languages } from 'monaco-editor';

const langs = languages.getLanguages();

export const getLanguageId = (language: string) => {
  return langs.find((lang) => lang.aliases?.includes(language.split('/')[0]))?.id ?? null;
};
