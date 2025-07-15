import ProfileImg from "@common/ProfileImage";
import { useCommentContext } from "@common/CommentCard";

const CommentHeader = () => {
  const { comment } = useCommentContext();
  return (
    <div className="flex gap-3 ml-2">
      <ProfileImg src={comment.authorProfileImgUrl} size="sm" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{comment.authorUsername}</span>
          <span className="text-sm text-base-content/60">
            {comment.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CommentHeader;
