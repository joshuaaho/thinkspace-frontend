import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
// import { markNotificationAsRead } from "@api/notifications/request";
import { axiosPrivate } from "@api/axios";
export const useMarkNotificationAsReadMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: axiosPrivate.notifications.handleMarkAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};
