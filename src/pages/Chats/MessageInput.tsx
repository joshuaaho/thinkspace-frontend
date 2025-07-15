
import { useFormContext } from "react-hook-form";

type MessageInputData = {
  text: string;
};

function MessageInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<MessageInputData>();
  
  return (
    <div className="flex-1">
      <textarea
        className="textarea textarea-bordered focus:textarea-primary w-full text-base resize-none h-12 min-h-12 max-h-32"
        placeholder="Type a message..."
        rows={1}
        {...register("text")}
      />
      {errors.text && (
        <p className="text-error text-sm mt-1">{errors.text?.message}</p>
      )}
    </div>
  );
}

export default MessageInput;
