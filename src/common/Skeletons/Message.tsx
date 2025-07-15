import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MessageSkeleton() {
  return (
    <div className="space-y-4 p-4">
      {/* Outgoing message */}
      <div className="flex justify-end">
        <div className="max-w-[70%]">
          <Skeleton 
            width={200} 
            height={36} 
            borderRadius={16}
            style={{ marginLeft: 'auto' }}
          />
          <div className="text-right mt-1">
            <Skeleton width={40} height={12} style={{ marginLeft: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Incoming message with avatar */}
      <div className="flex items-end gap-2">
        <Skeleton circle width={32} height={32} />
        <div className="max-w-[70%]">
          <Skeleton width={180} height={36} borderRadius={16} />
          <div className="mt-1">
            <Skeleton width={40} height={12} />
          </div>
        </div>
      </div>

      {/* Outgoing message */}
      <div className="flex justify-end">
        <div className="max-w-[70%]">
          <Skeleton 
            width={150} 
            height={36} 
            borderRadius={16}
            style={{ marginLeft: 'auto' }}
          />
          <div className="text-right mt-1">
            <Skeleton width={40} height={12} style={{ marginLeft: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Incoming message with avatar */}
      <div className="flex items-end gap-2">
        <Skeleton circle width={32} height={32} />
        <div className="max-w-[70%]">
          <Skeleton width={220} height={36} borderRadius={16} />
          <div className="mt-1">
            <Skeleton width={40} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageSkeleton; 