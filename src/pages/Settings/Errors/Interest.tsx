import { useFormContext } from "react-hook-form";
import Error from "@common/Error";
import { EditUserCommand } from "@api/apiClient";

const Interest = () => {
  const { formState } = useFormContext<EditUserCommand>();

  if (formState.errors.interest?.message) {
    return <Error error={formState.errors.interest.message} />;
  }

  return null;
};

export default Interest; 