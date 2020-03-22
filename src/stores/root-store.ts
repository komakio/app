import { createContext, useContext, Context } from 'react';
import { UserStore } from './user-store';
import { ProfileFlowStore } from './profile-flow-store';

export class RootStore {
  public userStore = new UserStore(this);
  public profileFlowStore = new ProfileFlowStore(this);
}

export const RootStoreContext: Context<RootStore> = createContext<RootStore>(
  null
);

export const useRootStore = (): RootStore => {
  return useContext(RootStoreContext);
};
