import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@api/auth/auth";
import { LoginFormValues } from "../types";
import { FormikHelpers } from "formik";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const useLogin = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: signIn,
  });

  const handleLoginSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    try {
      const { authentication, userType } = await mutateAsync(values);
      const decodedToken = jwtDecode(authentication);

      if (!decodedToken.exp) {
        throw new Error("Token expiration not found.");
      }

      Cookies.set("authToken", authentication, {
        expires: new Date(decodedToken.exp * 1000),
        secure: true,
        sameSite: "strict",
      });

      if (userType === "Admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/user", { replace: true });
      }
      actions.resetForm();
    } catch (error) {
      console.error("Error during login:", error);
      actions.setTouched({ username: false, password: false });
    }
  };

  return {
    handleLoginSubmit,
    isPending,
    isError,
  };
};

export default useLogin;
