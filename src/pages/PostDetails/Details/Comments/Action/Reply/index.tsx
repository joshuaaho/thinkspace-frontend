import CommentFormProvider from "@pages/PostDetails/Details/CommentFormProvider";
import CommentInput from "@pages/PostDetails/Details/CommentInput";
import Reply from "@pages/PostDetails/Details/Comments/Action/Reply/Reply";
import Cancel from "@pages/PostDetails/Details/Comments/Action/Reply/Cancel";
const ReplyForm = () => {
  return (
     <CommentFormProvider>
      <div className="flex flex-col gap-2 max-w-5xl mx-auto mb-4 w-full">
        <CommentInput placeholder="Reply to comment..." />
        <div className="flex justify-end gap-2">
          <Cancel />
          <Reply />
        </div>
      </div>
    </CommentFormProvider>
  );
};

export default ReplyForm;
