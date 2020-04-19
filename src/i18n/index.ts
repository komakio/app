import i18nLib from 'i18next';

import 'moment/locale/af';
import 'moment/locale/ar';
import 'moment/locale/bg';
import 'moment/locale/ca';
import 'moment/locale/cs';
import 'moment/locale/da';
import 'moment/locale/de';
import 'moment/locale/el';
import 'moment/locale/es';
import 'moment/locale/et';
import 'moment/locale/fa';
import 'moment/locale/fi';
import 'moment/locale/fr';
import 'moment/locale/he';
import 'moment/locale/hi';
import 'moment/locale/hu';
import 'moment/locale/it';
import 'moment/locale/ja';
import 'moment/locale/ko';
import 'moment/locale/ms';
import 'moment/locale/nl';
import 'moment/locale/pl';
import 'moment/locale/pt';
import 'moment/locale/pt-br';
import 'moment/locale/ro';
import 'moment/locale/ru';
import 'moment/locale/sr';
import 'moment/locale/sv';
import 'moment/locale/tr';
import 'moment/locale/uk';
import 'moment/locale/ur';
import 'moment/locale/vi';
import 'moment/locale/zh-cn';
import 'moment/locale/zh-tw';

import 'moment/locale/nb';

interface Resources {
  [lang: string]: { translation: object; label: string };
}

// https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
const resources: Resources = {
  en: { translation: require('./en.json'), label: 'English' },
  af: { translation: require('./languages/af-ZA.json'), label: 'Afrikaans' },
  ar: { translation: require('./languages/ar-SA.json'), label: 'العربية' },
  bg: {
    translation: require('./languages/bg-BG.json'),
    label: 'Български',
  },
  ca: { translation: require('./languages/ca-ES.json'), label: 'Català' },
  cs: { translation: require('./languages/cs-CZ.json'), label: 'Česky' },
  da: { translation: require('./languages/da-DK.json'), label: 'Dansk' },
  de: { translation: require('./languages/de-DE.json'), label: 'Deutsch' },
  el: { translation: require('./languages/el-GR.json'), label: 'Ελληνικά' },
  es: { translation: require('./languages/es-ES.json'), label: 'Español' },
  et: { translation: require('./languages/et-EE.json'), label: 'Eesti' },
  fa: { translation: require('./languages/fa-IR.json'), label: 'فارسی' },
  fi: { translation: require('./languages/fi-FI.json'), label: 'Suomi' },
  fr: { translation: require('./languages/fr-FR.json'), label: 'Français' },
  he: { translation: require('./languages/he-IL.json'), label: 'עברית' },
  hi: { translation: require('./languages/hi-IN.json'), label: 'हिन्दी' },
  hu: { translation: require('./languages/hu-HU.json'), label: 'Magyar' },
  it: { translation: require('./languages/it-IT.json'), label: 'Italiano' },
  ja: { translation: require('./languages/ja-JP.json'), label: '日本語' },
  ko: { translation: require('./languages/ko-KR.json'), label: '한국어' },
  ms: {
    translation: require('./languages/ms-MY.json'),
    label: 'Bahasa Melayu',
  },
  nl: { translation: require('./languages/nl-NL.json'), label: 'Nederlands' },
  no: { translation: require('./languages/no-NO.json'), label: 'Norsk' },
  pl: { translation: require('./languages/pl-PL.json'), label: 'Polski' },
  pt: { translation: require('./languages/pt-PT.json'), label: 'Português' },
  'pt-BR': {
    translation: require('./languages/pt-BR.json'),
    label: 'Português (Brasil)',
  },
  ro: { translation: require('./languages/ro-RO.json'), label: 'Română' },
  ru: { translation: require('./languages/ru-RU.json'), label: 'Русский' },
  sr: { translation: require('./languages/sr-SP.json'), label: 'Српски' },
  sv: { translation: require('./languages/sv-SE.json'), label: 'Svenska' },
  tr: { translation: require('./languages/tr-TR.json'), label: 'Türkçe' },
  uk: { translation: require('./languages/uk-UA.json'), label: 'Українська' },
  // 'ur-PK': { translation: require('./languages/ur-PK.json'), label: '' },
  ur: { translation: require('./languages/ur-IN.json'), label: 'اردو' },
  vi: { translation: require('./languages/vi-VN.json'), label: 'Việtnam' },
  'zh-CN': { translation: require('./languages/zh-CN.json'), label: '中文' },
  'zh-TW': {
    translation: require('./languages/zh-TW.json'),
    label: '粵語',
  },
};
export const languages = Object.keys(resources).map((l) => ({
  key: l,
  label: resources[l].label,
}));

i18nLib.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: resources,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export const i18n = i18nLib;
