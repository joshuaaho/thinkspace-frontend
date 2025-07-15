import { Link } from "react-router-dom";
import ProfileImg from "@common/ProfileImage";

type SearchCardProps = {
  id: string;
  title: string;
  username: string;
  postedAt: string;
  authorProfileImgUrl: string;
};



export function SearchCard({
  id,
  title,
  username,
  postedAt,
  authorProfileImgUrl,
}: SearchCardProps) {
  return (
    <Link
      to={`/posts/${id}`}
      className="block p-4 hover:bg-base-300 transition-colors"
    >
      <div className="flex items-center gap-3">
        <ProfileImg src={authorProfileImgUrl} size="sm" />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-base-content truncate">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-base-content/80">
            <span>{username}</span>
            <span>•</span>
            <span>{postedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchCard;
