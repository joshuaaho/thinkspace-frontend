import { MdLightMode } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import { EditUserCommand, ThemePreference } from "@api/apiClient";

type ThemeOptionProps = {
  isSelected: boolean;
};

const LightOption = ({ isSelected }: ThemeOptionProps) => {
  const { setValue } = useFormContext<EditUserCommand>();

  return (
    <button
      type="button"
      onClick={() => setValue("themePreference", ThemePreference.Light)}
      className={`relative p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
        isSelected ? "border-primary shadow-lg" : "border-base-300"
      } bg-base-200`}
    >
      <div className="flex flex-col items-center gap-3">
        <MdLightMode className="w-12 h-12 text-warning" />
        <div className="text-center">
          <h3 className="font-semibold text-base-content">Light</h3>
          <p className="text-sm text-base-content/70">Bright and clean interface</p>
        </div>
        {isSelected && (
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-primary" />
        )}
      </div>
    </button>
  );
};

export default LightOption; 