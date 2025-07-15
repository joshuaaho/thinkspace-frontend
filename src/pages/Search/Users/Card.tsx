import { Link } from "react-router-dom";
import ProfileImg from "@common/ProfileImage";
import { User } from "@api/user/types";

interface UserCardProps {
  user: User;
}

const Card = ({ user }: UserCardProps) => {
  return (
    <Link
      to={`/users/${user.id}`}
      className="block p-4 hover:bg-base-200 transition-colors rounded-lg"
    >
      <div className="flex items-center gap-3">
        <ProfileImg src={user.profileImgUrl} size="md" />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium truncate">
            {user.username}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;