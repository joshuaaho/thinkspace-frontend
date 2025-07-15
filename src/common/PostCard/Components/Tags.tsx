import { usePostContext } from "@common/PostCard";
import Tag from "@common/Tag";

const Tags = () => {
  const { post } = usePostContext();
  return (
    <div className="flex flex-wrap gap-2">
      {post.tags.map((tag,index) => <Tag key={index}>{tag}</Tag>)}
    </div>
  );
};

export default Tags;
