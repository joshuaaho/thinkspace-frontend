
import { IoArrowBack } from 'react-icons/io5'
import { useMobileChatContext } from '@pages/Chats/Mobile/ChatContext';

const BackArrow = () => {
    const {setCurrentChat} = useMobileChatContext();
  return (
     <div
        onClick={() => setCurrentChat(null)}
        className="p-4 cursor-pointer"
      >
        <IoArrowBack size={24} color="#374151" />
      </div>
  )
}

export default BackArrow