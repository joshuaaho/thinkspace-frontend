import { useEffect } from "react";
import { usePostsQuery } from "@api/posts/queries";
import PostSkeleton from "@common/Skeletons/Post";
import { useInView } from "react-intersection-observer";
import { PostCard } from "@common/PostCard";
import {
  Footer,
  Header,
  Title,
} from "@common/PostCard/Components";
import Tags from "@common/PostCard/Components/Tags";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
const PostList = () => {

  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error,
   
  } = usePostsQuery({ limit: 10 });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }

  }, [inView, fetchNextPage]);

  if (isPending) return <PostSkeleton />;

  if (error)
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post}>
          <Header />
          <Title />
          <Tags />
          <Footer />
        </PostCard>
      ))}

      {isFetchingNextPage && <PostSkeleton />}
      {!hasNextPage &&  (
        <div className="text-center text-gray-500 mt-10">No more posts</div>
      )}
      <div ref={ref} className="h-10" />
    </>
  );
};

export default PostList;
