import Button from "@common/Button";
import { useCreateCommentMutation } from "@api/comments/mutations";
import { useFormContext } from "react-hook-form";
import useRequiredParams from "@hooks/useRequiredParams";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { FormData } from "@pages/PostDetails/Details/CommentFormProvider";
type PostDetailParams = {
  postId: string;
};
const Submit = () => {
  const { handleSubmit } = useFormContext<FormData>();
  const { mutate: createComment, error } = useCreateCommentMutation();
  const { postId } = useRequiredParams<PostDetailParams>();
  const handleClick = (data: FormData) => {
    createComment({
      content: data.content,
      postId,
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
      <Button variant="primary" onClick={handleSubmit(handleClick)}>
        Submit
      </Button>
    </>
  );
};

export default Submit;
