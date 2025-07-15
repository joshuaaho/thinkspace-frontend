import { FaExclamationTriangle } from "react-icons/fa";
import Button from "@common/Button";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps {
  message: string;
  statusCode: number;

}

const ErrorPage = ({ 
  message , 
  statusCode,

}: ErrorPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 text-red-500 mb-4">
        <FaExclamationTriangle size={64} />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{statusCode} Error</h1>
      <p className="text-gray-600 mb-8 max-w-md">{message}</p>

        <Button
          onClick={() => navigate(-1)}
          variant="secondary"
          size="lg"
        >
          Go Back
        </Button>
    
    </div>
  );
};

export default ErrorPage; 