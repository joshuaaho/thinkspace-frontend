//Prior to TSOA support
// import { axiosPrivate, axiosPublic } from "@api/axios";

// import {
//   CreateCommentRequest,
//   EditCommentRequest,
//   QueryCommentsRequest,
//   DeleteCommentRequest,
//   QueryCommentsResponse,
// } from "@api/comments/types";

// const editComment = async ({
//   commentId,
//   content,
// }: EditCommentRequest): Promise<void> => {
//   await axiosPrivate.post(`/comments/${commentId}`, {
//     content,
//   });
// };

// const createComment = async (
//   createCommentRequest: CreateCommentRequest
// ): Promise<void> => {
//   await axiosPrivate.post("/comments", createCommentRequest);
// };

// const likeCommentById = async (commentId: string): Promise<void> => {
//   await axiosPrivate.post(`/comments/${commentId}/like`);

// };

// const fetchComments = async (
//   params: QueryCommentsRequest
// ): Promise<QueryCommentsResponse> => {
//   const response = await axiosPublic.get("/comments", {
//     params,
//   });
//   return response.data;
// };

// const unlikeCommentById = async (commentId: string): Promise<void> => {
//   await axiosPrivate.post(`/comments/${commentId}/unlike`);

// };

// const deleteCommentById = async ({
//   commentId,
// }: DeleteCommentRequest): Promise<void> => {
//   await axiosPrivate.delete(`/comments/${commentId}`);
// };

// export {
//   editComment,
//   createComment,
//   likeCommentById,
//   fetchComments,
//   unlikeCommentById,
//   deleteCommentById,
// };
