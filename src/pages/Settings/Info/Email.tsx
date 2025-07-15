import { FiMail } from "react-icons/fi";

type EmailProps = {
  email: string;
};

const Email = ({ email }: EmailProps) => {
  return (
    <div className="text-m text-gray-500 mt-2 flex items-start gap-2 max-w-xs break-words">
      <FiMail className="w-4 h-4 mt-1 flex-shrink-0" />
      <span className="break-all">{email}</span>
    </div>
  );
};

export default Email;
