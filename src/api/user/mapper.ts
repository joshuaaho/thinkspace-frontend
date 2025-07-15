import { User, UserDto } from "@api/user/types";
import { queryClient } from "@src/queryClient";

export function userDtoToUser(dto: UserDto): User {
  const currentUser = queryClient.getQueryData<UserDto>(["users", "me"]);

  return {
    id: dto.id,
    username: dto.username,
    profileImgUrl: dto.profileImgUrl,
    bio: dto.bio,
    education: dto.education,
    interest: dto.interest,
    location: dto.location,
    themePreference: dto.themePreference,
    followCount: dto.followedBy.length,
    isFollowedByCurrentUser: currentUser
      ? dto.followedBy.includes(currentUser.id)
      : false,
    work: dto.work,
    email: dto.email,
    isCurrentUser: currentUser?.id === dto.id,
  };
}
