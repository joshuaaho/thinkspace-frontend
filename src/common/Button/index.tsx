import { cva } from "class-variance-authority";
import { cn } from "./cn";
import { forwardRef } from "react";

type ChildrenProp = { children?: React.ReactNode };
type renderIconProp = { renderIcon?: (props: IconProps) => React.ReactNode };

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "base-1"
  | "base-2"
  | "base-3"
  | "info"
  | "success"
  | "warning"
  | "error";

type ButtonSize = "sm" | "md" | "lg";

type ButtonOnlyProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export type ButtonProps = ChildrenProp & renderIconProp & ButtonOnlyProps;

type IconProps = {
  iconSize: number;
};
const Button =forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  renderIcon,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps, ref) => {
  const defaultIconProps: IconProps = {
    iconSize: size === "sm" ? 16 : size === "md" ? 20 : 24,
  };

  const iconElement = renderIcon ? renderIcon(defaultIconProps) : null;
  return (
    <button
      ref={ref}
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {iconElement}
      {children}
    </button>
  );
});


const buttonVariants = cva(
  "flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-content hover:bg-primary/90 active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-content hover:bg-secondary/90 active:scale-[0.98]",
        accent:
          "bg-accent text-accent-content hover:bg-accent/90 active:scale-[0.98]",
        neutral:
          "bg-neutral text-neutral-content hover:bg-neutral/90 active:scale-[0.98]",
        "base-1":
          "bg-base-100 text-base-content hover:bg-base-200 active:scale-[0.98]",
        "base-2":
          "bg-base-200 text-base-content hover:bg-base-300 active:scale-[0.98]",
        "base-3":
          "bg-base-300 text-base-content hover:bg-base-200 active:scale-[0.98]",
        info: "bg-info text-info-content hover:bg-info/90 active:scale-[0.98]",
        success:
          "bg-success text-success-content hover:bg-success/90 active:scale-[0.98]",
        warning:
          "bg-warning text-warning-content hover:bg-warning/90 active:scale-[0.98]",
        error:
          "bg-error text-error-content hover:bg-error/90 active:scale-[0.98]",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default Button;
