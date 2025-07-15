import { useFormContext } from "react-hook-form";
import Error from "@common/Error";
import { EditUserCommand } from "@api/apiClient";

const Education = () => {
  const { formState } = useFormContext<EditUserCommand>();

  if (formState.errors.education?.message) {
    return <Error error={formState.errors.education.message} />;
  }

  return null;
};

export default Education; 