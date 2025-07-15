// type OptionalEditPostRequest = Partial<{
//   title: string;
//   content: string;
//   tags: string[];
//   imgUrls: string[];
// }>

// type RequiredEditPostRequest = {
//   postId: string;

// }

// type EditPostRequest = RequiredEditPostRequest & OptionalEditPostRequest;

// type DeletePostRequest = {
//   id: string;
// }

interface PostDto {
  authorId: string;
  username: string;
  authorProfileImgUrl: string;
  id: string;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
  likedBy: string[];
  imgUrls: string[];
  commentedBy: string[];
}

// type QueryPostsRequest= Partial<{
//   title: string;
//   tags: string[];
//   authorId: string;
//   limit: number;
//   offset: number;
//   sortBy: "newest" | "oldest" | "most-liked";
// }>;

// interface CreatePostRequest {
//   title: string;
//   content: string;
//   tags?: string[];
//   imgUrls?: string[];
// }
// type PostId = string;

interface Post {
  id: string;
  title: string;
  content: string;
  authorProfileImgUrl: string;
  authorUsername: string;
  likedByCurrentUser: boolean;
  tags: string[];
  likeCount: number;
  commentCount: number;
  imgUrls: string[];
  createdAt: string;
}
export type {
  PostDto,
  // QueryPostsRequest,
  // CreatePostRequest,
  // EditPostRequest,
  // DeletePostRequest,
  // PostId,
  Post,
};
