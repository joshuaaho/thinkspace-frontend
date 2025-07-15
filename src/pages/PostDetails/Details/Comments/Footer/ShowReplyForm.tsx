import { LuMessageCircle } from "react-icons/lu";
import Button from "@common/Button";
import { useCommentContext } from "@common/CommentCard";
import withAuthorization from "@hoc/withAuthorization";

const ButtonWithAuthorization = withAuthorization(Button);

const ReplyToCommentButton = () => {
  const { setFormType } = useCommentContext();
  return (
    <ButtonWithAuthorization
      variant="base-2"
      className="justify-start"
      renderIcon={(props) => <LuMessageCircle size={props.iconSize} />}
      onClick={() => {
        setFormType("reply")
      }}
    >
      Reply
    </ButtonWithAuthorization>
  );
};

export default ReplyToCommentButton;
