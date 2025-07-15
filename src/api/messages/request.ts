// import { axiosPrivate } from "@api/axios";
// import {
//   CreateMessageCommand,
//   GetChatListResponse,
//   GetMessagesCommand,
//   GetMessagesResponse,
// } from "@api/messages/types";

// export const fetchMessages = async (
//   params: GetMessagesCommand
// ): Promise<GetMessagesResponse> => {
//   const response = await axiosPrivate.get("/messages", {
//     params,
//   });
//   return response.data;
// };

// export const fetchChatList = async (): Promise<GetChatListResponse> => {
//   const response = await axiosPrivate.get("/messages/latest");
//   return response.data;
// };

// export const createMessage = async (
//   body: CreateMessageCommand
// ): Promise<void> => {
//   const response = await axiosPrivate.post("/messages", body);
//   return response.data;
// };
