import { useFormContext } from "react-hook-form";
import { RegisterInput } from "@pages/Register";
import Error from "@common/Error";

const Password = () => {
  const { formState } = useFormContext<RegisterInput>();

  if (formState.errors.password?.message) {
    return <Error error={formState.errors.password.message} />;
  }

  return null;
};

export default Password;
