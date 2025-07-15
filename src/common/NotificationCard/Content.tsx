import ProfileImage from '@common/ProfileImage'
import { useNotificationContext } from '@common/NotificationCard/NotificationCard';

const Content = () => {
    const { notification } = useNotificationContext();
    return (
      <div className="flex gap-3 items-start">
        <ProfileImage src={notification.fromProfileImgUrl} size="sm" />
        <div className="flex-1 min-w-0">
          <p className="text-sm">{notification.message}</p>
          <p className="text-xs text-base-content/60 mt-1">
            {notification.createdAt}
          </p>
        </div>
      </div>
    );
}

export default Content;