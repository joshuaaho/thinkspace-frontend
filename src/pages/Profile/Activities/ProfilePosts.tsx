import { usePostsQuery } from "@api/posts/queries";
import { PostCard } from "@common/PostCard";
import { Header, Title } from "@common/PostCard/Components";
import Tags from "@common/PostCard/Components/Tags";
import { PostSkeleton } from "@common/Skeletons";

import ApiErrorModal from "@common/Modals/ApiErrorModal";

import { useProfile } from "@pages/Profile/ProfileContext";

const MAX_POSTS = 5;

export function ProfilePosts() {
  const { user } = useProfile();
  const {
    data: posts,
    isPending,

    error,
  } = usePostsQuery({ limit: MAX_POSTS, authorId: user.id });

  if (isPending) return <PostSkeleton />;

  if (error) {
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title mb-4">Latest Posts</h3>
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}>
            <Header />
            <Title />
            <Tags />
          </PostCard>
        ))}
      </div>
    </div>
  );
}
