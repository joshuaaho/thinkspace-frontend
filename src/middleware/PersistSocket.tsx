import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { socket } from "../socket";
import { useAccessToken } from "../store/auth";
import { queryClient } from "@src/queryClient";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
// import { Notification } from "@api/notifications/types";

function handleNewNotification() {
  queryClient.invalidateQueries({
    queryKey: ["notifications"],
    refetchType: "all",
  });
  queryClient.invalidateQueries({ queryKey: ["comments"], refetchType: "all" });
  queryClient.invalidateQueries({ queryKey: ["posts"], refetchType: "all" });
}

function handleNewChatMessage() {
  queryClient.invalidateQueries({ queryKey: ["messages"], refetchType: "all" });
}

const PersistSocket = () => {
  const [connectionFailure, setConnectionFailure] = useState(false);
  const [disconnected, setDisconnected] = useState(false);
  const accessToken = useAccessToken();
  
  useEffect(() => {

    if (accessToken) {
      socket.auth = {
        accessToken,
      };
      socket.connect();

      socket.on("connect", () => {
        console.log("Connected to socket");
      });
      socket.on("disconnect", (_reason) => {
        if (socket.active) {
          console.log("Disconnected from socket. Attempting to reconnect...");
        } else {
          setDisconnected(false);
        }
      });
      socket.on("connect_error", (_error) => {

        if (socket.active) {
          console.log("Connection failed. Reattempting...");
        } else {
          console.log("Connection denied by server. Reattempts are over.");
          setConnectionFailure(true);
        }
      });

      socket.io.on("reconnect_failed", () => {
        console.log("Reconnect failed. Reattempts are over");
        setConnectionFailure(true);
      });

      socket.on("newNotification", handleNewNotification);

      socket.on("newChatMessage", handleNewChatMessage);
    }

    return () => {

      socket.off("connect", () => {
        console.log("connected");
      });
      socket.off("disconnect", () => {
        console.log("disconnected");
      });

      socket.off("newNotification", handleNewNotification);
      socket.off("newChatMessage", handleNewChatMessage);
    };
  }, [accessToken]);

  return (
    <>
      {connectionFailure && (
        <ApiErrorModal
          statusCode={500}
          message="Unable to connect socket. Trying reloading the page again or wait until the server is back online. Real time features will not work."
        />
      )}
      {disconnected && (
        <ApiErrorModal
          statusCode={500}
          message="Disconnected from socket. Trying reloading the page again or wait until the server is back online. Real time features will not work."
        />
      )}
      <Outlet />
    </>
  );
};

export default PersistSocket;
