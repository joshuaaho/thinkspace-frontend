import { useFormContext } from "react-hook-form";
import { RegisterInput } from "@pages/Register";
import Error from "@common/Error";

const ConfirmPassword = () => {
  const { formState } = useFormContext<RegisterInput>();

  if (formState.errors.confirmPassword?.message) {
    return <Error error={formState.errors.confirmPassword.message} />;
  }

  return null;
};

export default ConfirmPassword;
