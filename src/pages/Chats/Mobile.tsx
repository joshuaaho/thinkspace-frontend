import ChatList from "@pages/Chats/Mobile/ChatList";
import Chat from "@pages/Chats/ChatContainer";


import BackArrow from "@pages/Chats/Mobile/BackArrow";
import ChatHeader from "@pages/Chats/ChatHeader";
import { useMobileChatContext } from "@pages/Chats/Mobile/ChatContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Mobile = () => {
  const { currentChat,setCurrentChat } = useMobileChatContext();
  
    const {state} = useLocation();

  useEffect(() => {

    if(state){
      setCurrentChat(state.userId);
    }
  }, [state]);


  if (currentChat) {
    return (
      <div className="flex flex-col h-[calc(100vh-5rem)]">
        <div className="flex items-center border-b border-base-300 bg-base-100">
          <BackArrow />
          <ChatHeader selectedUser={currentChat} />
        </div>
        <div className="flex-1 ">
          <Chat selectedUser={currentChat} />
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-5rem)]">
      <ChatList />
    </div>
  );
};

export default Mobile;
