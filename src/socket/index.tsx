import { io } from "socket.io-client";


  

export const socket = io(
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3033",
  {
    withCredentials: true,
    reconnectionAttempts: 3,
    autoConnect: false,
  }
);
