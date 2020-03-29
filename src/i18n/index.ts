import * as RNLocalize from 'react-native-localize';
import i18nLib from 'i18next';

const resources = {
  en: { translation: require('./en.json') },
  'af-ZA': { translation: require('./languages/af-ZA.json') },
  'ar-SA': { translation: require('./languages/ar-SA.json') },
  'ca-ES': { translation: require('./languages/ca-ES.json') },
  'cs-CZ': { translation: require('./languages/cs-CZ.json') },
  'da-DK': { translation: require('./languages/da-DK.json') },
  'de-DE': { translation: require('./languages/de-DE.json') },
  'el-GR': { translation: require('./languages/el-GR.json') },
  'es-ES': { translation: require('./languages/es-ES.json') },
  'et-EE': { translation: require('./languages/et-EE.json') },
  'fa-IR': { translation: require('./languages/fa-IR.json') },
  'fi-FI': { translation: require('./languages/fi-FI.json') },
  'fr-FR': { translation: require('./languages/fr-FR.json') },
  'he-IL': { translation: require('./languages/he-IL.json') },
  'hi-IN': { translation: require('./languages/hi-IN.json') },
  'hu-HU': { translation: require('./languages/hu-HU.json') },
  'it-IT': { translation: require('./languages/it-IT.json') },
  'ja-JP': { translation: require('./languages/ja-JP.json') },
  'ko-KR': { translation: require('./languages/ko-KR.json') },
  'ms-MY': { translation: require('./languages/ms-MY.json') },
  'nl-NL': { translation: require('./languages/nl-NL.json') },
  'no-NO': { translation: require('./languages/no-NO.json') },
  'pl-PL': { translation: require('./languages/pl-PL.json') },
  'pt-PT': { translation: require('./languages/pt-PT.json') },
  'ro-RO': { translation: require('./languages/ro-RO.json') },
  'ru-RU': { translation: require('./languages/ru-RU.json') },
  'sr-SP': { translation: require('./languages/sr-SP.json') },
  'sv-SE': { translation: require('./languages/sv-SE.json') },
  'tr-TR': { translation: require('./languages/tr-TR.json') },
  'uk-UA': { translation: require('./languages/uk-UA.json') },
  'vi-VN': { translation: require('./languages/vi-VN.json') },
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
