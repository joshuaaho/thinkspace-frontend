import { useInfiniteQuery } from "@tanstack/react-query";
// import { QueryCommentsRequest } from "@api/comments/types";
// import { fetchComments } from "@api/comments/request"b;
import { commentDtoToFlatComment } from "@api/comments/mapper";
import { axiosPublic } from "@api/axios";
import { QueryCommentsCommand } from "@api/apiClient";

function useCommentsQuery({
  postId,
  authorId,
  limit,
  sortBy,
}: QueryCommentsCommand) {
  const result = useInfiniteQuery({
    queryKey: ["comments", { postId, authorId, sortBy }],
    queryFn: async ({ pageParam }) =>
      axiosPublic.comments
        .query({ postId, limit, offset: pageParam, authorId, sortBy })
        .then((res) => res.data),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length > 0 ? lastPageParam + lastPage.length : null;
    },
    initialPageParam: 0,
    select: (data) =>
      data.pages
        .flat()
        .map((commentDto) => commentDtoToFlatComment(commentDto)),
  });
  return result;
}

export { useCommentsQuery };
