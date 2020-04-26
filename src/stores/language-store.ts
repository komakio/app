import { RootStore } from './root-store';
import * as RNLocalize from 'react-native-localize';
import moment from 'moment';
import { languages, i18n } from '@i18n/index';
import { autorun, observable } from 'mobx';
import { Storage } from '@utils/storage';

export class LanguageStore {
  @observable
  public language: string;

  constructor(private rootStore: RootStore) {
    this.init();

    autorun(() => {
      if (
        this.rootStore.userStore.accessToken?.token &&
        this.rootStore.userStore.user &&
        this.rootStore.userStore.user?.language !== this.language
      ) {
        this.rootStore.userStore.user.language = this.language;
        this.rootStore.userStore.patchUser({ language: this.language });
      }
    });
  }

  public async init() {
    const bestLanguage = RNLocalize.findBestAvailableLanguage(
      languages.map((l) => l.key)
    )?.languageTag;
    const storageLanguage = await Storage.get('lang');

    this.language = storageLanguage || bestLanguage || 'en';

    this.setLanguage();
  }

  public setLanguage = (lang?: string) => {
    if (lang) {
      this.language = lang;
      Storage.set('lang', this.language);
    }
    i18n.changeLanguage(this.language);
    // NORWAY is nb with moment
    moment.locale(
      this.language.indexOf('ur-') === 0
        ? 'ur'
        : this.language === 'no'
        ? 'nb'
        : this.language.toLowerCase()
    );
  };
}
