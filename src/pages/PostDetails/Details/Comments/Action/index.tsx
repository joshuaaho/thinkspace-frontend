
import ReplyForm from "@pages/PostDetails/Details/Comments/Action/Reply";
import EditForm from "@pages/PostDetails/Details/Comments/Action/Edit";
import { useCommentContext } from "@common/CommentCard";


//For type safety
function assertUnreachable(_x: never): never {
    throw new Error("Didn't expect to get here");
}
const Action = () => {
  const { formType } = useCommentContext();
  
  if (formType === "reply") {
    return <ReplyForm />;
  }
  if (formType === "edit") {
    return <EditForm />;
  }
  if (formType === null) {
    return null;
  }
  assertUnreachable(formType);
};

export default Action;
