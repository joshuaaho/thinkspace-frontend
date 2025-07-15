import { FaTimes } from "react-icons/fa";
import Tag from "@common/Tag";
import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";
interface CreatePostTagProps {
  children: string;
}

const CreatePostTag = ({ children }: CreatePostTagProps) => {
  const { setValue, getValues } = useFormContext<FormData>();
  return (
    <Tag
      renderIcon={(props) => (
        <FaTimes
          size={props.iconSize}
          onClick={() => {
            setValue(
              "tags",
              getValues("tags")?.filter((tag) => tag !== children),
              {
                shouldValidate: true,
              }
            );
          }}
        />
      )}
    >
      {children}
    </Tag>
  );
};

export default CreatePostTag;
