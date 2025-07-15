import { FormData } from "@pages/EditPost";
import { useEditPostMutation } from "@api/posts/mutation";
import Button from "@common/Button";
import { useFormContext } from "react-hook-form";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { Navigate } from "react-router-dom";
import LoaderModal from "@common/Modals/LoaderModal";
import { useLocation } from "react-router-dom";
import { Post } from "@api/posts/types";
const SubmitButton = () => {
  const {
    mutate: editPost,
    isPending,
    isSuccess,
    error,
  } = useEditPostMutation();

  const { state } = useLocation();
  const post = state.post as Post;

  const { handleSubmit } = useFormContext<FormData>();
  const onSubmit = (data: FormData) => {
    editPost({ postId: post.id, ...data});
  };

  if (isSuccess) {
    return <Navigate to={`/posts/${post.id}`} />;
  }

  return (
    <>
      {isPending && <LoaderModal message="Updating Post..." />}
      {error && (
        <ApiErrorModal
          statusCode={(error as any).response.status}
          message={(error as any).response.data.error}
        />
      )}
      <Button
        variant="primary"
        size="lg"
        className="float-right"
        onClick={handleSubmit(onSubmit)}
      >
        Edit
      </Button>
    </>
  );
};

export default SubmitButton;
