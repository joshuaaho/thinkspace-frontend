
import React from "react";
import { useChatListCardContext } from "@pages/Chats/ChatListCard";
import { useDesktopChatContext } from "@pages/Chats/Desktop/ChatContext";

const SelectedChatListCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`p-4 border-b border-base-300 hover:bg-base-200 cursor-pointer bg-base-200`}
    >
      {children}
    </div>
  );
};

const UnselectedChatListCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { setUserToChatWith } = useDesktopChatContext();
  const { chat } = useChatListCardContext();

  return (
    <div
      className={`p-4 border-b border-base-300 hover:bg-base-200 cursor-pointer`}
      onClick={() => {

        setUserToChatWith(chat.otherParticipantId);
  
      }}
    >
      {children}
    </div>
  );
};

const ChatListCardContainer = ({ children }: { children: React.ReactNode }) => {
  const { currentChat } = useDesktopChatContext();
  const { chat } = useChatListCardContext();
  if (currentChat === chat.otherParticipantId) {
    return (
      <SelectedChatListCardContainer>{children}</SelectedChatListCardContainer>
    );
  }

  return (

      <UnselectedChatListCardContainer>
        {children}
      </UnselectedChatListCardContainer>

  );
};

export default ChatListCardContainer;
