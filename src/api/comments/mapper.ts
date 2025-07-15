import { UserDto } from "@api/user/types";

import { queryClient } from "@src/queryClient";
import { CommentDto } from "@api/comments/types";
import { formatDate } from "@api/utils";
import { FlatComment, Comment } from "@api/comments/types";

export const formCommentTree = (
  items: FlatComment[],
  id: string | undefined = undefined
): Comment[] =>
  items
    .filter((item) => item.parentCommentId === id)
    .map((item) => ({
      ...item,
      replies: formCommentTree(items, item.id),
    }));
export function commentDtoToFlatComment(commentDto: CommentDto): FlatComment {
  const currentUser = queryClient.getQueryData<UserDto>(["users", "me"]);

  return {
    id: commentDto.id,
    content: commentDto.content,
    authorId: commentDto.authorId,
    authorUsername: commentDto.authorUsername,
    authorProfileImgUrl: commentDto.authorProfileImgUrl,
    parentCommentId: commentDto.parentCommentId,
    commentCount: commentDto.likedBy.length,
    likeCount: commentDto.likedBy.length,
    createdAt: formatDate(commentDto.createdAt),
    likedByCurrentUser: currentUser
      ? commentDto.likedBy.includes(currentUser.id)
      : false,
    createdByCurrentUser: currentUser
      ? commentDto.authorId === currentUser.id
      : false,
    postId: commentDto.postId,
  };
}
