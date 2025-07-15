import Button from "@common/Button";

interface CancelProps {
  setExpandForm: (expandForm: boolean) => void;
}
const Cancel = ({ setExpandForm }: CancelProps) => {
  return (
    <Button
      variant="base-2"
      onClick={() => {
        setExpandForm(false);
      }}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
