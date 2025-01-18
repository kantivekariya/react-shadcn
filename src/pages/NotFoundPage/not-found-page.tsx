import { Button } from "@/components/ui/button"; 
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <div className="flex flex-col items-center text-center">
        <AlertTriangle className="w-16 h-16 text-red-500" />
        <h1 className="mt-4 text-5xl font-bold">404</h1>
        <p className="mt-2 text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          It might have been removed, renamed, or is temporarily unavailable.
        </p>
      </div>

      <div className="mt-6 flex space-x-4">
        <Button
          variant="secondary"
          className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
        <Button
          variant="ghost"
          className="px-6 py-3 border border-gray-300 text-gray-800 hover:bg-gray-100"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </div>

      <footer className="absolute bottom-4 text-xs text-gray-500">
        © {new Date().getFullYear()} VK. All rights reserved.
      </footer>
    </div>
  );
};

export default NotFoundPage;
