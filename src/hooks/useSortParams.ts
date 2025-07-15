import { useSearchParams } from "react-router-dom";

type SortBy = "newest" | "oldest" | "mostLiked";

const useSortParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "newest";

  const updateSort = (sort: SortBy) => {
    setSearchParams((prev) => {
      prev.set("sortBy", sort);
      return prev;
    });
  };

  return { sortBy, updateSort };
};

export default useSortParams;
