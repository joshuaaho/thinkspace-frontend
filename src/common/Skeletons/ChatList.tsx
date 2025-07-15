import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ChatListSkeleton() {
  return (
    <div className="border-r border-base-300 bg-base-100">
      <div className="p-4">
        <Skeleton width={100} height={24} />
      </div>
      <div className="overflow-y-auto h-[calc(100vh-8rem)]">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="p-4 border-b border-base-300">
            <div className="flex items-center space-x-3">
              {/* Profile Image */}
              <Skeleton circle width={40} height={40} />
              
              {/* Message Content */}
              <div className="flex-1 min-w-0">
                {/* Username */}
                <Skeleton width={120} height={16} className="mb-2" />
                {/* Message Text */}
                <Skeleton width={200} height={14} />
              </div>
              
              {/* Timestamp */}
              <div className="flex items-center">
                <Skeleton width={40} height={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatListSkeleton; 