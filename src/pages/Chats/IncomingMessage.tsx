
import ProfileImage from "@common/ProfileImage";

interface IncomingMessageProps {
  content: string;
  createdAt: string;
  profileImageUrl: string;
}

export function IncomingMessage({ content, createdAt, profileImageUrl }: IncomingMessageProps) {
  return (
    <div className="flex gap-3 mb-4">
      <ProfileImage src={profileImageUrl} size="sm" />
      <div className="flex flex-col">
        <div className="px-4 py-2 rounded-2xl max-w-md bg-base-200 rounded-tl-none">
          <p>{content}</p>
        </div>
        <span className="text-xs text-base-content/70 mt-1">{createdAt}</span>
      </div>
    </div>
  );
}

export default IncomingMessage