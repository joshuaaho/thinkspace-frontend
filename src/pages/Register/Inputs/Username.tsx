import { useFormContext } from "react-hook-form";
import { RegisterInput } from "@pages/Register";
import { FaUser } from "react-icons/fa";
import UsernameTooltip from "./UsernameTooltip";

function UsernameInput() {
  const { register } = useFormContext<RegisterInput>();

  return (
    <div>
      <label className="label">
        <span className="label-text">Username</span>
        <UsernameTooltip />
      </label>
      <div className="relative">
        <input
          type="text"
          {...register("username")}
          className="input input-bordered w-full bg-base-200 pr-10 text-base-content placeholder:text-base-content/50"
          placeholder="Enter your username"
        />
        <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/70" />
      </div>
    </div>
  );
}

export default UsernameInput;
