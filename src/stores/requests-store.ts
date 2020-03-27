import { RootStore } from './root-store';
import { RequestsApi } from '../api/request';
import { Request } from '../models/request';
import { autorun, observable } from 'mobx';
import { Profile } from '../models/profile';

export class RequestsStore {
  @observable
  public requests: Request[];

  private userStore = this.rootStore.userStore;

  constructor(private rootStore: RootStore) {
    autorun(() => {
      if (this.userStore.profile) {
        this.getRequests();
      }
    });

    this.rootStore.appStateStore.onResume(() => {
      this.getRequests();
    });
  }

  public async getRequests() {
    this.userStore.waitReady();
    if (!this.userStore.profile?._id) {
      return;
    }

    const requests = await RequestsApi.getAllRequests(
      this.userStore.accessToken.token,
      this.userStore.profile._id
    );
    console.log(requests.length);
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

  public async acceptRequest(requestId: string): Promise<void> {
    await RequestsApi.acceptRequest(
      this.userStore.accessToken.token,
      requestId,
      this.userStore.profile._id
    );
    this.getRequests();
  }

  public async cancelRequest(requestId: string): Promise<void> {
    await RequestsApi.cancelRequest(
      this.userStore.accessToken.token,
      requestId,
      this.userStore.profile._id
    );
    this.getRequests();
  }

  public async getProfileFromRequest(
    requestId: string,
    profileId: string
  ): Promise<Profile> {
    return RequestsApi.getProfileFromRequest(
      this.userStore.accessToken.token,
      requestId,
      profileId
    );
  }
}
