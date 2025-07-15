import { createContext, useContext, useState } from "react";
import { Comment } from "@api/comments/types";

interface CommentCardProps {
  comment: Comment;
  children: React.ReactNode;
}

export interface CommentContextType {
  comment: Comment;
  setFormType: (formType: "reply" | "edit" | null) => void;
  setShowReplies: (showReplies: any) => void;
  showReplies: boolean;
  formType: "reply" | "edit" | null;
}

export const CommentContext = createContext<CommentContextType | undefined>(
  undefined
);

export function useCommentContext() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useCommentContext must be used within a CommentProvider");
  }
  return context;
}

export const Card = ({ comment, children }: CommentCardProps) => {
  const [showReplies, setShowReplies] = useState(false);
  const [formType, setFormType] = useState<"reply" | "edit" | null>(null);

  const contextValue = {
    comment,
    setFormType,
    setShowReplies,
    formType,
    showReplies,
  };

  return (
    <CommentContext.Provider value={contextValue}>
      <div className="card bg-base-100 mb-6 border-base-200 border-1">
        <div className="card-body p-4">{children}</div>
      </div>
    </CommentContext.Provider>
  );
};

export default Card;