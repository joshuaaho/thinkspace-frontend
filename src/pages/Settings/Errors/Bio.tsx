import { useFormContext } from "react-hook-form";
import Error from "@common/Error";
import { EditUserCommand } from "@api/apiClient";

const Bio = () => {
  const { formState } = useFormContext<EditUserCommand>();

  if (formState.errors.bio?.message) {
    return <Error error={formState.errors.bio.message} />;
  }

  return null;
};

export default Bio; 