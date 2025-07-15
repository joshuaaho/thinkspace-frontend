import { createContext, useContext } from "react";
import {GetChatListResponse} from "@api/apiClient"

interface ChatListCardContextType {
  chat: GetChatListResponse[number];
}

const ChatListCardContext = createContext<ChatListCardContextType | undefined>(undefined);

export function useChatListCardContext() {
  const context = useContext(ChatListCardContext);
  if (!context) {
    throw new Error("useChatListCardContext must be used within a ChatListCard");
  }
  return context;
}

interface ChatListCardProps {
  children: React.ReactNode;
  chat: GetChatListResponse[number];
}

export function ChatListCard({ children, chat }: ChatListCardProps) {


  return (
    <ChatListCardContext.Provider value={{ chat }}>
     
        {children}

    </ChatListCardContext.Provider>
  );
}
