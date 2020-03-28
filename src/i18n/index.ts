import * as RNLocalize from 'react-native-localize';
import i18nLib from 'i18next';
import { Alert } from 'react-native';

const languages = ['en', 'fr'];

i18nLib.init({
  lng: RNLocalize.findBestAvailableLanguage(languages).languageTag,
  fallbackLng: 'en',

  resources: {
    en: { translation: require('./en.json') },
    fr: { translation: require('./fr.json') },
  },

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },

  // missingKeyHandler: (lngs, ns, key) => {
  //   console.error('Missing translation', lngs.toString(), key);
  // },
});
export const i18n = i18nLib;
