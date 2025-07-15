import { useFormContext } from "react-hook-form";
import { LoginCommand } from "@api/apiClient";

import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function PasswordInput() {
  const { register } = useFormContext<LoginCommand>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          className="input input-bordered w-full bg-base-200 pr-20 text-base-content placeholder:text-base-content/50"
          placeholder="Enter your password"
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