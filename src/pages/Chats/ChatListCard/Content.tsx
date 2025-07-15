import ProfileImage from '@common/ProfileImage';

import { useChatListCardContext } from '@pages/Chats/ChatListCard';

const Content = () => {
    const {chat} = useChatListCardContext();  
  return (
    <div className="flex items-center space-x-3">
        <ProfileImage src={chat.profileImgUrl} size="sm" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-base-content truncate">
            {chat.otherParticipantUsername}
          </p>
          <p className="text-sm text-base-content/70 truncate">{chat.content}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-base-content/50">{chat.createdAt}</div>
        </div>
      </div>
  )
}

export default Content