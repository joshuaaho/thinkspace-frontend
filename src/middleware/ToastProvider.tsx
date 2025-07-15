import { Outlet } from "react-router-dom";
import Toast from "@common/Toast";

const ToastProvider = () => {

  return (
    <>
      <Toast />
      <Outlet />
    </>
  );
};

export default ToastProvider; 