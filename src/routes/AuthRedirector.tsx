import { getAuthData } from "@utils/getAuthData";
import { Navigate } from "react-router-dom";
import LoginPage from "@pages/LoginPage";

const AuthRedirector = () => {
  const authToken = getAuthData();

  if (authToken) {
    return (
      <Navigate to={`/${authToken.userType.toLowerCase()}`} replace={true} />
    );
  }

  return <LoginPage />;
};

export default AuthRedirector;
