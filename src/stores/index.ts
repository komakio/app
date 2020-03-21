import { useRootStore } from './root-store';

export const useUserStore = () => {
  const rootStore = useRootStore();
  return rootStore.userStore;
};
