import { useLikeCommentByIdMutation } from "@api/comments/mutations";
import withAuthorization from "@hoc/withAuthorization";
import Button from "@common/Button";
import { FaRegHeart } from "react-icons/fa";

import { useCommentContext } from "@common/CommentCard";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

const ButtonWithAuthorization = withAuthorization(Button);

const LikeButton = () => {
  const {
    mutate: likeCommentById,
    isPending,

    error,
  } = useLikeCommentByIdMutation();
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
          likeCommentById(comment.id);
        }}
        variant="base-2"
        disabled={isPending}
        renderIcon={(props) => <FaRegHeart size={props.iconSize} />}
      >
        {comment.likeCount > 0 ? comment.likeCount : 0}
      </ButtonWithAuthorization>
    </>
  );
};

export default LikeButton;
