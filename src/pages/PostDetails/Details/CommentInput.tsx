import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/PostDetails/Details/CommentFormProvider";
import CommentError from "@pages/PostDetails/Details/Comments/Error";
import { useAccessToken } from "@store/auth";

import CurrentUserProfileImage from "@common/CurrentUserProfileImage";
interface CommentFormProps {
  onClick?: () => void;
  placeholder: string;
}

function CommentForm({ placeholder, onClick }: CommentFormProps) {
  const { register } = useFormContext<FormData>();
  const accessToken = useAccessToken();
  

  return (
    <div
      className="card bg-base-100 max-w-5xl mx-auto w-full"
      onClick={onClick}
    >
      <div className="flex gap-4">
       {accessToken && <CurrentUserProfileImage />}
        <div className="flex-1">
          <textarea
            className="textarea textarea-bordered focus:textarea-primary w-full text-base resize-none"
            placeholder={placeholder}
            rows={3}
            {...register("content")}
          />
          <CommentError />
          <div className="flex items-center justify-end gap-2 mt-3"></div>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
