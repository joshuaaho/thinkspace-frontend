
import { useCommentContext } from '@common/CommentCard'   

const CommentContent = () => {
  const { comment } = useCommentContext();
  return (
    <p className="mt-1 ml-2">{comment.content}</p>
  )
}

export default CommentContent