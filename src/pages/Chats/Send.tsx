import Button from "@common/Button";
import { useFormContext } from "react-hook-form";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { useCreateMessageMutation } from "@api/messages/mutations";

import { FaPaperPlane } from "react-icons/fa";
import { FormData } from "@pages/Chats/MessageFormProvider";


interface SendProps {
  selectedUserId: string;
}

const Send = ({selectedUserId}:SendProps) => {
  const { handleSubmit} = useFormContext<FormData>();
  const { mutate: createMessage, error } = useCreateMessageMutation();


  const handleClick = (data: FormData) => {
    createMessage({
      text: data.text,
      recipientId: selectedUserId,
    });
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
        className="h-12 px-4 min-w-[48px]"
      >
        <FaPaperPlane className="w-4 h-4" />
      </Button>
    </>
  );
};

export default Send;
