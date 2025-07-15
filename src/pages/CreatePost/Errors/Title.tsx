import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";
import Error from "@common/Error";

const Title = () => {
  const { formState } = useFormContext<FormData>();

  if (formState.errors.title?.message) {
    return <Error error={formState.errors.title.message} />;
  }

  return null;
};

export default Title; 