function UserCard() {
  return (
    <div className="bg-base-200 rounded-lg flex items-center gap-4 p-4 shadow-sm">
      {/* User Avatar */}
      <div className="skeleton w-16 h-16 rounded-full"></div>
      
      {/* User Info */}
      <div className="flex-1 space-y-2">
        <div className="skeleton h-5 w-32"></div>
        <div className="skeleton h-4 w-24"></div>
      </div>

      {/* Action Button */}
      <div className="skeleton h-10 w-24 rounded-lg"></div>
    </div>
  );
}

export default UserCard; 