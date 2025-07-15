import { useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   likeCommentById,
//   unlikeCommentById,
//   createComment,
//   editComment,
//   deleteCommentById,
// } from "@api/comments/request";
import { axiosPrivate } from "@api/axios";
import { toast } from "react-toastify";

function useLikeCommentByIdMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.comments.like,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
        refetchType: "all",
      });
      toast.success("Comment liked successfully");
    },
  });
  return result;
}

function useUnlikeCommentByIdMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.comments.unlike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
        refetchType: "all",
      });
      toast.success("Comment unliked successfully");
    },
  });
  return result;
}

function useCreateCommentMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.comments.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
        refetchType: "all",
      });
      toast.success("Comment created successfully");
    },
  });
  return result;
}

function useEditCommentMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({
      commentId,
      content,
    }: {
      commentId: string;
      content: string;
    }) => axiosPrivate.comments.edit(commentId, { content }),
    onSuccess: () => {
      toast.success("Comment edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["comments"],
        refetchType: "all",
      });
    },
  });
  return result;
}

function useDeleteCommentByIdMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.comments.delete,
    onSuccess: () => {
      toast.success("Comment deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["comments"],
        refetchType: "all",
      });
    },
  });
  return result;
}

export {
  useLikeCommentByIdMutation,
  useUnlikeCommentByIdMutation,
  useCreateCommentMutation,
  useEditCommentMutation,
  useDeleteCommentByIdMutation,
};
