import { FiClock, FiTrendingUp, FiArrowUp } from "react-icons/fi";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "@common/Button";
import { SortBy } from "@api/apiClient";

interface CommentSortDropdownProps {
  currentSort: SortBy;
  onSortChange?: (sort: SortBy) => void;
}

function CommentSortDropdown({
  currentSort,
  onSortChange,
}: CommentSortDropdownProps) {
  return (
    <DropdownMenu.Root modal={false}>
      {currentSort === SortBy.Newest && (
        <DropdownMenu.Trigger asChild>
          <Button
            variant="base-1"
            size="sm"
            className="px-3 py-3 shadow-md w-[180px] justify-start text-base"
            renderIcon={(props) => <FiClock size={props.iconSize} />}
          >
            Newest
          </Button>
        </DropdownMenu.Trigger>
      )}
      {currentSort === SortBy.Oldest && (
        <DropdownMenu.Trigger asChild>
          <Button
            variant="base-1"
            size="sm"
            className="px-3 py-3 shadow-md w-[180px] justify-start text-base"
            renderIcon={(props) => <FiArrowUp size={props.iconSize} />}
          >
            Oldest
          </Button>
        </DropdownMenu.Trigger>
      )}
      {currentSort === SortBy.MostLiked && (
        <DropdownMenu.Trigger asChild>
          <Button
            variant="base-1"
            size="sm"
            className="px-3 py-3 shadow-md w-[180px] justify-start text-base"
            renderIcon={(props) => <FiTrendingUp size={props.iconSize} />}
          >
            Most Liked
          </Button>
        </DropdownMenu.Trigger>
      )}

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-base-100 rounded-lg shadow-xl min-w-[180px] p-2 z-50"
          align="end"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="flex items-center gap-2 p-3 text-base-content hover:bg-base-200 rounded-md cursor-pointer outline-none"
            onClick={() => onSortChange?.(SortBy.Newest)}
          >
            <FiClock size={16} />
            Newest
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="flex items-center gap-2 p-3 text-base-content hover:bg-base-200 rounded-md cursor-pointer outline-none"
            onClick={() => onSortChange?.(SortBy.Oldest)}
          >
            <FiArrowUp size={16} />
            Oldest
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="flex items-center gap-2 p-3 text-base-content hover:bg-base-200 rounded-md cursor-pointer outline-none"
            onClick={() => onSortChange?.(SortBy.MostLiked)}
          >
            <FiTrendingUp size={16} />
            Most Liked
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default CommentSortDropdown;
