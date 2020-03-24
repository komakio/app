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

  public async signup(password: string) {
    const data = await UsersApi.loginRegister(password);
    await Storage.setJson('accessToken', {
      token: data.accessToken.accessToken,
      expiration: data.accessToken.expiration,
    });
  }

  public async socialSignup(type: 'google' | 'apple') {
    if (type === 'apple') {
      await this.rootStore.socialLoginStore.appleLogin();
    }
    if (type === 'google') {
      await this.rootStore.socialLoginStore.googleLogin();
    }
    this.user = 'Success';
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
