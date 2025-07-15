// import { axiosPrivate, axiosPublic } from "@api/axios";
// import {
//   GetMeResponse,
//   GetUserByIdResponse,
//   GetUserByIdRequest,
//   QueryUserRequest,
//   QueryUserResponse,
//   EditUserRequest,
// } from "@api/user/types";

// export const fetchCurrentUser = async (): Promise<GetMeResponse> => {
//   const response = await axiosPrivate.get(`/users/me`);
//   return response.data;
// };

// export const updateCurrentUser = async (
//   body: EditUserRequest
// ): Promise<void> => {
//   await axiosPrivate.patch(`/users/me`, body);
// };

// export const fetchUserById = async ({
//   userId,
// }: GetUserByIdRequest): Promise<GetUserByIdResponse> => {
//   const response = await axiosPublic.get(`/users/${userId}`);
//   return response.data;
// };

// export const fetchUsers = async (
//   params: QueryUserRequest
// ): Promise<QueryUserResponse> => {
//   const response = await axiosPrivate.get(`/users`, {
//     params,
//   });
//   return response.data;
// };
