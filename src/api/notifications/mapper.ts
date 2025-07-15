import { NotificationDto, Notification } from "@api/notifications/types";
import { formatDate } from "@api/utils";



export function notificationDtoToNotification(notificationDto: NotificationDto): Notification {
  return {
    ...notificationDto,
    createdAt: formatDate(notificationDto.createdAt)
  };
} 