import { useWindowSize } from "@uidotdev/usehooks";

import Mobile from "@pages/Chats/Mobile";
import Desktop from "@pages/Chats/Desktop";
import { ChatProvider as DesktopChatProvider } from "@pages/Chats/Desktop/ChatContext";
import { ChatProvider as MobileChatProvider } from "@pages/Chats/Mobile/ChatContext";

function ChatsPage() {
  const { width } = useWindowSize();

  if (width && width < 768) {
    return (
      <div className="-mt-20">
        <MobileChatProvider>
          <Mobile />
        </MobileChatProvider>
      </div>
    );
  }
  return (
    <div className="-mt-20">
      <DesktopChatProvider>
        <Desktop />
      </DesktopChatProvider>
    </div>
  );
}

export default ChatsPage;
