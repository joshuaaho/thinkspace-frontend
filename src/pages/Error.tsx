import Button from "@common/Button";

type ErrorFallbackProps = {
  resetErrorBoundary: () => void;
};
function ErrorFallback({ resetErrorBoundary }: ErrorFallbackProps) {


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-error">
          Oops! Something went wrong
        </h2>
        <p className="text-base-content/60">
          The server is either down or something is wrong with the application
        </p>
        <Button
        onClick={() => resetErrorBoundary()}
          variant="primary"
          size="lg"
          className="mx-auto
          "
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;
