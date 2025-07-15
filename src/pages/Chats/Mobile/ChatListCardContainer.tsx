import React from "react";
import { useMobileChatContext } from "@pages/Chats/Mobile/ChatContext";
import { useChatListCardContext } from "@pages/Chats/ChatListCard";

const ChatListCardContainer = ({ children }: { children: React.ReactNode }) => {
    const { setCurrentChat } = useMobileChatContext();
    const { chat } = useChatListCardContext();
  return (
    <div
    className={`p-4 border-b border-base-300 hover:bg-base-200 cursor-pointer`}
      onClick={() => {
        setCurrentChat(chat.otherParticipantId);
  
      }}
    >
      {children}
    </div>
  );
};

export default ChatListCardContainer;
