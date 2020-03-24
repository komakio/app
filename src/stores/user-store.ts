import { RootStore } from './root-store';
import { UsersApi } from '../api/user';
import { Storage } from '../utils/storage';
import { observable } from 'mobx';

export class UserStore {
  public rootStore: RootStore;

  public accessToken: { token: string; expiration: number };

  @observable
  public user: string;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    this.init();
  }

  public async socialSignup(type: 'google' | 'apple') {
    if (type === 'apple') {
      const user = await this.rootStore.socialLoginStore.appleLogin();
      if (!user) {
        return false;
      }
    }
    if (type === 'google') {
      const user = await this.rootStore.socialLoginStore.googleLogin();
      if (!user) {
        return false;
      }
    }
    this.user = 'Success';
    await Storage.setJson('accessToken', {
      token: 'yo',
      expiration: 1000000000,
    });

    return true;
  }

  public async logout() {
    this.accessToken = null;
    await Storage.remove('accessToken');
  }

  public isLoggedIn() {
    return !!this.accessToken;
  }

  private async init() {
    this.accessToken = await Storage.getJson('accessToken');
  }
}
