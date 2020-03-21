import { createContext, useContext, Context } from 'react';
import { UserStore } from './user-store';

export class RootStore {
  public userStore = new UserStore(this);
}

export const RootStoreContext: Context<RootStore> = createContext<RootStore>(
  null
);

export const useRootStore = (): RootStore => {
  return useContext(RootStoreContext);
};
