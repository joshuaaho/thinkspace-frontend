

export function Comment() {
  return (
    <div className="card bg-base-100 max-w-5xl mx-auto">
      <div className="card-body p-4">
        {/* Header */}
        <div className="flex gap-3 ml-2">
          {/* Profile Image */}
          <div className="skeleton w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              {/* Username */}
              <div className="skeleton h-4 w-24" />
              {/* Date */}
              <div className="skeleton h-3 w-20" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-1 ml-2">
          <div className="skeleton h-4 w-3/4" />
          <div className="skeleton h-4 w-1/2 mt-2" />
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 mt-2">
          {/* Like Button */}
          <div className="skeleton h-8 w-16 rounded-lg" />
          {/* Reply Button */}
          <div className="skeleton h-8 w-16 rounded-lg" />
          {/* Show Replies Button */}
          <div className="skeleton h-8 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
} 

export default Comment;
