import { ProfileHeader } from "./Header/ProfileHeader";
import { ProfileStats } from "./Sidebar/ProfileStats";
import { ProfileInterests } from "@pages/Profile/Sidebar/ProfileInterests";
import { ProfilePosts } from "./Activities/ProfilePosts";
import { ProfileComments } from "./Activities/ProfileComments";
import { useUserByIdQuery } from "@api/user/query";
import useRequiredParams from "hooks/useRequiredParams";
import { ProfileSkeleton } from "@common/Skeletons/Profile";


import { ProfileProvider } from "./ProfileContext";
import ErrorPage from "@common/ErrorPage";

type ProfileParams = {
  id: string;
};

function ProfileContent() {
  const { id } = useRequiredParams<ProfileParams>();
  const {
    data: user,
    isPending,
    error,
  } = useUserByIdQuery(id);

  if (isPending) {
    return <ProfileSkeleton />;
  }

  if (error)
    return (
      <ErrorPage
        message={(error as any).response.data.error}
        statusCode={(error as any).response.status}
      />
    )


  return (
    <ProfileProvider user={user}>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4">
          <ProfileHeader />
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <div className="space-y-6">
                <ProfileStats />
                <ProfileInterests />
              </div>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="space-y-6">
                <div className="w-full">
                  <ProfilePosts />
                </div>
                <div className="w-full">
                  <ProfileComments />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileProvider>
  );
}

function ProfilePage() {
  return <ProfileContent />;
}

export default ProfilePage;
