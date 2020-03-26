import { RootStore } from './root-store';
import { RequestsApi } from '../api/request';
import { autorun } from 'mobx';

export class RequestsStore {
  private userStore = this.rootStore.userStore;

  constructor(private rootStore: RootStore) {
    autorun(() => {
      if (this.userStore.profile) {
        this.getRequests();
      }
    })
  }

  public async getRequests() {
    this.userStore.waitReady();
    if (!this.userStore.profile?._id) {
      return;
    }
    
    const requests = await RequestsApi.getAllRequests(this.userStore.accessToken.token, this.userStore.profile._id);
    console.log(requests)
  }

  public async createRequest(): Promise<void> {
    if (!this.rootStore.userStore.profile) {
      return;
    }
    await RequestsApi.createRequest(
      this.userStore.accessToken.token,
      this.userStore.profile._id
    );
  }
}
