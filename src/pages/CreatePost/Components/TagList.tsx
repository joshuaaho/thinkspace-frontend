import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";
import CreatePostTag from "@pages/CreatePost/Components/Tag";

export default function TagList() {
  const { watch } = useFormContext<FormData>();
  const tags = watch("tags");

  return (
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag, index) => (
        <CreatePostTag key={index}>{tag}</CreatePostTag>
      ))}
    </div>
  );
} 