
import { useSearchParams } from "react-router-dom";

const useTagParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tags = searchParams.getAll("tags");


  const deleteTag = (tag: string) => {
    setSearchParams((prev) => {
      prev.delete("tags", tag);
      return prev;
    });
  };

  const addTag = (tag: string) => {
    setSearchParams((prev) => {
      prev.append("tags", tag);
      return prev;
    });
  };

  return {
    tags,
    deleteTag,
    addTag,
  };
};

export default useTagParams;
