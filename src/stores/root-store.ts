import { createContext, useContext, Context } from 'react';
import { UserStore } from './user-store';
import { ProfileFlowStore } from './profile-flow-store';
import { NotificationsStore } from './notifications-store';
import { CodePushStore } from './code-push-store';
import { SocialLoginStore } from './social-login-store';
import { RequestsStore } from './requests-store';
import { AppStateStore } from './app-state-store';
import { ExceptionsStore } from './exceptions-store';

export class RootStore {
  public appStateStore = new AppStateStore(this);
  public userStore = new UserStore(this);
  public profileFlowStore = new ProfileFlowStore(this);
  public notificationsStore = new NotificationsStore(this);
  public codePushStore = new CodePushStore(this);
  public socialLoginStore = new SocialLoginStore(this);
  public requestsStore = new RequestsStore(this);
  public exceptionsStore = new ExceptionsStore(this);
}

export const RootStoreContext: Context<RootStore> = createContext<RootStore>(
  null
);

export const useRootStore = (): RootStore => {
  return useContext(RootStoreContext);
};
