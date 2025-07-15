//Prior to TSOA support
// import { axiosPrivate } from "@api/axios";
// import {
//   GetNotificationsRequest,
//   MarkNotificationAsReadRequest,
//   NotificationDto,
// } from "@api/notifications/types";

// export const fetchNotifications = async (
//   params: GetNotificationsRequest
// ): Promise<NotificationDto[]> => {
//   const response = await axiosPrivate.get("/notifications", {
//     params,
//   });
//   return response.data;
// };

// export const markNotificationAsRead = async (
//   body: MarkNotificationAsReadRequest
// ): Promise<void> => {
//   await axiosPrivate.post(`/notifications/read`, body);
// };

// export const getUnreadCount = async (): Promise<number> => {
//   const response = await axiosPrivate.get(`/notifications/unread`);
//   return response.data.unreadCount;
// };
