import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";
import Error from "@common/Error";
import transformFieldErrorToString from "@pages/CreatePost/utils";

const Tags = () => {
  const { formState } = useFormContext<FormData>();

  if (formState.errors.tags) {
    return <Error error={transformFieldErrorToString(formState.errors.tags)} />;
  }

  return null;
};

export default Tags; 