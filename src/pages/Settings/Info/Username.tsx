
import { FiUser } from 'react-icons/fi'

type UsernameProps = {
  username: string;
};

const   Username = ({ username }: UsernameProps) => {
  return (
    <div className="text-m text-gray-500 mt-5 flex items-start gap-2 max-w-xs break-words">
      <FiUser className="w-4 h-4 mt-1 flex-shrink-0" />
      <span className="break-all">{username}</span>
    </div>
  );
};

export default Username;
