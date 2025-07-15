import { useProfile } from "@pages/Profile/ProfileContext";

export function ProfileStats() {
  const { user } = useProfile();
  
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <div className="flex justify-center gap-10">
          <div className="text-center">
            <div className="text-2xl font-bold">{user.followCount}</div>
            <div className="text-sm text-base-content/70">Followers</div>
          </div>
         
        </div>
      </div>
    </div>
  );
} 