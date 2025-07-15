import Button from "@common/Button";
import { useFormContext } from "react-hook-form";
import { FaImage, FaPlus } from "react-icons/fa6";
import { FormData } from "@pages/CreatePost/Form";

const SliderPlaceholder = () => {
  const { watch } = useFormContext<FormData>();
  const imgUrls = watch("imgUrls");
  if (imgUrls && imgUrls.length > 0) return null;
  return (
    <div className="flex flex-col items-center justify-center h-[400px] p-8 text-center">
      <div className="mb-4">
        <div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaImage className="w-8 h-8 text-base-content/60" />
        </div>
        <h3 className="text-lg font-semibold text-base-content mb-2">
          Add Images
        </h3>
        <p className="text-base-content/60 mb-6">
          Click or drag images here to upload
        </p>
      </div>
      
      <Button
        variant="primary"
        size="lg"
        renderIcon={(props) => <FaPlus size={props.iconSize} />}
      >
        Upload Images
      </Button>
    </div>
  );
};

export default SliderPlaceholder;
