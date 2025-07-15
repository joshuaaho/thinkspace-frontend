import { useUserByIdQuery } from "@api/user/query";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import ProfileImage from "@common/ProfileImage";

import ProfileImageSkeleton from "@common/Skeletons/ProfileImage";

type ChatHeaderProps = {
  selectedUser: string;
};

function ChatHeader({ selectedUser }: ChatHeaderProps) {

  
  const { data: user, isPending, error } = useUserByIdQuery(selectedUser);

  if (error) {
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );
  }

  if (isPending) {
    return (
      <div className="p-4 bg-base-100">
        <div className="flex items-center space-x-3">
          <ProfileImageSkeleton size="md" />
          <div>
            <div className="skeleton h-5 w-32"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-base-100">
      <div className="flex items-center space-x-3">
        <ProfileImage src={user.profileImgUrl} size="md" />
        <div>
          <h3 className="text-lg font-medium text-base-content">{user.username}</h3>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
