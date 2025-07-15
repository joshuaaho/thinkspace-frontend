import { useNavigate } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { usePostContext } from "@common/PostCard";
import ConfirmModal from "@common/Modals/ConfirmModal";
import Button from "@common/Button";
import preventDefault from "@hoc/preventDefault";
import { useDeletePostMutation } from "@api/posts/mutation";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

function OwnerActions() {
  const navigate = useNavigate();
  const { post } = usePostContext();
  const { mutate: deletePost, error } = useDeletePostMutation();

  return (
    <>
      {error && (
        <ApiErrorModal
          statusCode={(error as any).response.status}
          message={(error as any).response.data.error}
        />
      )}
      <div className="flex items-center gap-2 flex-row-reverse">
        <ConfirmModal
          title="Delete post"
          message="Are you sure you want to delete this post?"
          actionButton={
            <Button
              variant="warning"
              size="md"
              onClick={() => {
                deletePost(post.id);
              }}
            >
              Delete
            </Button>
          }
        />
        <Button
          onClick={preventDefault(() =>
            navigate(`/posts/edit`, { state: { post } })
          )}
          variant="base-1"
          aria-label="Edit post"
          renderIcon={(props) => (
            <FiEdit2
              className={`text-base-content/70 hover:text-base-content ${props.iconSize}`}
            />
          )}
        />
      </div>
    </>
  );
}

export default OwnerActions;
