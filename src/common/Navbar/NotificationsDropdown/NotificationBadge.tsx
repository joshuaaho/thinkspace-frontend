import { useUnreadCountQuery } from "@api/notifications/queries";

import ApiErrorModal from "@common/Modals/ApiErrorModal";


function NotificationBadge() {
  const {
    data: unreadCount,
    error,
    isPending,
  } = useUnreadCountQuery();

  if (error)
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );

  if (isPending) {
    return null;
  }

  return (
    <>
      {unreadCount > 0 && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-base-100" />
      )}
    </>
  );
}

export default NotificationBadge;
