import { observable } from 'mobx';
import { RootStore } from './root-store';

export class UserStore {
  public rootStore: RootStore;

  @observable
  public test = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
