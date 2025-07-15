import Button from "@common/Button";
import { FaCalendar } from "react-icons/fa";
import useQueryParams from "@hooks/useSortParams";

const Recent = () => {
  const { sortBy, updateSort } = useQueryParams();
  return (
    <Button
      variant={sortBy === "newest" ? "primary" : "base-1"}
      size="sm"
      onClick={() => updateSort("newest")}
      renderIcon={(props) => <FaCalendar size={props.iconSize} />}
    >
      Most Recent
    </Button>
  );
};

export default Recent;
