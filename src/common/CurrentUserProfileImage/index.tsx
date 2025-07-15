import { useCurrentUserQuery } from "@api/user/query";
import ProfileImageSkeleton from "@common/Skeletons/ProfileImage";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import ProfileImage from "@common/ProfileImage";

const CurrentUserProfileImage = () => {
  const { data: currentUser, error, isPending } = useCurrentUserQuery();

  if (isPending) {
    return <ProfileImageSkeleton />;
  }

  return (
    <>
      {error && (
        <ApiErrorModal
          statusCode={(error as any).response.status}
          message={(error as any).response.data.error}
        />
      )}
      {!error && <ProfileImage src={currentUser.profileImgUrl} />}
    </>
  );
};

export default CurrentUserProfileImage;
