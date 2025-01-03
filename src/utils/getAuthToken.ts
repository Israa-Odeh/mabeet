import Cookies from "js-cookie";

export const getAuthToken = () => Cookies.get("authToken");
