import { createContext, Context, useContext } from 'react';

export const RouterContext: Context<string> = createContext<string>(null);

export const useRouter = (): string => {
  return useContext(RouterContext);
};
