import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { postDtoToPost } from "@api/posts/mapper";
// import { QueryPostsRequest } from "@api/posts/types";
// import { fetchPostById, fetchPosts } from "@api/posts/request";
import { axiosPrivate } from "@api/axios";
import { QueryPostsCommand } from "@api/apiClient";
import { fetchPosts } from "@api/posts/request";

function usePostByIdQuery(postId: string) {
  const result = useQuery({
    queryKey: ["posts", postId],
    queryFn: () =>
      axiosPrivate.posts.getPostById(postId).then((res) => res.data),
    select: (data) => postDtoToPost(data),
  });
  return result;
}

function usePostsQuery({
  limit,
  title,
  tags,
  authorId,
  sortBy,
  enabled,
}: QueryPostsCommand & { enabled?: boolean }) {
  const result = useInfiniteQuery({
    queryKey: ["posts", { title, tags, authorId, sortBy }],
    queryFn: async ({ pageParam }) => {
      const response = await fetchPosts({
        limit,
        offset: pageParam,
        tags,
        authorId,
        title,
        sortBy,
      });

      return response;
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length > 0 ? lastPageParam + lastPage.length : null;
    },
    initialPageParam: 0,
    select: (data) => {
      return data.pages.flat().map((postDto) => postDtoToPost(postDto));
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled,
  });
  return result;
}
// function usePostByIdQuery(postId: string) {
//   const result = useQuery({
//     queryKey: ["posts", postId],
//     queryFn: () => fetchPostById(postId),
//     select: (data) => postDtoToPost(data),
//   });
//   return result;
// }

// function usePostsQuery({
//   limit,
//   title,
//   tags,
//   authorId,
//   sortBy,
// }: QueryPostsRequest ) {
//   const result = useInfiniteQuery({
//     queryKey: ["posts", { title, tags, authorId, limit,sortBy }],
//     queryFn: async ({ pageParam }) =>
//       fetchPosts({ limit, offset: pageParam, tags, authorId, title,sortBy}),
//     getNextPageParam: (lastPage, allPages, lastPageParam) => {
//       return lastPage.length > 0 ? lastPageParam + lastPage.length : null;
//     },
//     initialPageParam: 0,
//     select: (data) =>
//       data.pages.flat().map((postDto) => postDtoToPost(postDto)),
//   });
//   return result;
// }

export { usePostByIdQuery, usePostsQuery };
