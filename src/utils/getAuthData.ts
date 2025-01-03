import { DecodedToken } from "./types";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const getAuthData = () => {
  const token = Cookies.get("authToken");
  if (!token) return null;

  try {
    const decodedToken = jwtDecode<DecodedToken>(token);

    if (!decodedToken.exp) {
      throw new Error("Invalid token: Missing 'exp' field");
    }

    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      Cookies.remove("authToken");
      const navigate = useNavigate();
      navigate("/", { replace: true });
      console.log("Logged Out Automatically");
      return null;
    }

    return decodedToken;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
