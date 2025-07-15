import { useCurrentUserQuery } from "@api/user/query";
import { useEffect } from "react";

import { Outlet } from "react-router-dom";
import React from "react";

const ThemeMiddleware: React.FC = () => {

  const { data: user } = useCurrentUserQuery();

  useEffect(() => {
    
    if ( !user?.themePreference) {
      return;
    }
    


    switch (user.themePreference) {
      case "light":
        document.documentElement.setAttribute("data-theme", "lofi");
        break;
      case "dark":
        document.documentElement.setAttribute("data-theme", "night");
        break;
      case "system":
        document.documentElement.removeAttribute("data-theme");
        break;
    }
  }, [user?.themePreference]);

  return <Outlet />;
};

export default ThemeMiddleware; 