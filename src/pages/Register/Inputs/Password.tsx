import { useFormContext } from "react-hook-form";
import { RegisterInput } from "@pages/Register";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import PasswordTooltip from "./PasswordTooltip";

function PasswordInput() {
  const { register } = useFormContext<RegisterInput>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="label">
        <span className="label-text">Password</span>
        <PasswordTooltip />
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          className="input input-bordered w-full bg-base-200 pr-20 text-base-content placeholder:text-base-content/50"
          placeholder="Create a password"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-3">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-base-content/70 hover:text-base-content"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <RiLockPasswordLine className="text-base-content/70" />
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;
