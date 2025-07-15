import { useFormContext } from "react-hook-form";
import { EditUserCommand } from "@api/apiClient";
import { MdSchool } from "react-icons/md";

function EducationInput() {
  const { register } = useFormContext<EditUserCommand>();

  return (
    <div>
      <label className="label">
        <span className="label-text">Education</span>
      </label>
      <div className="relative">
        <input
          type="text"
          {...register("education")}
          className="input input-bordered w-full bg-base-200 pr-10 text-base-content placeholder:text-base-content/50"
          placeholder="Where did you study?"
        />
        <MdSchool className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/70" />
      </div>
    </div>
  );
}

export default EducationInput; 