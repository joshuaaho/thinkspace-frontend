//Prior to TSOA support
import { axiosPrivate } from "@api/axios";
// import {
//   CreatePostRequest,
//   PostId,
//   EditPostRequest,
//   DeletePostRequest,
//   PostDto,
//   QueryPostsRequest,
// } from "@api/posts/types";
import { QueryPostsCommand, QueryPostsResponse } from "@api/apiClient";

// export const editPost = async ({
//   postId,
//   title,
//   content,
//   tags,
//   imgUrls,
// }: EditPostRequest): Promise<void> => {
//   await axiosPrivate.patch(`/posts/${postId}`, {
//     title,
//     content,
//     tags,
//     imgUrls,
//   });
// };

// export const deletePost = async (request: DeletePostRequest): Promise<void> => {
//   await axiosPrivate.delete(`/posts/${request.id}`);
// };

// export const likePostById = async (postId: string): Promise<void> => {
//   await axiosPrivate.post(`/posts/${postId}/like`);

// };

// export const unlikePostById = async (postId: string): Promise<void> => {
//   await axiosPrivate.post(`/posts/${postId}/unlike`);

// };

// export const createPost = async (
//   createPostRequest: CreatePostRequest
// ): Promise<PostId> => {
//   const response = await axiosPrivate.post("/posts", createPostRequest);
//   return response.data.postId;
// };


// export const fetchPostById = async (postId: string): Promise<PostDto> => {
//   const response = await axiosPublic.get(`/posts/${postId}`);
//   return response.data;
// };

export const fetchPosts = async (
  params: QueryPostsCommand
): Promise<QueryPostsResponse> => {
  const response = await axiosPrivate.posts.queryPosts({
    limit: params.limit,
    offset: params.offset,
    tags: params.tags,
    sortBy: params.sortBy,
    title: params.title,
    authorId: params.authorId,
  });
  return response.data;
};