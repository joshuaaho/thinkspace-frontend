import { AxiosError } from "axios";
import { QueryClient } from "@tanstack/react-query";

export const queryConfig = {
  defaultOptions: {
    queries: {
      throwOnError: (error: Error) => {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.status < 500
        ) {
          return false;
        }
        return true;
      },
      staleTime: 1000 * 60 * 30,
      retry: 3,
    },
    mutations: {
      throwOnError: (error: Error) => {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.status < 500
        ) {
          return false;
        }

        return true;
      },
    },
  },
};
export const queryClient = new QueryClient(queryConfig);

export default queryClient;
