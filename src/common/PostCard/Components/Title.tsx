import { usePostContext } from "@common/PostCard";

function Title() {
  const { post } = usePostContext();
  return <h3 className="font-bold text-lg p-2">{post.title}</h3>;
}

export default Title;
