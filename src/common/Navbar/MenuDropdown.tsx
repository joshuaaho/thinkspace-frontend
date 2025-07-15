import {
  FiSettings,
  FiLogOut,
  FiMenu,
  FiMessageSquare,
  FiList,
  FiHome,
} from "react-icons/fi";
import { GrAdd } from "react-icons/gr";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "react-router-dom";
import Button from "@common/Button";

function MenuDropdown() {
  const navigate = useNavigate();

  return (
    <>
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger asChild>
          <Button
            className="ml-2"
            renderIcon={(props) => <FiMenu size={props.iconSize} role="menu" />}
            variant="base-3"
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="bg-base-100 rounded-lg shadow-lg min-w-[200px] p-2 z-50"
            align="end"
            sideOffset={5}
          >
            <DropdownMenu.Item
              className="flex items-center gap-2 p-2 text-base-content hover:bg-base-200 rounded-md cursor-pointer outline-none"
              onClick={() => navigate("/")}
            >
              <FiHome />
              Home
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex items-center gap-2 p-2 text-base-content hover:bg-base-200 rounded-md cursor-pointer outline-none"
              onClick={() => navigate("/create")}
            >
              <GrAdd />
              Create Post
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex items-center gap-2 p-2 text-base-content hover:bg-base-200 rounded-md cursor-pointer outline-none"
              onClick={() => navigate("/messages")}
            >
              <FiMessageSquare />
              Chats
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex items-center gap-2 p-2 text-base-content hover:bg-base-200 rounded-md cursor-pointer outline-none"
              onClick={() => navigate("/me/posts")}
            >
              <FiList />
              My Posts
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex items-center gap-2 p-2 text-base-content hover:bg-base-200 rounded-md cursor-pointer outline-none"
              onClick={() => navigate("/settings")}
            >
              <FiSettings />
              Settings
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="h-px bg-base-200 my-2" />

            <DropdownMenu.Separator className="h-px bg-base-200 my-2" />

            <DropdownMenu.Item
              className="flex items-center gap-2 p-2 text-error hover:bg-error/10 rounded-md cursor-pointer outline-none"
              onClick={() => {
                navigate("/logout_confirmation");
              }}
            >
              <FiLogOut />
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
}

export default MenuDropdown;
