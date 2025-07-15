import { useFormContext } from "react-hook-form";
import Error from "@common/Error";
import { EditUserCommand } from "@api/apiClient";

const Work = () => {
  const { formState } = useFormContext<EditUserCommand>();

  if (formState.errors.work?.message) {
    return <Error error={formState.errors.work.message} />;
  }

  return null;
};

export default Work; 