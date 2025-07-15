const NotificationsSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-base-200 p-4 rounded-lg">
          <div className="flex gap-3 items-start">
            <div className="w-12 h-12 bg-base-300 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-base-300 rounded w-3/4" />
              <div className="h-3 bg-base-300 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsSkeleton; 