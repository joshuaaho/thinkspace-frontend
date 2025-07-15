import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
// import { createMessage } from "@api/messages/request";


import { axiosPrivate } from "@api/axios";
export const useCreateMessageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: axiosPrivate.messages.createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });
};
