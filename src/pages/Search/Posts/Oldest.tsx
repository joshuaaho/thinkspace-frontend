import Button from "@common/Button";

import { FaCalendar } from "react-icons/fa";
import useQueryParams from "@hooks/useSortParams";
const Oldest = () => {
  const { sortBy, updateSort } = useQueryParams();
  return (
    <Button
      variant={sortBy === "oldest" ? "primary" : "base-1"}
      size="sm"
      onClick={() => updateSort("oldest")}
      renderIcon={(props) => <FaCalendar size={props.iconSize} />}
    >
      Oldest
    </Button>
  );
};

export default Oldest;
