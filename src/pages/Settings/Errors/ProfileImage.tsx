import { useFormContext } from "react-hook-form";
import Error from "@common/Error";
import { EditUserCommand } from "@api/apiClient";

const ProfileImage = () => {
  const { formState } = useFormContext<EditUserCommand>();

  if (formState.errors.profileImgUrl?.message) {
    return <Error error={formState.errors.profileImgUrl.message} />;
  }

  return null;
};

export default ProfileImage; 