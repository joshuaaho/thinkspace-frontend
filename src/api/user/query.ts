import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
// import { fetchCurrentUser, fetchUserById, fetchUsers } from "@api/user/request";
// import { QueryUserRequest } from "@api/user/types";
import { userDtoToUser } from "@api/user/mapper";
import { useAccessToken } from "@store/auth";
import { axiosPrivate, axiosPublic } from "@api/axios";
import { QueryUsersCommand } from "@api/apiClient";
function useUserByIdQuery(userId: string) {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () =>
      axiosPrivate.users.handleGetById(userId).then((res) => res.data),
    select: (dto) => userDtoToUser(dto),
  });
}

function useCurrentUserQuery() {
  const accessToken = useAccessToken();
  return useQuery({
    queryKey: ["users", "me"],
    queryFn: () => axiosPrivate.me.handleGetMe().then((res) => res.data),
    select: (dto) => userDtoToUser(dto),
    enabled: !!accessToken,
  });
}

function useUserQuery({ limit, username }: QueryUsersCommand) {
  const result = useInfiniteQuery({
    queryKey: ["users", { username }],
    queryFn: async ({ pageParam }) =>
      axiosPublic.users
        .queryUsers({ limit, username, offset: pageParam })
        .then((res) => res.data),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length > 0 ? lastPageParam + lastPage.length : null;
    },
    initialPageParam: 0,
    select: (data) => data.pages.flat().map((dto) => userDtoToUser(dto)),
  });
  return result;
}

// function useUserByIdQuery(userId: string) {
//   return useQuery({
//     queryKey: ["user", userId],
//     queryFn: () => fetchUserById({ userId }),
//     select: (dto) => userDtoToUser(dto),

//   });
// }

// function  useCurrentUserQuery() {
//   const accessToken = useAccessToken();
//   return useQuery({
//     queryKey: ["user", "me"],
//     queryFn: () => fetchCurrentUser(),
//     select: (dto) => userDtoToUser(dto),
//     enabled: !!accessToken,
//   });
// }

// function useUserQuery({ limit, username }: QueryUserRequest) {
//   const result = useInfiniteQuery({
//     queryKey: ["users", username],
//     queryFn: async ({ pageParam }) =>
//       fetchUsers({ limit, username, offset: pageParam }),
//     getNextPageParam: (lastPage, allPages, lastPageParam) => {
//       return lastPage.length > 0 ? lastPageParam + lastPage.length : null;
//     },
//     initialPageParam: 0,
//     select: (data) => data.pages.flat().map((dto) => userDtoToUser(dto)),
//   });
//   return result;
// }

export { useUserByIdQuery, useCurrentUserQuery, useUserQuery };
