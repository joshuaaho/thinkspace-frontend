import { FaEdit } from "react-icons/fa";
import Button from "@common/Button";
import { useCommentContext } from "@common/CommentCard";
const ShowEditForm = () => {
  const { setFormType } = useCommentContext();

  return (
    <Button
      variant="base-2"
      onClick={() => {
        setFormType("edit");
      }}
      renderIcon={(props) => <FaEdit size={props.iconSize} />}
    >
      Edit
    </Button>
  );
};

export default ShowEditForm;
