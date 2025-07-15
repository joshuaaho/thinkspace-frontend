interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg';
}

function ProfileImage({ size = 'md' }: ProfileImageProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className="avatar">
      <div className={`${sizeClasses[size]} rounded-full bg-base-300 animate-pulse`} />
    </div>
  );
}

export default ProfileImage;