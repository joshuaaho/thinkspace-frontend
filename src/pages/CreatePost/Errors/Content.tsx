import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";
import Error from "@common/Error";

const Content = () => {
  const { formState } = useFormContext<FormData>();

  if (formState.errors.content?.message) {
    return <Error error={formState.errors.content.message} />;
  }

  return null;
};

export default Content; 