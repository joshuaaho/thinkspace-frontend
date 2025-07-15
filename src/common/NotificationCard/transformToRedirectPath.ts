import type { Notification } from "@api/notifications/types";

function getRedirectPath(notification: Notification) {
  if (notification.redirectToResourceType === "messages") {
    return `/messages`;
  }
  return `/${notification.redirectToResourceType}/${notification.resourceId}`;
}

function getRedirectMetaData(notification: Notification) {
  if (notification.redirectToResourceType === "messages") {
    return {
      state: { userId: notification.resourceId },
    };
  }
  return;
}

export { getRedirectPath, getRedirectMetaData };
