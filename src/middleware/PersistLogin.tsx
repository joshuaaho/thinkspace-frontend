import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRefreshTokenMutation } from "@api/auth/mutations";
import { useAccessToken } from "@store/auth";


const LoadingPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-base-100">
      <div className="loading loading-spinner loading-lg text-primary" />
      <p className="mt-4 text-lg text-base-content font-medium">
        Logging you in...
      </p>
    </div>
  );
};

const PersistLogin = () => {
  const { mutateAsync: refresh } = useRefreshTokenMutation();
  const [attemptRefreshDone, setAttemptRefreshDone] = useState(false);
  const accessToken = useAccessToken();

  useEffect(() => {
    !accessToken
      ? refresh(undefined, {
          onSettled: () => setAttemptRefreshDone(true),
        })    
      : setAttemptRefreshDone(true);
  }, []);

  return <>{attemptRefreshDone ? <Outlet /> : <LoadingPage />}</>;
};

export default PersistLogin;
