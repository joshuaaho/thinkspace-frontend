import { useFormContext } from "react-hook-form";
import { EditUserCommand, ThemePreference } from "@api/apiClient";
import LightOption from "./LightOption";
import DarkOption from "./DarkOption";
import SystemOption from "./SystemOption";


function ThemeInput() {
  const { register, watch } = useFormContext<EditUserCommand>();
  const currentTheme = watch("themePreference") as ThemePreference;

  return (
    <div className="space-y-4">
      <label className="label">
        <span className="label-text text-lg font-semibold">Theme Preference</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LightOption isSelected={currentTheme === "light"} />
        <DarkOption isSelected={currentTheme === "dark"} />
        <SystemOption isSelected={currentTheme === "system"} />
      </div>
      <input
        type="hidden"
        {...register("themePreference")}
      />
    </div>
  );
}

export default ThemeInput;
