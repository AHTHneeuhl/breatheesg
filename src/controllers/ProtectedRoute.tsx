import { Navigate, Route } from "react-router-dom";
import { AuthService } from "../services";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const authService = new AuthService();

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthenticated = authService.isAuthenticated();

  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
