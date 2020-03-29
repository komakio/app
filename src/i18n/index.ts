import * as RNLocalize from 'react-native-localize';
import i18nLib from 'i18next';

const resources = {
  en: { translation: require('./en.json') },
  af: { translation: require('./languages/af.json') },
  ar: { translation: require('./languages/ar.json') },
  ca: { translation: require('./languages/ca.json') },
  cs: { translation: require('./languages/cs.json') },
  da: { translation: require('./languages/da.json') },
  de: { translation: require('./languages/de.json') },
  el: { translation: require('./languages/el.json') },
  es: { translation: require('./languages/es.json') },
  fi: { translation: require('./languages/fi.json') },
  fr: { translation: require('./languages/fr.json') },
  he: { translation: require('./languages/he.json') },
  hu: { translation: require('./languages/hu.json') },
  it: { translation: require('./languages/it.json') },
  ja: { translation: require('./languages/ja.json') },
  ko: { translation: require('./languages/ko.json') },
  nl: { translation: require('./languages/nl.json') },
  no: { translation: require('./languages/no.json') },
  pl: { translation: require('./languages/pl.json') },
  pt: { translation: require('./languages/pt.json') },
  ro: { translation: require('./languages/ro.json') },
  ru: { translation: require('./languages/ru.json') },
  sr: { translation: require('./languages/sr.json') },
  sv: { translation: require('./languages/sv.json') },
  tr: { translation: require('./languages/tr.json') },
  uk: { translation: require('./languages/uk.json') },
  vi: { translation: require('./languages/vi.json') },
  zh: { translation: require('./languages/zh.json') },
};
const languages = Object.keys(resources);

i18nLib.init({
  lng: RNLocalize.findBestAvailableLanguage(languages).languageTag,
  fallbackLng: 'en',
  resources: resources,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export const i18n = i18nLib;
