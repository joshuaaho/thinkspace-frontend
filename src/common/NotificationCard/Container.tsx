import { useNotificationContext } from "@common/NotificationCard/NotificationCard";

type ContainerProps = {
  children: React.ReactNode;
}

const ReadContainer = ({ children }: ContainerProps) => {
  return  <div
      className={`p-4 hover:bg-base-200 cursor-pointer transition-colors`}
    >
      {children}
    </div>;
}

const UnreadContainer = ({ children }: ContainerProps) => {
  return  <div
      className={`p-4 hover:bg-base-200 cursor-pointer transition-colors bg-base-200`}
    >
      {children}
  </div>;
  
}


const Container = ({ children }: ContainerProps) => {
  const { notification } = useNotificationContext();
  
  if (notification.isRead) {
    return <ReadContainer>{children}</ReadContainer>;
  }
  return <UnreadContainer>{children}</UnreadContainer>;
  

}

export default Container;