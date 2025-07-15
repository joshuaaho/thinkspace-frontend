import { useFormContext } from "react-hook-form";
import { RegisterInput } from "@pages/Register";
import Error from "@common/Error";

const Email = () => {
  const { formState } = useFormContext<RegisterInput>();

  if (formState.errors.email?.message) {
    return <Error error={formState.errors.email.message} />;
  }

  return null;
};

export default Email;
