import { useUnlikeCommentByIdMutation } from "@api/comments/mutations";
import withAuthorization from "@hoc/withAuthorization";
import Button from "@common/Button";
import { FaHeart } from "react-icons/fa";
import { useCommentContext } from "@common/CommentCard";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

const ButtonWithAuthorization = withAuthorization(Button);

const Unlike = () => {
  const { mutate: unlikeCommentById, isPending: unlikeCommentByIdPending,error } =
    useUnlikeCommentByIdMutation();
  const { comment } = useCommentContext();

  return (
    <>
    {error && (
          <ApiErrorModal
            statusCode={(error as any).response.status}
            message={(error as any).response.data.error}
          />
        )}
    <ButtonWithAuthorization
      onClick={() => {
        unlikeCommentById(comment.id);
      }}
      variant="base-2"
      disabled={unlikeCommentByIdPending}
      renderIcon={(props) => <FaHeart size={props.iconSize} />}
    >
      {comment.likeCount > 0 ? comment.likeCount : 0}
    </ButtonWithAuthorization>
    </>
  );
};

export default Unlike;
