import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export function ProfileSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-pulse">
      {/* Profile Header Skeleton */}
      <div className="bg-base-200 rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Profile Image Skeleton */}
          <div className="w-32 h-32 bg-base-300 rounded-full" />
          
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                {/* Username and Email Skeleton */}
                <div>
                  <div className="h-8 w-48 bg-base-300 rounded mb-2" />
                  <div className="h-4 w-32 bg-base-300 rounded" />
                </div>
                {/* Bio Skeleton */}
                <div className="h-4 w-full bg-base-300 rounded" />
              </div>
              {/* Action Buttons Skeleton */}
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-base-300 rounded-full" />
                <div className="w-10 h-10 bg-base-300 rounded-full" />
              </div>
            </div>
            {/* Location Info Skeleton */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-base-300" />
                <div className="h-4 w-24 bg-base-300 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-base-300" />
                <div className="h-4 w-32 bg-base-300 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-base-300" />
                <div className="h-4 w-28 bg-base-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column Skeleton */}
        <div className="md:col-span-1 space-y-6">
          {/* Stats Skeleton */}
          <div className="card bg-base-200">
            <div className="card-body">
              <div className="flex justify-center gap-10">
                <div className="text-center">
                  <div className="h-8 w-12 bg-base-300 rounded mb-2" />
                  <div className="h-4 w-16 bg-base-300 rounded" />
                </div>
                <div className="text-center">
                  <div className="h-8 w-12 bg-base-300 rounded mb-2" />
                  <div className="h-4 w-16 bg-base-300 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Interests Skeleton */}
          <div className="card bg-base-200">
            <div className="card-body">
              <div className="h-6 w-24 bg-base-300 rounded mb-4" />
              <div className="h-4 w-full bg-base-300 rounded" />
            </div>
          </div>
        </div>

        {/* Right Column Skeleton */}
        <div className="md:col-span-2 space-y-6">
          {/* Posts Section Skeleton */}
          <div className="card bg-base-200">
            <div className="card-body">
              <div className="h-6 w-32 bg-base-300 rounded mb-4" />
            </div>
          </div>
          
          {/* Post Cards Skeleton */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="card bg-base-200">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-base-300 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-base-300 rounded" />
                    <div className="h-3 w-24 bg-base-300 rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-base-300 rounded" />
                  <div className="h-4 w-3/4 bg-base-300 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 