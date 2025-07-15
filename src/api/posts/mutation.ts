import { useMutation, useQueryClient } from "@tanstack/react-query";
// import {likePostById, unlikePostById, createPost, editPost, deletePost} from "@api/posts/request";
import { toast } from "react-toastify";
import { axiosPrivate } from "@api/axios";
import { EditPostUpdates } from "@api/apiClient";

function useLikePostByIdMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.posts.likePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        refetchType: "all",
      });
      toast.success("Post liked successfully");
    },
  });
  return result;
}

function useUnlikePostByIdMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.posts.unlikePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        refetchType: "all",
      });
      toast.success("Post unliked successfully");
    },
  });
  return result;
}

function useCreatePostMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.posts.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        refetchType: "all",
      });
      toast.success("Post created successfully");
    },
  });
  return result;
}

function useEditPostMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({
      postId,
      title,
      content,
      tags,
      imgUrls,
    }: EditPostUpdates & { postId: string }) =>
      axiosPrivate.posts.editPost(postId, { title, content, tags, imgUrls }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        refetchType: "all",
      });
      toast.success("Post updated successfully");
    },
  });
  return result;
}

function useDeletePostMutation() {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: axiosPrivate.posts.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        refetchType: "all",
      });
      toast.success("Post deleted successfully");
    },
  });
  return result;
}

// function useLikePostByIdMutation() {
//   const result = useMutation({
//     mutationFn: likePostById,
//   });
//   return result;
// }

// function useUnlikePostByIdMutation() {
//   const result = useMutation({
//     mutationFn: unlikePostById,
//   });
//   return result;
// }

// function useCreatePostMutation() {
//   const queryClient = useQueryClient();
//   const result = useMutation({
//       mutationFn: createPost,
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ["posts"] });
//         toast.success("Post created successfully");
//       },
//   });
//   return result;
// }

// function useEditPostMutation() {
//   const result = useMutation({
//     mutationFn: editPost,
//   });
//   return result;
// }

// function useDeletePostMutation() {
//   const result = useMutation({
//     mutationFn: deletePost,
//   });
//   return result;
// }

export {
  useCreatePostMutation,
  useLikePostByIdMutation,
  useUnlikePostByIdMutation,
  useEditPostMutation,
  useDeletePostMutation,
};
