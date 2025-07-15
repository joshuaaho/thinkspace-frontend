import { useEffect } from "react";
import MessageInput from "@pages/Chats/MessageInput";
import Send from "@pages/Chats/Send";
import MessageFormProvider from "@pages/Chats/MessageFormProvider";
import { IncomingMessage } from "@pages/Chats/IncomingMessage";
import { OutgoingMessage } from "@pages/Chats/OutgoingMessage";
import { useMarkNotificationAsReadMutation } from "@api/notifications/mutation";
import { useInView } from "react-intersection-observer";
import MessageSkeleton from "@common/Skeletons/Message";
import { useMessagesQuery } from "@api/messages/queries";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

type ChatProps = {
  selectedUser: string;
};

const MAX_MESSAGES = 10;
const Chat = ({ selectedUser }: ChatProps) => {
  const {
    data: messages,
    isFetchingNextPage,
    isPending,
    fetchNextPage,

    error,
  } = useMessagesQuery({
    otherParticipantId: selectedUser,
    limit: MAX_MESSAGES,
  });

  const { mutate: markNotificationAsRead } =
    useMarkNotificationAsReadMutation();
  useEffect(() => {
    if (selectedUser) {
      markNotificationAsRead({
        resourceId: selectedUser,
        redirectToResourceType: "messages",
      });
    }
  }, [selectedUser, messages]);



  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isPending) {
    return <MessageSkeleton />;
  }

  if (error) {
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );
  }
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-base-100">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse scroll-smooth">
        {messages.map((message) => (
          <div key={message.id}>
            {message.isFromCurrentUser ? (
              <OutgoingMessage
                content={message.content}
                createdAt={message.createdAt}
                profileImageUrl={message.profileImgUrl}
              />
            ) : (
              <IncomingMessage
                content={message.content}
                createdAt={message.createdAt}
                profileImageUrl={message.profileImgUrl}
              />
            )}
          </div>
        ))}

        {isFetchingNextPage && <MessageSkeleton />}
        <div ref={ref} className="h-10" />
      </div>
      <div className="p-4 border-t border-base-300 bg-base-100">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <MessageFormProvider>
            <MessageInput />
            <Send selectedUserId={selectedUser} />
          </MessageFormProvider>
        </div>
      </div>
    </div>
  );
};

export default Chat;
