import { useFormContext } from "react-hook-form";
import { EditUserCommand, ThemePreference } from "@api/apiClient";
import { MdLightMode, MdDarkMode, MdComputer } from "react-icons/md";



function ThemeInput() {
  const { register, setValue, watch } = useFormContext<EditUserCommand>();
  const currentTheme = watch("themePreference");

  const themes: Array<{
    value: ThemePreference;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    description: string;
    bgColor: string;
    borderColor: string;
    iconColor: string;
  }> = [
    {
      value: ThemePreference.Light,
      icon: MdLightMode,
      label: "Light",
      description: "Bright and clean interface",
      bgColor: "bg-base-100",
      borderColor: "border-base-300",
      iconColor: "text-warning"
    },
    {
      value: ThemePreference.Dark,
      icon: MdDarkMode,
      label: "Dark",
      description: "Easy on the eyes",
      bgColor: "bg-base-300",
      borderColor: "border-base-200",
      iconColor: "text-info"
    },
    {
      value: ThemePreference.System,
      icon: MdComputer,
      label: "System",
      description: "Follows your system settings",
      bgColor: "bg-base-200",
      borderColor: "border-base-100",
      iconColor: "text-primary"
    }
  ];

  return (
    <div className="space-y-4">
      <label className="label">
        <span className="label-text text-lg font-semibold">Theme Preference</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <button
            key={theme.value}
            type="button"
            onClick={() => setValue("themePreference", theme.value)}
            className={`relative p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
              currentTheme === theme.value
                ? "border-primary shadow-lg"
                : theme.borderColor
            } ${theme.bgColor}`}
          >
            <div className="flex flex-col items-center gap-3">
              <theme.icon className={`w-12 h-12 ${theme.iconColor}`} />
              <div className="text-center">
                <h3 className="font-semibold text-base-content">{theme.label}</h3>
                <p className="text-sm text-base-content/70">{theme.description}</p>
              </div>
              {currentTheme === theme.value && (
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-primary" />
              )}
            </div>
          </button>
        ))}
      </div>
      <input
        type="hidden"
        {...register("themePreference")}
      />
    </div>
  );
}

export default ThemeInput; 