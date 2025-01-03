import { LoginFormValues } from "@pages/LoginPage/components/LoginForm/types";
import { BASE_URL } from "@api/apiConfig";
import { LoginResponse } from "./types";

export const signIn = async (userData: LoginFormValues) => {
  const response = await fetch(`${BASE_URL}/auth/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    throw new Error(
      "Login failed: Unauthorized user. Please check your credentials."
    );
  }

  const data: LoginResponse = await response.json();

  return data;
};
