import ProfileImg from "@common/ProfileImage";
import { FaUserPlus, FaMessage, FaUserMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { ProfileBasicInfo } from "@pages/Profile/Header/ProfileBasicInfo";
import { ProfileLocationInfo } from "@pages/Profile/Header/ProfileLocationInfo";
import { useProfile } from "@pages/Profile/ProfileContext";
import Button from "@common/Button";
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "@api/user/mutation";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import { FiSettings } from "react-icons/fi";
import withAuthorization from "@hoc/withAuthorization";

const ButtonWithAuthorization = withAuthorization(Button);


export function ProfileHeader() {
  const navigate = useNavigate();
  const { mutate: followUser, error: followUserError } =
    useFollowUserMutation();
  const { mutate: unfollowUser, error: unfollowUserError } =
    useUnfollowUserMutation();
  const { user: profileUser } = useProfile();

  const handleMessageClick = () => {
    navigate("/messages", { state: { userId: profileUser.id } });
  };

  
  return (
    <div className="bg-base-200 rounded-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <ProfileImg src={profileUser.profileImgUrl} size="lg" />
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <ProfileBasicInfo />
            <div className="flex gap-2">
              {profileUser.isFollowedByCurrentUser && (
                <ButtonWithAuthorization
                  renderIcon={(props) => <FaUserMinus size={props.iconSize} />}
                  onClick={() => unfollowUser(profileUser.id)}
                />
              )}
              {!profileUser.isFollowedByCurrentUser &&
                !profileUser.isCurrentUser && (
                  <ButtonWithAuthorization
                    renderIcon={(props) => <FaUserPlus size={props.iconSize} />}
                    onClick={() => followUser(profileUser.id)}
                />
                )}
              
              {!profileUser.isCurrentUser && <ButtonWithAuthorization
                renderIcon={(props) => <FaMessage size={props.iconSize} />}
                onClick={handleMessageClick}
              />}
              
              {profileUser.isCurrentUser && <ButtonWithAuthorization
                renderIcon={(props) => <FiSettings size={props.iconSize} />}
                onClick={() => navigate("/settings")}
              />}
            </div>
          </div>
          <ProfileLocationInfo />
        </div>
      </div>
      {followUserError && (
        <ApiErrorModal
          statusCode={(followUserError as any).response.status}
          message={(followUserError as any).response.data.error}
        />
      )}
      {unfollowUserError && (
        <ApiErrorModal
          statusCode={(unfollowUserError as any).response.status}
          message={(unfollowUserError as any).response.data.error}
        />
      )}
    </div>
  );
}
