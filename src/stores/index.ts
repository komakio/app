import { useRootStore } from './root-store';

export const useUserStore = () => {
  const rootStore = useRootStore();
  return rootStore.userStore;
};

export const useProfileFlowStore = () => {
  const rootStore = useRootStore();
  return rootStore.profileFlowStore;
};
