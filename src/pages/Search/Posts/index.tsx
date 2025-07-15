import { usePostsQuery } from "@api/posts/queries";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useSearchParams } from "react-router-dom";
import TypeSelector from "@pages/Search/TypeSelector";
import { SortSelector } from "./SortSelector";
import { TagList } from "./TagList";
import { PostCard } from "@common/PostCard/";
import * as Separator from "@radix-ui/react-separator";
import { Footer, Header, Images, Title } from "@common/PostCard/Components";
import Tags from "@common/PostCard/Components/Tags";

import { PostSkeleton } from "@common/Skeletons";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { SortBy } from "@api/apiClient";
  export const PostPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const sortBy = searchParams.get("sortBy") || "newest";
  const tags = searchParams.getAll("tags");

  const {
    data: posts,
    isPending,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
  } = usePostsQuery({
    limit: 20,
    title: searchQuery,
    sortBy: sortBy as SortBy,
    tags: tags,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isPending) {
    return <PostSkeleton />;
  }
  


  return (
    <>
      {error && (
        <ApiErrorModal
          statusCode={(error as any).response.status}
          message={(error as any).response.data.error}
        />
      )}
      <div className="space-y-8">
        {/* Selectors Row */}
        <div className="flex items-start gap-8 flex-wrap">
          <TypeSelector />
          <Separator.Root
            className="bg-base-content/20 w-[1px] h-[60px]"
            orientation="vertical"
          />
          <SortSelector />
        </div>

        {/* Tag List */}
        <TagList />

        {!error &&
          posts.map((post) => (
            <PostCard key={post.id} post={post}>
              <Header />
              <Title />
              <Images />
              <Tags />
              <Footer />
            </PostCard>
          ))}

        {isFetchingNextPage && <PostSkeleton />}
        {!hasNextPage && !isPending && (
          <div className="text-center text-gray-500 mt-10">No more posts</div>
        )}
        {hasNextPage && <div ref={ref} className="h-10" />}
      </div>
    </>
  );
};
