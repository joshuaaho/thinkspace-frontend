
import  UnlikeButton  from "@common/PostCard/Components/Footer/UnlikeButton";
import  LikeButton  from "@common/PostCard/Components/Footer/LikeButton";
import { usePostContext } from "@common/PostCard";
import CommentButton from "@common/PostCard/Components/Footer/CommentButton";



export function PostFooter() {
  const { post } = usePostContext();
  return (
    <div className="flex gap-2">
      {post.likedByCurrentUser ? <UnlikeButton /> : <LikeButton />}
      <CommentButton />
    </div>
  );
}

export default PostFooter;
