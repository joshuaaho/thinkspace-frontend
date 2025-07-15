import ProfileImg from "@common/ProfileImage";
import { FaUserPlus, FaMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { ProfileBasicInfo } from "@pages/Profile/Header/ProfileBasicInfo";
import { ProfileLocationInfo } from "@pages/Profile/Header/ProfileLocationInfo";
import { useProfile } from "@pages/Profile/ProfileContext";


export function ProfileHeader() {
  const {user} = useProfile();
  const navigate = useNavigate();

  const handleMessageClick = () => {

    navigate(`/chats/${user.id}`, { state: { userId: user.id } });
  };

  return (
    <div className="bg-base-200 rounded-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <ProfileImg src={user.profileImgUrl} size="lg" />
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <ProfileBasicInfo 
           
            />
            <div className="flex gap-2">
              <button className="btn btn-ghost btn-circle" title="Follow">
                <FaUserPlus className="w-5 h-5" />
              </button>
              <button 
                className="btn btn-ghost btn-circle" 
                title="Message"
                onClick={handleMessageClick}
              >
                <FaMessage className="w-5 h-5" />
              </button>
            </div>
          </div>
          <ProfileLocationInfo 
         
          />
        </div>
      </div>
    </div>
  );
} 