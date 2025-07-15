import { ButtonProps } from "@common/Button";
import Button from "@common/Button";

const Tag = (props: Omit<ButtonProps, "variant" | "size" | "disabled" >) => {
  return (
    <Button
      {...props}
      variant="neutral"
      size="sm"
      className={`cursor-default hover:bg-neutral transition-none active:scale-100 ${props.className || ""}`}
 
    />
  );
};

export default Tag;
