// type QueryUserRequest = Partial<{
//   limit: number;
//   offset: number;
//   username: string;
// }>

// type GetUserByIdRequest = {
//   userId: string;
// }

type User = Omit<UserDto, "followedBy"> & {
  isFollowedByCurrentUser: boolean;
  followCount: number;
  isCurrentUser: boolean;
};

type UserDto = {
  id: string;
  username: string;
  email: string;
  profileImgUrl: string;
  bio?: string;
  work?: string;
  education?: string;
  interest?: string;
  location?: string;
  followedBy: string[];
  themePreference: "light" | "dark" | "system";
};
// type GetUserByIdResponse = UserDto;

// type GetMeResponse = UserDto;

// type QueryUserResponse = UserDto[];

// type EditUserRequest = {
//   bio?: string;
//   work?: string;
//   education?: string;
//   interest?: string;
//   location?: string;
//   profileImgUrl?: string;
//   themePreference?: "light" | "dark" | "system";
// }

export type {
  // GetUserByIdResponse,
  // GetMeResponse,
  // QueryUserResponse,
  // QueryUserRequest,
  // GetUserByIdRequest,
  UserDto,
  User,
  // EditUserRequest,
};
