import { FaPenFancy } from "react-icons/fa6";
import { useProfile } from "@pages/Profile/ProfileContext";

export function ProfileBasicInfo() {
  const { user } = useProfile();
  const { username, email, bio = "N/A" } = user;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">{username}</h1>
        <p className="text-base-content/70">{email}</p>
      </div>
      <div className="flex items-start gap-2">
        <FaPenFancy className="text-base-content/70 mt-1" />
        <p className="text-base-content/70">{bio}</p>
      </div>
    </div>
  );
} 