import { usePostByIdQuery } from "@api/posts/queries";
import useRequiredParams from "hooks/useRequiredParams";
import { PostCard } from "@common/PostCard";
import {
  Header,
  Title,
  Images,
  Footer,
  Content,
} from "@common/PostCard/Components";
import ErrorPage from "@common/ErrorPage";
import PostSkeleton from "@common/Skeletons/Post";
import AddCommentToPost from "@pages/PostDetails/Details/AddCommentToPost";
import Comments from "@pages/PostDetails/Details/Comments";
import Tags from "@common/PostCard/Components/Tags";
import { useMarkNotificationAsReadMutation } from "@api/notifications/mutation";
import { useEffect } from "react";
import { useCurrentUserQuery } from "@api/user/query";

type PostDetailParams = {
  postId: string;
};

const Details = () => {
  const { postId } = useRequiredParams<PostDetailParams>();

  const { data: currentUser } = useCurrentUserQuery();
  const { data: post, error, isPending } = usePostByIdQuery(postId);

  const { mutate: markNotificationAsRead } =
    useMarkNotificationAsReadMutation();
  useEffect(() => {

    if (currentUser) {

      markNotificationAsRead({
        resourceId: postId,
        redirectToResourceType: "posts",
      });
    }
  }, [currentUser]);

  if (error)
    return (
      <ErrorPage
        message={(error as any).response.data.error}
        statusCode={(error as any).response.status}
      />
    );

  if (isPending) return <PostSkeleton />;
  return (
    <>
      <PostCard post={post} key={post.id}>
        <Header />
        <Title />
        <Content />
        <Images />
        <Tags />
        <Footer />
      </PostCard>
      <AddCommentToPost />
      <Comments />
    </>
  );
};

export default Details;
