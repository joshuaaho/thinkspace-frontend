import { useFormContext } from "react-hook-form";
import { RegisterInput } from "@pages/Register";
import { FaRepeat } from "react-icons/fa6";

function ConfirmPasswordInput() {
  const { register } = useFormContext<RegisterInput>();

  return (
    <div>
      <label className="label">
        <span className="label-text">Confirm Password</span>
      </label>
      <div className="relative">
        <input
          type="password"
          {...register("confirmPassword")}
          className="input input-bordered w-full bg-base-200 pr-10 text-base-content placeholder:text-base-content/50"
          placeholder="Confirm your password"
        />
        <FaRepeat className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/70" />
      </div>
    </div>
  );
}

export default ConfirmPasswordInput;
