import { MdComputer } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import { EditUserCommand, ThemePreference } from "@api/apiClient";

type ThemeOptionProps = {
  isSelected: boolean;
};

const SystemOption = ({ isSelected }: ThemeOptionProps) => {
  const { setValue } = useFormContext<EditUserCommand>();

  return (
    <button
      type="button"
      onClick={() => setValue("themePreference", ThemePreference.System)}
      className={`relative p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
        isSelected ? "border-primary shadow-lg" : "border-base-300"
      } bg-base-200`}
    >
      <div className="flex flex-col items-center gap-3">
        <MdComputer className="w-12 h-12 text-primary" />
        <div className="text-center">
          <h3 className="font-semibold text-base-content">System</h3>
          <p className="text-sm text-base-content/70">Follows your system settings</p>
        </div>
        {isSelected && (
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-primary" />
        )}
      </div>
    </button>
  );
};

export default SystemOption; 