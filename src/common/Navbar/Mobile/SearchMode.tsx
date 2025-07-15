import NavLayout from "@common/Navbar/Layout";
import { GoArrowLeft } from "react-icons/go";

import SearchComponent from "@common/Navbar/SearchComponent";
import Button from "@common/Button";

function SearchMode({
  setShowSearchMode,
}: {
  setShowSearchMode: (isSearchOpen: boolean) => void;
}) {
  return (
    <NavLayout
      left={
        <Button
          variant="base-3"
          renderIcon={(props) => <GoArrowLeft size={props.iconSize} />}
          onClick={() => setShowSearchMode(false)}
        />
      }
      center={
        <div className="flex-1 w-full min-w-0">
          <div className="w-full">
            <SearchComponent />
          </div>
        </div>
      }
    />
  );
}

export default SearchMode;
