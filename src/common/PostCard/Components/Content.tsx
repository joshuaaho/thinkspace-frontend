import { usePostContext } from "@common/PostCard";

function Content() {
  const { post } = usePostContext();
  return (
    <div className="p-2" dangerouslySetInnerHTML={{ __html: post.content }} />
  );
}

export default Content;
