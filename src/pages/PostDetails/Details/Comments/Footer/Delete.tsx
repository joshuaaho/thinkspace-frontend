import { useDeleteCommentByIdMutation } from "@api/comments/mutations";
import Button from "@common/Button";
import { FaTrash } from "react-icons/fa";
import { useCommentContext } from "@common/CommentCard";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

const DeleteButton = () => {
  const {
    mutate: deleteCommentById,
    isPending,
    error,
  } = useDeleteCommentByIdMutation();
  const { comment } = useCommentContext();

  return (
    <div>
      {error && (
        <ApiErrorModal
          statusCode={(error as any).response.status}
          message={(error as any).response.data.error}
        />
      )}
      <Button
        onClick={() => {
          deleteCommentById(comment.id);
        }}
        variant="base-2"
        disabled={isPending}
        renderIcon={(props) => (
          <FaTrash size={props.iconSize} className="text-red-500" />
        )}
        className="text-red-500 hover:text-red-600 hover:bg-red-50"
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
