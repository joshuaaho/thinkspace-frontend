import { useInfiniteQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
// import { fetchChatList, fetchMessages } from "@api/messages/request";
import { useAccessToken } from "@store/auth";
// import { GetMessagesCommand } from "@api/messages/types";
import { messageDtoToMessage } from "./mapper";
import { axiosPrivate } from "@api/axios";
import { QueryMessagesCommand } from "@api/apiClient";
import { formatDate } from "@api/utils";

export function useChatListQuery() {
  const accessToken = useAccessToken();
  return useQuery({
    queryKey: ["messages", "latest"],
    queryFn: axiosPrivate.chats.getChatList,
    select: (response) =>
      response.data.map((chat) => ({
        ...chat,
        createdAt: formatDate(chat.createdAt),
      })),
    enabled: !!accessToken,
  });
}

export function useMessagesQuery({
  limit,
  otherParticipantId,
}: QueryMessagesCommand) {
  const accessToken = useAccessToken();
  return useInfiniteQuery({
    queryKey: ["messages", { otherParticipantId }],
    queryFn: async ({ pageParam }) =>
      axiosPrivate.messages
        .queryMessages({ limit, offset: pageParam, otherParticipantId })
        .then((res) => res.data),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length > 0 ? lastPageParam + lastPage.length : null;
    },
    initialPageParam: 0,
    select: (data) => data.pages.flat().map(messageDtoToMessage),
    enabled: !!accessToken,
  });
}
