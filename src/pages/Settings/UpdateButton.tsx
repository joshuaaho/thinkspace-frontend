import Button from "@common/Button";
import { useUpdateCurrentUserMutation } from "@api/user/mutation";
import { useFormContext } from "react-hook-form";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { FiSave } from "react-icons/fi";
import { FormData } from "@pages/Settings/Form";


const UpdateButton = () => {
  const { handleSubmit } = useFormContext<FormData>();
  const { mutate: updateUser, error } = useUpdateCurrentUserMutation();

  const handleClick = (data: FormData) => {

    updateUser(data);
  };

  return (
    <>
      {error && (
        <ApiErrorModal
          statusCode={(error as any).response.status}
          message={(error as any).response.data.error}
        />
      )}
      <Button
        variant="primary"
        onClick={handleSubmit(handleClick)}
        renderIcon={(props) => <FiSave size={props.iconSize} />}
      >
        Save Changes
      </Button>
    </>
  );
};

export default UpdateButton;