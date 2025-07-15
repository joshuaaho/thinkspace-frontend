import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "@api/posts/types";

interface PostContextType {
  post: Post;
}

const PostContext = createContext<PostContextType | undefined>(
  undefined
);

export function usePostContext() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
}

interface PostCardProps {
  children: React.ReactNode;
  post: Post;
}

export function PostCard({ children, post }: PostCardProps) {
  const navigate = useNavigate();
  return (
    <PostContext.Provider value={{ post }}>
      <div
        className="bg-base-200 max-w-5xl mx-auto rounded-lg flex flex-col gap-5 shadow-sm p-7 mb-10"
        onClick={() => navigate(`/posts/${post.id}`)}
    >
      {children}
    </div>
    </PostContext.Provider>
  );
}




