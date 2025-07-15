import { NotificationCard } from "@common/NotificationCard/NotificationCard";
import { useNotificationsQuery } from "@api/notifications/queries";

import Content from "@common/NotificationCard/Content";
import Container from "@common/NotificationCard/Container";
import NotificationsSkeleton from "@common/Skeletons/NotificationsSkeleton";
import Header from "@common/NotificationCard/Header";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import Footer from "@common/Navbar/NotificationsDropdown/Footer";

const MAX_NOTIFICATIONS = 5;
export function Notifications() {
  const {
    data: notifications,
    isPending,
    error,
  } = useNotificationsQuery({
    limit: MAX_NOTIFICATIONS,
  });

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

  
  const recentNotifications = notifications.slice(0, MAX_NOTIFICATIONS);
  
  return (
    <>
      <Header />
      <div className=" overflow-y-auto">
        {recentNotifications.map((notification) => (
          <NotificationCard notification={notification} key={notification.id}>
            <Container>
              <Content />
            </Container>
          </NotificationCard>
        ))}
      </div>
      <Footer />
    </>
  );
}
