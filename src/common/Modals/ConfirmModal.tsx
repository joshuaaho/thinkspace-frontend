import * as Dialog from "@radix-ui/react-dialog";
import Button from "@common/Button";
import preventDefault from "@hoc/preventDefault";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

type ModalProps = {
  title: string;
  message: string;
  actionButton: React.ReactNode;
};

const Modal = ({ title, message, actionButton }: ModalProps) => {
  return (
    <div onClick={preventDefault()}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button
            variant="warning"
            aria-label="Delete post"
            renderIcon={(props) => (
              <FiTrash2 className={` hover:text-error ${props.iconSize}`} />
            )}
          />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-6 rounded-lg shadow-lg w-[90vw] max-w-[400px] border-l-4 border-warning">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <Dialog.Title className="text-lg font-semibold text-base-content mb-2">
                  {title}
                </Dialog.Title>
                <Dialog.Description className="text-base-content/60 mb-4">
                  {message}
                </Dialog.Description>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Dialog.Close asChild>
                <Button variant="secondary" size="md" className="mr-2">
                  Cancel
                </Button>
              </Dialog.Close>
              {actionButton}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Modal;
