
import ProfileImage from "@common/ProfileImage";

interface OutgoingMessageProps {
  content: string;
  createdAt: string;
  profileImageUrl: string;
}

export function OutgoingMessage({ content, createdAt, profileImageUrl }: OutgoingMessageProps) {
  return (
    <div className="flex gap-3 mb-4 flex-row-reverse">
      <ProfileImage src={profileImageUrl} size="sm" />
      <div className="flex flex-col items-end">
        <div className="px-4 py-2 rounded-2xl max-w-md bg-primary text-primary-content rounded-tr-none">
          <p>{content}</p>
        </div>
        <span className="text-xs text-base-content/70 mt-1">{createdAt}</span>
      </div>
    </div>
  );
}