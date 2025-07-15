import { useFormContext } from "react-hook-form";
import { RegisterInput } from "@pages/Register";
import Error from "@common/Error";

const Username = () => {
  const { formState } = useFormContext<RegisterInput>();

  if (formState.errors.username?.message) {
    return <Error error={formState.errors.username.message} />;
  }

  return null;
};

export default Username;
