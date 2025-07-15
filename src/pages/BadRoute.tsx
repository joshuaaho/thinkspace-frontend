import Button from "@common/Button";
import { useNavigate } from "react-router-dom";

const BadRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
        <p className="text-base-content/60">
          The page you're looking for doesn't exist.
        </p>
        <Button
          onClick={() => navigate("/")}
          variant="primary"
          size="lg"
          className="mx-auto"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default BadRoute;
