import { ToastContainer } from "react-toastify";
import { useCurrentUserQuery } from "@api/user/query";

type UserThemeSetting = "light" | "dark" | "system";
type SystemTheme = "light" | "dark";

function getSystemTheme(): SystemTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function findUserThemeSetting(userTheme: UserThemeSetting) {
  if (userTheme === "system") {
    return getSystemTheme();
  }

  return userTheme;
}

function Toast() {
  const { data: user } = useCurrentUserQuery();


  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      closeOnClick
      theme={
        user ? findUserThemeSetting(user.themePreference) : getSystemTheme()
      }
    />
  );
}

export default Toast;
