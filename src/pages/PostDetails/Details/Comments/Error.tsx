import { FormData } from "@pages/PostDetails/Details/CommentFormProvider";
import { useFormContext } from "react-hook-form";
import Error from "@common/Error";
const CommentError = () => {
  const { formState } = useFormContext<FormData>();
  if (formState.errors.content?.message) {
    return <Error error={formState.errors.content.message} />;
  }

  return null;
};

export default CommentError;
