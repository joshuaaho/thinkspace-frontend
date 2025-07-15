import { useFormContext } from "react-hook-form";
import { RegisterInput } from "@pages/Register";
import { MdEmail } from "react-icons/md";

function EmailInput() {
  const { register } = useFormContext<RegisterInput>();

  return (
    <div>
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <div className="relative">
        <input
          type="email"
          {...register("email")}
          className="input input-bordered w-full bg-base-200 pr-10 text-base-content placeholder:text-base-content/50"
          placeholder="Enter your email"
        />
        <MdEmail className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/70" />
      </div>
    </div>
  );
}

export default EmailInput;
