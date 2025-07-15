export interface NotificationDto {
  id: string;
  fromProfileImgUrl: string;
  message: string;
  isRead: boolean;
  resourceId: string;
  redirectToResourceType: string;
  createdAt: string;
}

export type Notification = NotificationDto;

//Prior to TSOA support
// export type GetNotificationsResponse = NotificationDto[];

// export type GetNotificationsRequest = Partial<{
//   limit: number;
//   offset: number;
// }>;

// export type MarkNotificationAsReadRequest = Partial<{
//   resourceId: string;
//   redirectToResourceType: string;
// }>;

