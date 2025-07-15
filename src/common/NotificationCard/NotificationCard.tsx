import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  getRedirectPath,
  getRedirectMetaData,
} from "./transformToRedirectPath";
import { Notification } from "@api/notifications/types";

interface NotificationContextType {
  notification: Notification;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export function useNotificationContext() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationCard"
    );
  }
  return context;
}

interface NotificationCardProps {
  children: React.ReactNode;
  notification: Notification;
}

export function NotificationCard({
  children,
  notification,
}: NotificationCardProps) {
  const navigate = useNavigate();

      return (
    <NotificationContext.Provider value={{ notification }}>
      <div
        onClick={() =>
          navigate(
            getRedirectPath(notification),
            getRedirectMetaData(notification)
          )
        }
      >
        {children}
      </div>
    </NotificationContext.Provider>
  );
}
