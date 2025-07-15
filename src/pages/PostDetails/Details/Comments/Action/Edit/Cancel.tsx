import Button from '@common/Button';
import { useCommentContext } from '@common/CommentCard';


const Cancel = () => {
  const { setFormType } = useCommentContext();
  return (
        <Button
          variant="base-2"
          onClick={() => {
            setFormType(null);
          }}
        >
          Cancel
        </Button>
  )
}

export default Cancel