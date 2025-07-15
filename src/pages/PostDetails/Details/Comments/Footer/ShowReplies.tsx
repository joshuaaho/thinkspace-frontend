import Button from "@common/Button";
import { useCommentContext } from "@common/CommentCard";

const ShowReplies = () => {
  const { setShowReplies, comment } = useCommentContext();
  return (
    <Button
      variant="base-2"
      onClick={() => setShowReplies((prev: boolean) => !prev)}
    >
      Replies {comment.replies.length}
    </Button>
  );
};

export default ShowReplies;
