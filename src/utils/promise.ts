export interface CancelablePromise<T> {
  promise: Promise<T>;
  cancel: () => void;
}

export function makeCancelable(
  promise: Promise<any>
): { promise: typeof promise; cancel: () => void } {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val: any) =>
        hasCanceled_
          ? reject({ message: 'OLD_PROMISE_CANCELED' })
          : resolve(val),
      (error: Error) =>
        hasCanceled_
          ? reject({ message: 'OLD_PROMISE_CANCELED' })
          : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
}
