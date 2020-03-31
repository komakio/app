export const waitForSomeMs = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
