import { observable } from 'mobx';
import { RootStore } from './root-store';
import { ProfilesApi } from '../api/profile';

export class ProfileFlowStore {
  public rootStore: RootStore;

  @observable
  public role: 'helper' | 'needer';

  @observable
  public firstName = '';

  @observable
  public lastName = '';

  @observable
  public phone = '';

  @observable
  public dialCode = '-';

  @observable
  public address = '';

  @observable
  public terms = false;

  @observable
  public coords: [number, number];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  public async saveProfile() {
    try {
      const res = await ProfilesApi.createProfile(
        this.rootStore.userStore.accessToken.token,
        {
          firstName: this.firstName,
          lastName: this.lastName,
          role: this.role,
          self: true,
          phone: {
            number: this.phone,
          },
          address: {
            raw: this.address,
            location: {
              type: 'Point',
              coordinates: this.coords,
            },
          },
        }
      );
      this.rootStore.userStore.profiles.push(res);
      return res;
    } catch (e) {
      console.log(e.response);
      return false;
    }
  }

  public isValid() {
    if (
      !this.role ||
      !this.firstName ||
      !this.lastName ||
      !this.phone ||
      !this.dialCode ||
      !this.coords ||
      !this.terms ||
      (this.role === 'needer' && !this.address)
    ) {
      return false;
    }

    return true;
  }

  public reset() {
    this.role = null;
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.dialCode = '-';
    this.address = '';
    this.terms = false;
    this.coords = null;
  }
}
