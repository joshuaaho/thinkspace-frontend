import Content from "@common/CommentCard/Content";
import Header from "@common/CommentCard/Header";
import Footer from "@pages/PostDetails/Details/Comments/Footer";
import { useCommentContext, Card } from "@common/CommentCard";
import Action from "@pages/PostDetails/Details/Comments/Action";
const Replies = () => {
  const { showReplies, comment } = useCommentContext();

  if (!showReplies) return null;

  return (
    <div className="pl-6 pb-2">
      {comment.replies.map((comment) => (
        <Card key={comment.id} comment={comment}>
          <Header />
          <Content />
          <Footer />
          <Replies />
          <Action />
        </Card>
      ))}
    </div>
  );
};

export default Replies;
