import ChatList from "@pages/Chats/Desktop/ChatList";
import Chat from "@pages/Chats/ChatContainer";
import ChatHeader from "@pages/Chats/ChatHeader";


import PlaceHolder from "@pages/Chats/PlaceHolder";
import { useDesktopChatContext } from "@pages/Chats/Desktop/ChatContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Desktop = () => {
  const { setUserToChatWith,currentChat} = useDesktopChatContext();
  const {state} = useLocation();

  useEffect(() => {
    if(state){
      setUserToChatWith(state.userId);
    }
  }, [state]);



  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="w-80">
        <ChatList />
      </div>
      {currentChat && (
        <div className="flex-1 flex flex-col">
          <ChatHeader selectedUser={currentChat} />
          <Chat selectedUser={currentChat} />
        </div>
      )}

      {!currentChat && (
        <div className="flex-1 h-full">
          <PlaceHolder />
        </div>
      )}
    </div>
  );
};

export default Desktop;
