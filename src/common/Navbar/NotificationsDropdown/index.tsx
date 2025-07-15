import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import NotificationBadge from "@common/Navbar/NotificationsDropdown/NotificationBadge";
import { Notifications } from "@common/Navbar/NotificationsDropdown/Notifications";
import CurrentUserProfileImage from "@common/CurrentUserProfileImage";

export function NotificationsDropdown() {


  return (
    <>
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger>
          <div className="cursor-pointer relative">
            <CurrentUserProfileImage />
            <NotificationBadge />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="bg-base-100 rounded-lg shadow-lg min-w-[320px] p-2 z-50"
            align="end"
            sideOffset={5}
          >
            <Notifications />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
}
