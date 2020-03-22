import { observable } from 'mobx';
import { RootStore } from './root-store';

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
  public dialCode = 'd';

  @observable
  public address = '';

  @observable
  public coords: [number, number];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  public isValid() {
    if (
      !this.role ||
      !this.firstName ||
      !this.lastName ||
      !this.phone ||
      !this.dialCode ||
      !this.coords ||
      (this.role === 'needer' && !this.address)
    ) {
      return false;
    }

    return true;
  }
}
