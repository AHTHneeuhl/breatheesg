import { useCallback } from "react";
import { MutateOptions, useMutation } from "@tanstack/react-query";
import useNotification from "./useNotification";

type TApiInstance<T, U> = (args: U) => Promise<T | undefined>;

type TOnSuccess<T> = (data: T) => void;
type TOnError = (errorMessage: string) => void;

type TOptions<T> = {
  onSuccess?: TOnSuccess<T>;
  onError?: TOnError;
};

const useReactQuery = <T, U>(
  apiInstance: TApiInstance<T, U>,
  options?: TOptions<T>
) => {
  const notification = useNotification();

  const { data, mutate, mutateAsync, isLoading } = useMutation(apiInstance, {
    onSuccess: (data) => {
      if (data !== undefined && options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: ({ displayMessage }) => {
      notification.notifyDanger(displayMessage);
      if (options?.onError) options.onError(displayMessage);
    },
  });

  const execute = useCallback(
    (
      data?: U,
      options?: MutateOptions<
        T | undefined,
        {
          displayMessage: string;
        },
        U
      >
    ) => mutate(data as U, options),
    [mutate]
  );

  const executeAsync = useCallback(
    (
      data?: U,
      options?: MutateOptions<
        T | undefined,
        {
          displayMessage: string;
        },
        U
      >
    ) => mutateAsync(data as U, options),
    [mutateAsync]
  );

  return { data, isLoading, execute, executeAsync };
};

export default useReactQuery;
