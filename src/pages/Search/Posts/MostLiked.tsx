import Button from "@common/Button";
import { FaThumbsUp } from "react-icons/fa";
import useQueryParams from "@hooks/useSortParams";

const MostLiked = () => {
  const { sortBy, updateSort } = useQueryParams();
  return (
    <Button
      variant={sortBy === "mostLiked" ? "primary" : "base-1"}
      size="sm"
      onClick={() => updateSort("mostLiked")}
      renderIcon={(props) => <FaThumbsUp size={props.iconSize} />}
    >
      Most Liked
    </Button>
  );
};

export default MostLiked; 