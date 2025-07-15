import * as Dialog from "@radix-ui/react-dialog";


type LoaderModalProps = {
 message: string;
};

const LoaderModal = ({ message }: LoaderModalProps) => {
  return (
    <Dialog.Root defaultOpen={true} >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        <Dialog.Content
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-6 rounded-lg shadow-lg w-[90vw] max-w-[400px]"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <Dialog.Title className="text-lg font-semibold text-base-content">
              {message}
            </Dialog.Title>
            <Dialog.Description className="text-base-content/60 text-center">
              Please wait while we process your request
            </Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoaderModal;