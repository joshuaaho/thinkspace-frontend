import { FaHeart } from "react-icons/fa";
import { useUnlikePostByIdMutation } from "@api/posts/mutation";
import Button from "@common/Button";
import { usePostContext } from "@common/PostCard";
import withAuthorization from "@hoc/withAuthorization";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { AxiosError } from "axios";

const ButtonWithAuthorization = withAuthorization(Button);

export const UnlikeButton = () => {
  const { mutate: unlikePostById, isPending: UnlikePostByIdPending,isError,error } =
    useUnlikePostByIdMutation();

  const { post } = usePostContext();
  return (
    <>
       {isError && error instanceof AxiosError && error.response && (
        <ApiErrorModal
          statusCode={error.response.status}
          message={error.response.data.error}
        />
      )}
    <ButtonWithAuthorization
      onClick={() => {
        unlikePostById(post.id);
      }}
      variant="base-2"
      size="sm"
      disabled={UnlikePostByIdPending}
      renderIcon={(props) => <FaHeart size={props.iconSize} />}
    >
      {post.likeCount > 0 ? post.likeCount : "Unlike Post"}
      </ButtonWithAuthorization>
      </>
  
  );
};

export default UnlikeButton;
