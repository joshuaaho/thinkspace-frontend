import NavLayout from "@common/Navbar/Layout";
import SearchComponent from "@common/Navbar/SearchComponent";
import { useAccessToken } from "@store/auth";
import MenuDropdown from "@common/Navbar/MenuDropdown";
import AppName from "@common/Navbar/AppName";
import GuestActions from "@common/Navbar/Desktop/GuestActions";
import { NotificationsDropdown } from "@common/Navbar/NotificationsDropdown";
function Navbar() {
  const accessToken = useAccessToken();

  return (
    <NavLayout
      left={<AppName />}
      center={<SearchComponent />}
      right={
        accessToken ? (
          <>
            <NotificationsDropdown /> <MenuDropdown />
          </>
        ) : (
          <GuestActions />
        )
      }
    />
  );
}

export default Navbar;
