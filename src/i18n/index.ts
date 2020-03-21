import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';

const languages = ['en', 'fr'];

i18n.init({
  lng: RNLocalize.findBestAvailableLanguage(languages).languageTag,

  resources: {
    en: { translation: require('./en.json') },
    fr: { translation: require('./fr.json') },
  },

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
export default i18n;
