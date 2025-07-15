import  ProfileImg  from "@common/ProfileImage";
import { usePostContext } from "@common/PostCard";

function Header() {
  const { post } = usePostContext();
  return (
    <div className="flex items-center gap-3 p-2">
      <ProfileImg src={post.authorProfileImgUrl} size="md" />

      <div>
        <h3 className="font-medium">{post.authorUsername}</h3>
        <p className="text-sm text-gray-500">{post.createdAt}</p>
      </div>
    </div>
  );
}
export default Header;
