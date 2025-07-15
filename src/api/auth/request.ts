//Prior to TSOA support
// import { axiosPrivate, axiosPublic } from "@api/axios";
// import { LoginRequest, AccessToken, RegisterRequest } from "@api/auth/types";

// export const refreshAccessToken = async (): Promise<AccessToken> => {
//   const response = await axiosPublic.post("/auth/refresh");
//   return response.data.accessToken    ;
// };

// export const logout = async (): Promise<void> => {
//   await axiosPrivate.post("/auth/logout");
// };

// export const register = async (data: RegisterRequest): Promise<void> => {
//   await axiosPublic.post("/auth/register", data);
// };

// export const login = async (data: LoginRequest): Promise<AccessToken> => {
//   const response = await axiosPublic.post("/auth/login", data);
  
//   return response.data.accessToken;
// };