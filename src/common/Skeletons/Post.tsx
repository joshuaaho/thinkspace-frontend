function Post() {
    return (
      <div className="bg-base-200 max-w-5xl mx-auto rounded-lg flex flex-col gap-5 shadow-sm p-7 mb-10">
        {/* Post Header Skeleton */}
        <div className="flex items-center gap-3 p-2">
          <div className="skeleton w-12 h-12 rounded-full"></div>
          <div className="space-y-2">
            <div className="skeleton h-5 w-32"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>
        </div>
  
        {/* Post Title */}
        <div className="p-2">
          <div className="skeleton h-7 w-3/4"></div>
        </div>
  
        {/* Post Images */}
        <div className="w-full">
          <div className="skeleton h-[200px] rounded-lg w-full"></div>
        </div>
  
        {/* Post Footer */}
        <div className="flex w-full gap-4">
          <div className="skeleton h-10 flex-1 rounded-lg"></div>
          <div className="skeleton h-10 flex-1 rounded-lg"></div>
        </div>
      </div>
    );
  }
  
export default Post;
