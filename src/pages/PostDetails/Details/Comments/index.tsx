import { useCommentsQuery } from "@api/comments/queries";
import Content from "@common/CommentCard/Content";
import Header from "@common/CommentCard/Header";
import useRequiredParams from "@hooks/useRequiredParams";

import { Card } from "@common/CommentCard";
import Footer from "@pages/PostDetails/Details/Comments/Footer";
import Replies from "@pages/PostDetails/Details/Comments/Replies";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CommentSkeleton } from "@common/Skeletons";
import Action from "@pages/PostDetails/Details/Comments/Action";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { formCommentTree } from "@api/comments/mapper";
import CommentSortDropdown from "./CommentSortDropdown";
import { SortBy } from "@api/apiClient";

type PostDetailParams = {
  postId: string;
};

const Comments = () => {
  const { postId } = useRequiredParams<PostDetailParams>();
  
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.Newest);
  const {
    data: comments,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isPending,
    error,
  } = useCommentsQuery({
    limit: 10,
    postId,
    sortBy,
  });
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isPending || isFetchingNextPage) return <CommentSkeleton />;

  if (error)
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );


  return (
    <>
      <div className="max-w-5xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-base-content">
            Comments ({comments.length})
          </h2>
          <CommentSortDropdown currentSort={sortBy} onSortChange={setSortBy} />
        </div>
      </div>
      {formCommentTree(comments).map((comment, index) => (
        <div key={index} className="space-y-4 max-w-5xl mx-auto ">
          <Card key={comment.id} comment={comment}>
            <Header />
            <Content />
            <Footer />
            <Action />
            <Replies />
          </Card>
        </div>
      ))}
      {!hasNextPage && (
        <div className="text-center text-gray-500 mt-10">No more comments</div>
      )}
      <div ref={ref} className="h-10" />
    </>
  );
};

export default Comments;
