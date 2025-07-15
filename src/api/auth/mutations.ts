import { removeAccessToken, setAccessToken } from "@store/auth";
import { useMutation } from "@tanstack/react-query";
// import { login, logout, refreshAccessToken, register } from "@api/auth/request";

import { toast } from "react-toastify";
import { queryClient } from "@src/queryClient";
import { axiosPublic } from "@api/axios";

const useRefreshTokenMutation = () => {
  const result = useMutation({
    mutationFn: axiosPublic.auth.refresh,
    onSuccess: (response) => setAccessToken(response.data.accessToken),
  });
  return result;
};

const useLoginMutation = () => {
  const result = useMutation({
    mutationFn: axiosPublic.auth.login,
    onSuccess: (response) => {
      setAccessToken(response.data.accessToken);
    },
  });
  return result;
};

const useRegisterMutation = () => {
  const result = useMutation({
    mutationFn: axiosPublic.auth.register,
    onSuccess: () => {
      toast.success("Registration successful. Please login to continue.");
    },
  });
  return result;
};

const useLogoutMutation = () => {
  const result = useMutation({
    mutationFn: axiosPublic.auth.logout,
    onSuccess: () => {
      removeAccessToken();
      queryClient.clear();
    },
  });
  return result;
};

export {
  useRefreshTokenMutation,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
};

// Prior to TSOA support
// const useRefreshTokenMutation = () => {
//   const result = useMutation({
//     mutationFn: refreshAccessToken,
//     onSuccess: (accessToken) => setAccessToken(accessToken),
//   });
//   return result;
// };

// const useLoginMutation = () => {
//   const result = useMutation({
//     mutationFn: login,
//     onSuccess: (accessToken) => {
//       setAccessToken(accessToken);

//     },
//   });
//   return result;
// };

// const useRegisterMutation = () => {
//   const result = useMutation({
//     mutationFn: register,
//     onSuccess: () => {
//       toast.success("Registration successful. Please login to continue.");
//     },

//   });
//   return result;
// };

// const useLogoutMutation = () => {
//   const result = useMutation({
//     mutationFn: logout,
//     onSuccess: () => {
//       removeAccessToken();
//       queryClient.removeQueries({ queryKey: ["user", "me"] });
//     },
//   });
//   return result;
// };
