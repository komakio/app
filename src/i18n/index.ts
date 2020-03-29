import * as RNLocalize from 'react-native-localize';
import i18nLib from 'i18next';
import { Alert } from 'react-native';

const resources = {
  en: { translation: require('./en.json') },
  af: { translation: require('./languages/af-ZA.json') },
  ar: { translation: require('./languages/ar-SA.json') },
  ca: { translation: require('./languages/ca-ES.json') },
  cs: { translation: require('./languages/cs-CZ.json') },
  da: { translation: require('./languages/da-DK.json') },
  de: { translation: require('./languages/de-DE.json') },
  el: { translation: require('./languages/el-GR.json') },
  es: { translation: require('./languages/es-ES.json') },
  et: { translation: require('./languages/et-EE.json') },
  fa: { translation: require('./languages/fa-IR.json') },
  fi: { translation: require('./languages/fi-FI.json') },
  fr: { translation: require('./languages/fr-FR.json') },
  he: { translation: require('./languages/he-IL.json') },
  hi: { translation: require('./languages/hi-IN.json') },
  hu: { translation: require('./languages/hu-HU.json') },
  it: { translation: require('./languages/it-IT.json') },
  ja: { translation: require('./languages/ja-JP.json') },
  ko: { translation: require('./languages/ko-KR.json') },
  ms: { translation: require('./languages/ms-MY.json') },
  nl: { translation: require('./languages/nl-NL.json') },
  no: { translation: require('./languages/no-NO.json') },
  pl: { translation: require('./languages/pl-PL.json') },
  pt: { translation: require('./languages/pt-PT.json') },
  ro: { translation: require('./languages/ro-RO.json') },
  ru: { translation: require('./languages/ru-RU.json') },
  sr: { translation: require('./languages/sr-SP.json') },
  sv: { translation: require('./languages/sv-SE.json') },
  tr: { translation: require('./languages/tr-TR.json') },
  uk: { translation: require('./languages/uk-UA.json') },
  vi: { translation: require('./languages/vi-VN.json') },
  'zh-CN': { translation: require('./languages/zh-CN.json') },
  'zh-TW': { translation: require('./languages/zh-TW.json') },
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
