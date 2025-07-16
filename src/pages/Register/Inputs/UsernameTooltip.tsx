import * as Tooltip from "@radix-ui/react-tooltip";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

const UsernameTooltip = () => {
  const [open, setOpen] = useState(false)
  return (
    <Tooltip.Provider>
      <Tooltip.Root
           open={ open}

           onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            className="text-base-content/70 hover:text-base-content transition-colors"
            onClick={() => setOpen(!open)}
          >
            <FaInfoCircle size={16} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="TooltipContent bg-base-300 text-base-content px-4 py-3 rounded-xl shadow-xl border border-base-content/20 max-w-xs backdrop-blur-sm"
            sideOffset={5}
          >
            <div className="text-sm">
              <p className="font-semibold mb-2 text-base-content">Username Requirements:</p>
              <ul className="space-y-1.5 text-xs leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>3-20 characters long</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Letters, numbers, underscores only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Must start with a letter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>No spaces or special characters</span>
                </li>
              </ul>
            </div>
            <Tooltip.Arrow className="TooltipArrow fill-base-300" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default UsernameTooltip; 