import { FormData } from "@pages/CreatePost/Form";
import { useCreatePostMutation } from "@api/posts/mutation";
import Button from "@common/Button";
import { useFormContext } from "react-hook-form";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { Navigate } from "react-router-dom";
import LoaderModal from "@common/Modals/LoaderModal";

const SubmitButton = () => {
  const {
    mutate: createPost,
    isPending,
    isSuccess,
    error,
    data: response,
  } = useCreatePostMutation();

  const { handleSubmit } = useFormContext<FormData>();
  const onSubmit = (data: FormData) => {
    createPost(data);
  };

  if (isSuccess) {
    return <Navigate to={`/posts/${response.data.postId}`} />;
  }

  return (
    <>
      {isPending && <LoaderModal message="Creating Post..." />}
      {error && (
        <ApiErrorModal
          statusCode={(error as any).response.status}
          message={(error as any).response.data.error}
        />
      )}
      <Button
        variant="primary"
        size="lg"
        className="float-right mb-65"
        onClick={handleSubmit(onSubmit)}
      >
        Create
      </Button>
    </>
  );
};

export default SubmitButton;
