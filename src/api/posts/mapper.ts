import { UserDto } from "@api/user/types";
import { queryClient } from "@src/queryClient";
import { PostDto, Post } from "@api/posts/types";
import { formatDate } from "@api/utils";

export function postDtoToPost(postDto: PostDto): Post {
  const currentUser = queryClient.getQueryData<UserDto>(["users", "me"]);
  let post = {
    id: postDto.id,
    authorUsername: postDto.username,
    authorProfileImgUrl: postDto.authorProfileImgUrl,
    content: postDto.content,
    title: postDto.title,
    tags: postDto.tags,
    likeCount: postDto.likedBy.length,
    commentCount: postDto.commentedBy.length,
    imgUrls: postDto.imgUrls,
    createdAt: formatDate(postDto.createdAt),

    likedByCurrentUser: currentUser
      ? postDto.likedBy.includes(currentUser.id)
      : false,
  };

  return post;
}
