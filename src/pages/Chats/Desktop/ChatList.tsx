import { useChatListQuery } from "@api/messages/queries";
import { ChatListCard } from "@pages/Chats/ChatListCard";
import ChatListSkeleton from "@common/Skeletons/ChatList";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import ChatListCardContainer from "@pages/Chats/Desktop/ChatListCardContainer";
import Content from "@pages/Chats/ChatListCard/Content";
import { useEffect } from "react";
import { useDesktopChatContext } from "@pages/Chats/Desktop/ChatContext";

const ChatList = () => {

  const { data: latestChats, isPending, error } = useChatListQuery();
  const { setUserLastChattedWith } = useDesktopChatContext();
  useEffect(() => {
    if (latestChats && latestChats.length > 0) {
     
      setUserLastChattedWith(latestChats[0]?.otherParticipantId as string);
    }
  }, [latestChats,setUserLastChattedWith]);


  if (isPending) {
    return <ChatListSkeleton />;
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
    <div className="border-r border-base-300 bg-base-100">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-base-content">Messages</h2>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-8rem)]">
        {latestChats.map((message) => (
          <ChatListCard key={message.id} chat={message}>
            <ChatListCardContainer>
              <Content />
            </ChatListCardContainer>
          </ChatListCard>
        ))}
        {latestChats.length === 0 && (
          <div className="p-4 text-center text-base-content">You have no chats</div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
