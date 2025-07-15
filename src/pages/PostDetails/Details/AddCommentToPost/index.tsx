import CommentFormProvider from "@pages/PostDetails/Details/CommentFormProvider";
import CommentInput from "@pages/PostDetails/Details/CommentInput";
import withAuthorization from "@hoc/withAuthorization";
import { useState } from "react";
import Cancel from "@pages/PostDetails/Details/AddCommentToPost/Cancel";
import Submit from "@pages/PostDetails/Details/AddCommentToPost/Submit";

const CommentInputWithAuthorization = withAuthorization(CommentInput);
const ReplyToPostSection = () => {
  const [expandForm, setExpandForm] = useState(false);

  return (
    <CommentFormProvider>
      <div className="flex flex-col gap-2 max-w-5xl mx-auto mb-10">
        <CommentInputWithAuthorization
          placeholder="Add a comment..."
          onClick={() => {
            setExpandForm(true);
          }}
        />
        {expandForm && (
          <div className="flex justify-end gap-2">
            <Cancel setExpandForm={setExpandForm} />
            <Submit />
          </div>
        )}
      </div>
    </CommentFormProvider>
  );
};

export default ReplyToPostSection;
