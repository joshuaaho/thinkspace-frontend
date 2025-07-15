import { useInfiniteQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
// import { fetchNotifications, getUnreadCount } from "@api/notifications/request";
import { notificationDtoToNotification } from "@api/notifications/mapper";
// import { GetNotificationsRequest } from "@api/notifications/types";
import { useAccessToken } from "@store/auth";
import { axiosPrivate } from "@api/axios";
import { QueryNotificationsCommand } from "@api/apiClient";
export const useNotificationsQuery = ({ limit }: QueryNotificationsCommand) => {
  const accessToken = useAccessToken();
  return useInfiniteQuery({
    queryKey: ["notifications"],
    queryFn: async ({ pageParam }) =>
      axiosPrivate.notifications
        .handleQuery({ limit, offset: pageParam })
        .then((res) => res.data),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length > 0 ? lastPageParam + lastPage.length : null;
    },
    initialPageParam: 0,
    select: (data) =>
      data.pages
        .flat()
        .map((notificationDto) =>
          notificationDtoToNotification(notificationDto)
        ),
    enabled: !!accessToken,
  });
};

export const useUnreadCountQuery = () => {
  const accessToken = useAccessToken();
  return useQuery({
    queryKey: ["notifications", "unread-count"],
    queryFn: () =>
      axiosPrivate.notifications
        .handleGetUnreadCount()
        .then((res) => res.data.unreadCount),
    enabled: !!accessToken,
    // select: (data) => data.data.unreadCount,
  });
};
