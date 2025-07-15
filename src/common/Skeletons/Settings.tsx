import { ProfileImageSkeleton } from "./index";

export function SettingsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      {/* Profile Section */}
      <div className="card bg-base-200 mb-6">
        <div className="card-body">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <ProfileImageSkeleton size="lg" />
            <div className="flex-1 space-y-4 w-full">
              <div className="h-8 w-48 bg-base-300 rounded" />
              <div className="h-4 w-32 bg-base-300 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="card bg-base-200">
          <div className="card-body">
            <div className="h-6 w-32 bg-base-300 rounded mb-4" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="h-5 w-24 bg-base-300 rounded" />
                  <div className="h-10 w-32 bg-base-300 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card bg-base-200">
          <div className="card-body">
            <div className="h-6 w-40 bg-base-300 rounded mb-4" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="h-5 w-36 bg-base-300 rounded" />
                  <div className="h-6 w-12 bg-base-300 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="card bg-base-200">
          <div className="card-body">
            <div className="h-6 w-32 bg-base-300 rounded mb-4" />
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="h-5 w-40 bg-base-300 rounded" />
                  <div className="h-6 w-12 bg-base-300 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 