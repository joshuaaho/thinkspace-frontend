import ShowReplies from "@pages/PostDetails/Details/Comments/Footer/ShowReplies";
import Like from "@pages/PostDetails/Details/Comments/Footer/Like";
import ShowReplyForm from "@pages/PostDetails/Details/Comments/Footer/ShowReplyForm";
import ShowEditForm from "@pages/PostDetails/Details/Comments/Footer/ShowEditForm";
import Unlike from "@pages/PostDetails/Details/Comments/Footer/Unlike";
import DeleteButton from "@pages/PostDetails/Details/Comments/Footer/Delete";
import { useCommentContext } from "@common/CommentCard";

const Footer = () => {
  const { comment } = useCommentContext();
  return (
    <>
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        {comment.likedByCurrentUser ? <Unlike /> : <Like />}
        <ShowReplyForm />
        <ShowReplies/>
        {comment.createdByCurrentUser && <ShowEditForm />}
        {comment.createdByCurrentUser && <DeleteButton />}
      </div>
    </>
  );
};

export default Footer;
