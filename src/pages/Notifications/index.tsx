import { useEffect } from "react";
import { useNotificationsQuery } from "@api/notifications/queries";
import { useInView } from "react-intersection-observer";
import { NotificationCard } from "@common/NotificationCard/NotificationCard";

import NotificationsSkeleton from "@common/Skeletons/NotificationsSkeleton";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import Container from "@common/NotificationCard/Container";
import Content from "@common/NotificationCard/Content";

const MAX_NOTIFICATIONS = 5;

const NotificationsPage = () => {
  const {
    data: notifications,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useNotificationsQuery({
    limit: MAX_NOTIFICATIONS,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isPending) {
    return <NotificationsSkeleton />;
  }
  if (error)
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className=" flex flex-col gap-4">
        {notifications.map((notification) => (
          <NotificationCard notification={notification} key={notification.id}>
            <Container>
              <Content />
            </Container>
          </NotificationCard>
        ))}
      </div>

      {isFetchingNextPage && <NotificationsSkeleton />}
      {!hasNextPage && (
        <div className="text-center text-gray-500 mt-10">
          No more notifications
        </div>
      )}
      <div ref={ref} className="h-10" />
    </div>
  );
};

export default NotificationsPage;
