import { useEffect } from "react";
import { usePostsQuery } from "@api/posts/queries";
import PostSkeleton from "@common/Skeletons/Post";
import { useInView } from "react-intersection-observer";
import { PostCard } from "@common/PostCard";
import {

  Header,
  Title,
  OwnerActions,
} from "@common/PostCard/Components";
import Tags from "@common/PostCard/Components/Tags";
import { useCurrentUserQuery } from "@api/user/query";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

const UsersPostList = () => {
  const { data: currentUser } = useCurrentUserQuery(); 
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error,
  } = usePostsQuery({
    limit: 10,
    authorId: currentUser?.id,
    enabled: !!currentUser,
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) {
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );
  }

  if (isPending) return <PostSkeleton />;

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post}>
          <OwnerActions />
          <Header />
          <Title />
          <Tags />
        </PostCard>
      ))}

      {isFetchingNextPage && <PostSkeleton />}
      {!hasNextPage && (
        <div className="text-center text-gray-500 mt-10">No more posts</div>
      )}
      <div ref={ref} className="h-10" />
    </>
  );
};

export default UsersPostList;
