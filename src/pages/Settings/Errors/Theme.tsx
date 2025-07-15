import { useFormContext } from "react-hook-form";
import Error from "@common/Error";
import { EditUserCommand } from "@api/apiClient";

const Theme = () => {
  const { formState } = useFormContext<EditUserCommand>();

  if (formState.errors.themePreference?.message) {
    return <Error error={formState.errors.themePreference.message} />;
  }

  return null;
};

export default Theme; 