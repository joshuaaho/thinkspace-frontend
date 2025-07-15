
interface ProfileImageProps {
  src: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showRing?: boolean;
}

function ProfileImage({ src, size = 'md', className = '', showRing = false }: ProfileImageProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32'
  };

  const ringClasses = showRing ? 'ring ring-primary ring-offset-2 ring-offset-base-100' : '';

  return (
    <div className={`avatar ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full ${ringClasses}`}>
        <img src={src} alt="Profile" className="object-cover" />
      </div>
    </div>
  );
}

export default ProfileImage;