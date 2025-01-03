import { ProtectedRouteProps } from "./types";
import { getAuthData } from "@utils/getAuthData";
import { Navigate } from "react-router-dom";
import ErrorPage from "@pages/ErrorPage";

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const authToken = getAuthData();

  if (!authToken) {
    return <Navigate to="/" replace={true} />;
  } else if (role !== authToken.userType) {
    return <ErrorPage />;
  }

  return children;
};

export default ProtectedRoute;
