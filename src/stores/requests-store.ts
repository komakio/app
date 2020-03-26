import { RootStore } from './root-store';
import { RequestsApi } from '../api/request';

export class RequestsStore {
  private userStore = this.rootStore.userStore;

  constructor(private rootStore: RootStore) {}

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
