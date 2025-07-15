import { useFormContext } from "react-hook-form";
import { EditUserCommand } from "@api/apiClient";
import { MdDescription } from "react-icons/md";

function BioInput() {
  const { register } = useFormContext<EditUserCommand>();

  return (
    <div>
      <label className="label">
        <span className="label-text">Bio</span>
      </label>
      <div className="relative">
        <textarea
          {...register("bio")}
          className="textarea textarea-bordered w-full bg-base-200 pr-10 text-base-content placeholder:text-base-content/50"
          placeholder="Tell us about yourself"
          rows={3}
        />
        <MdDescription className="absolute right-3 top-3 text-base-content/70" />
      </div>
    </div>
  );
}

export default BioInput; 