import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";

const TitleInput = () => {
  const { register } = useFormContext<FormData>();
  return (
    <input
      type="text"
      placeholder="Post title"
      className="input input-bordered w-full"
      {...register("title")}
    />
  );
};

export default TitleInput;
