import Button from "@common/Button";
import { useEditCommentMutation } from "@api/comments/mutations";
import { FormData } from "@pages/PostDetails/Details/CommentFormProvider";
import { useFormContext } from "react-hook-form";
import { useCommentContext } from "@common/CommentCard";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

const EditButton = () => {
  const { handleSubmit } = useFormContext<FormData>();
  const { mutate: editComment, error } = useEditCommentMutation();
  const { comment } = useCommentContext();

  const handleClick = (data: FormData) => {
    editComment({
      commentId: comment.id,
      content: data.content,
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
        Edit
      </Button>
    </>
  );
};

export default EditButton;
