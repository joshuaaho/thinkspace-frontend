import Button from "@common/Button";
import { FaRegCommentAlt } from "react-icons/fa";
import { usePostContext } from "@common/PostCard";

const CommentButton = () => {
  const { post } = usePostContext();
  return (
    <Button
      variant="base-2"
      size="sm"
      renderIcon={(props) => <FaRegCommentAlt size={props.iconSize} />}
    >
      {post.commentCount > 0 ? post.commentCount : "Add Comment"}
    </Button>
  );
};

export default CommentButton;
