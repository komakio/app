import { RootStore } from './root-store';
import { RequestsApi } from '../api/request';
import { Request } from '../models/request'
import { autorun, observable } from 'mobx';

export class RequestsStore {

  @observable
  public requests: Request[];

  private userStore = this.rootStore.userStore;

  constructor(private rootStore: RootStore) {
    autorun(() => {
      if (this.userStore.profile) {
        this.getRequests();
      }
    })

    this.rootStore.appStateStore.onResume(() => {
      this.getRequests();
    });
  }

  public async getRequests() {
    this.userStore.waitReady();
    if (!this.userStore.profile?._id) {
      return;
    }
    
    const requests = await RequestsApi.getAllRequests(this.userStore.accessToken.token, this.userStore.profile._id);
    this.requests = requests;
  }

  public async createRequest(): Promise<void> {
    if (!this.rootStore.userStore.profile) {
      return;
    }
    await RequestsApi.createRequest(
      this.userStore.accessToken.token,
      this.userStore.profile._id
    );
    this.getRequests();
  }
}
