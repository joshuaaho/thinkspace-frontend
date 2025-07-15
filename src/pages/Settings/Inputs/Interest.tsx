import { useFormContext } from "react-hook-form";
import { EditUserCommand } from "@api/apiClient";
import { MdInterests } from "react-icons/md";

function InterestInput() {
  const { register } = useFormContext<EditUserCommand>();

  return (
    <div>
      <label className="label">
        <span className="label-text">Interests</span>
      </label>
      <div className="relative">
        <input
          type="text"
          {...register("interest")}
          className="input input-bordered w-full bg-base-200 pr-10 text-base-content placeholder:text-base-content/50"
          placeholder="What are your interests?"
        />
        <MdInterests className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/70" />
      </div>
    </div>
  );
}

export default InterestInput; 