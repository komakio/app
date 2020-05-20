import { RootStore } from './root-store';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { observable } from 'mobx';

export class NetworkStore {
  @observable
  public isConnected: boolean;
  @observable
  public type: NetInfoState['type'];

  public resumeCallbacks: any[] = [];

  constructor(private rootStore: RootStore) {
    this.init();
  }

  private async init() {
    const state = await NetInfo.fetch();
    this.handle(state);

    NetInfo.addEventListener(this.handle);
  }

  public async checkIsConnected() {
    const state = await NetInfo.fetch();
    return state.isConnected;
  }

  private handle(state: NetInfoState) {
    this.isConnected = state.isConnected;
    this.type = state.type;
  }
}
