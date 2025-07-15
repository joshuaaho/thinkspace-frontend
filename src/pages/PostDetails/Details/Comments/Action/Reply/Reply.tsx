import Button from "@common/Button";
import { useCreateCommentMutation } from "@api/comments/mutations";
import { FormData } from "@pages/PostDetails/Details/CommentFormProvider";
import { useFormContext } from "react-hook-form";
import { useCommentContext } from "@common/CommentCard";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

const SubmitCommentButton = () => {
  const { handleSubmit } = useFormContext<FormData>();
  const { mutate: createComment, error } = useCreateCommentMutation();
  const { comment } = useCommentContext();
  const handleClick = (data: FormData) => {
    createComment({
      content: data.content,
      parentCommentId: comment.id,
      postId: comment.postId,
    });
  };
  return (
    <>
      {error && (
        <ApiErrorModal
          statusCode={(error as any).response.status}
          message={(error as any).response.data.error}
        />
      )}
      <Button
        variant="primary"
        className="justify-start"
        onClick={handleSubmit(handleClick)}
      >
        Reply
      </Button>
    </>
  );
};

export default SubmitCommentButton;
