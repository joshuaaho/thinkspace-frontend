import { useState } from "react";
import SearchMode from "@common/Navbar/Mobile/SearchMode";
import DefaultMode from "@common/Navbar/Mobile/DefaultMode";

function MobileNavbar() {
  const [showSearchMode, setShowSearchMode] = useState(false);

  if (showSearchMode) {
    return <SearchMode setShowSearchMode={setShowSearchMode} />;
  }

  return <DefaultMode setShowSearchMode={setShowSearchMode} />;
}

export default MobileNavbar;
