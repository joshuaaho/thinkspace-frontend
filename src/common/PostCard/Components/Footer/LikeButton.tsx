import { useLikePostByIdMutation } from "@api/posts/mutation";
import withAuthorization from "@hoc/withAuthorization";
import Button from "@common/Button";
import { FaRegHeart } from "react-icons/fa";
import { usePostContext } from "@common/PostCard";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { AxiosError } from "axios";

const ButtonWithAuthorization = withAuthorization(Button);

const LikeButton = () => {
  const {
    mutate: likePostById,
    isPending: LikePostByIdPending,
    isError,
    error,
  } = useLikePostByIdMutation();
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
          likePostById(post.id);
        }}
        variant="base-2"
        size="sm"
        disabled={LikePostByIdPending}
        renderIcon={(props) => <FaRegHeart size={props.iconSize} />}
      >
        {post.likeCount > 0 ? post.likeCount : "Like Post"}
      </ButtonWithAuthorization>
    </>
  );
};

export default LikeButton;
