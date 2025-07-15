import { FaTrash } from "react-icons/fa";

import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";
import Button from "@common/Button";
import preventDefault from "@hoc/preventDefault";
type ImageProps = {
  imageUrl: string;
};

export function Image({ imageUrl }: ImageProps) {
  const { setValue, getValues } = useFormContext<FormData>();
  return (
    <div className="relative">
      <img src={imageUrl} className="w-full h-[400px] object-contain" />
      <Button
        renderIcon={(props) => <FaTrash size={props.iconSize} />}
        onClick={preventDefault(() => {
          setValue(
            "imgUrls",
            getValues("imgUrls")?.filter((url) => url !== imageUrl) || []
          );
        })}
        className="absolute top-4 right-4 p-2  text-white rounded-full transition-colors z-[30]"
      ></Button>
    </div>
  );
}
