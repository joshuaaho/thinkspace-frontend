
function SearchSkeleton() {
  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-neutral rounded-lg shadow-lg border border-neutral-content/20 max-h-[400px] overflow-y-auto z-50">
      {/* Generate 3 skeleton cards */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="p-4 border-b border-neutral-content/20">
          <div className="flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="w-10 h-10 rounded-full bg-neutral-content/20 animate-pulse" />
            
            <div className="flex-1">
              {/* Title skeleton */}
              <div className="h-4 bg-neutral-content/20 rounded w-3/4 mb-2 animate-pulse" />
              
              {/* Username skeleton */}
              <div className="h-3 bg-neutral-content/20 rounded w-1/4 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchSkeleton; 