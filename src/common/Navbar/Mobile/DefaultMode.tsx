import AppName from "@common/Navbar/AppName";

import NavLayout from "@common/Navbar/Layout";

import { FiSearch } from "react-icons/fi";
import MenuDropdown from "@common/Navbar/MenuDropdown";
import { useAccessToken } from "@store/auth";
import Button from "@common/Button";
import GuestActions from "@common/Navbar/Desktop/GuestActions";
import { NotificationsDropdown } from "@common/Navbar/NotificationsDropdown";
function DefaultMode({
  setShowSearchMode,
}: {
  setShowSearchMode: (isSearchOpen: boolean) => void;
}) {
  const accessToken = useAccessToken();

  return (
    <NavLayout
      left={<AppName />}
      right={
        <>
          <Button
            className="mr-4"
            variant="base-3"
            onClick={() => setShowSearchMode(true)}
            aria-label="Search"
            role="button"
            renderIcon={(props) => <FiSearch size={props.iconSize} />}
          />
          {accessToken && <><NotificationsDropdown /> <MenuDropdown /> </>}

          {!accessToken && <GuestActions />}
        </>
      }
    />
  );
}

export default DefaultMode;
