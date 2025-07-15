import { useCommentsQuery } from "@api/comments/queries";

import CommentSkeleton from "@common/Skeletons/Comment";
import { Card } from "@common/CommentCard";
import Header from "@common/CommentCard/Header";
import Content from "@common/CommentCard/Content";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { useProfile } from "@pages/Profile/ProfileContext";
import { formCommentTree } from "@api/comments/mapper";

const MAX_COMMENTS = 5;
export function ProfileComments() {
  const { user } = useProfile();
  const {
    data: comments,
    error,
    isPending,
  } = useCommentsQuery({
    authorId: user.id,
    limit: MAX_COMMENTS,
  });

  if (isPending) return <CommentSkeleton />;

  if (error) {
    return <ApiErrorModal
      statusCode={(error as any).response.status}
      message={(error as any).response.data.error}
    />;
  }
  return (
    <div className="space-y-6">
      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title mb-4">Latest Comments</h3>
        </div>
      </div>

      <div className="space-y-6">
        {formCommentTree(comments).map((comment) => (
          <Card key={comment.id} comment={comment}>
            <Header />
            <Content />
          </Card>
        ))}
      </div>
    </div>
  );
}
