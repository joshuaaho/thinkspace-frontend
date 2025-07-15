import { useFormContext } from "react-hook-form";
import Error from "@common/Error";
import { EditUserCommand } from "@api/apiClient";

const Location = () => {
  const { formState } = useFormContext<EditUserCommand>();

  if (formState.errors.location?.message) {
    return <Error error={formState.errors.location.message} />;
  }

  return null;
};

export default Location; 