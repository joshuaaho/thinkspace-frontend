import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { updateCurrentUser } from "@api/user/request";

import { axiosPrivate } from "@api/axios";
import { toast } from "react-toastify";
function useUpdateCurrentUserMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.users.handleEdit,
    onSuccess: () => {
      toast.success("User updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["users"],
        refetchType: "all",
      });
    },
  });
  return result;
}

function useFollowUserMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.users.follow,
    onSuccess: () => {
      toast.success("Followed user");
      queryClient.invalidateQueries({
        queryKey: ["users"],
        refetchType: "all",
      });
    },
  });
  return result;
}

function useUnfollowUserMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.users.unfollow,
    onSuccess: () => {
      toast.success("Unfollowed user");
      queryClient.invalidateQueries({
        queryKey: ["users"],
        refetchType: "all",
      });
    },
  });
  return result;
}
// function useUpdateCurrentUserMutation() {
//   const queryClient = useQueryClient();
//   const result = useMutation({
//     mutationFn: updateCurrentUser,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["user", "me"] });
//     },

//   });
//   return result;
// }

export {
  useUpdateCurrentUserMutation,
  useFollowUserMutation,
  useUnfollowUserMutation,
};
