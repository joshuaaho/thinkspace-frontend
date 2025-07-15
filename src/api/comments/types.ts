export interface CommentDto {
  id: string;
  content: string;
  authorId: string;
  authorUsername: string;
  authorProfileImgUrl: string;
  createdAt: string;
  likedBy: string[];
  parentCommentId?: string;
  postId: string;
}

export interface FlatComment {
  id: string;
  content: string;
  authorId: string;
  authorUsername: string;
  authorProfileImgUrl: string;
  parentCommentId?: string;
  commentCount: number;
  createdAt: string;
  postId: string;
  likedByCurrentUser: boolean;
  createdByCurrentUser: boolean;
  likeCount: number;
}

export interface Comment extends FlatComment {
  replies: Comment[];
}

//Prior to TSOA support
// export type QueryCommentsRequest= Partial<{
//   postId: string;
//   limit: number;
//   offset: number;
//   authorId: string;
// }>;

//       export type QueryCommentsResponse = CommentDto[];

// export type CreateCommentRequest = {
//   content: string;
//   parentCommentId?: string;
//   postId: string;
// };

// export type DeleteCommentRequest = {
//   commentId: string;

// };

// export type EditCommentRequest = {
//   content: string;

//   commentId: string;
// };

// export type LikeCommentRequest = {
//   commentId: string;

// };

// export type UnlikeCommentRequest = {
//   commentId: string;

// };
