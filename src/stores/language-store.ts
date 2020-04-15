import { RootStore } from './root-store';
import * as RNLocalize from 'react-native-localize';
import moment from 'moment';
import { languages, i18n } from '@i18n/index';
import { autorun, observable } from 'mobx';

export class LanguageStore {
  @observable
  public language: string;

  constructor(private rootStore: RootStore) {
    this.language = RNLocalize.findBestAvailableLanguage(languages).languageTag;

    this.setLanguage();

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

  public setLanguage(lang?: string) {
    if (lang) {
      this.language = lang;
    }
    i18n.changeLanguage(this.language);
    // NORWAY is nb with moment
    moment.locale(
      this.language.indexOf('ur-') === 0
        ? 'ur'
        : this.language === 'no'
        ? 'nb'
        : this.language
    );
  }
}
