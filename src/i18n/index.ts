import * as RNLocalize from 'react-native-localize';
import i18nLib from 'i18next';
import moment from 'moment';

import 'moment/locale/af';
import 'moment/locale/ar';
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
import 'moment/locale/ro';
import 'moment/locale/ru';
import 'moment/locale/sr';
import 'moment/locale/sv';
import 'moment/locale/tr';
import 'moment/locale/uk';
import 'moment/locale/vi';
import 'moment/locale/zh-cn';
import 'moment/locale/zh-tw';

import 'moment/locale/nb';

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

const language = RNLocalize.findBestAvailableLanguage(languages).languageTag;
// NORWAY is nb with moment
moment.locale(language === 'no' ? 'nb' : language);

i18nLib.init({
  lng: language,
  fallbackLng: 'en',
  resources: resources,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export const i18n = i18nLib;
