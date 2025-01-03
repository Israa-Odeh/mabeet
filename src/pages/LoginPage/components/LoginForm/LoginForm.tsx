import useLogin from "./hooks/useLogin";
import { useFormik } from "formik";
import { validationSchema } from "./schema";
import FormField from "@components/FormField";
import PasswordField from "@components/PasswordField";
import Button from "@mui/material/Button";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const { handleLoginSubmit, isPending, isError } = useLogin();

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => handleLoginSubmit(values, actions),
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <p className={styles.subtitle}>
          Unforgettable moments, Instantly at your fingertips!
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormField
          name="username"
          type="text"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          error={errors.username}
          touched={touched.username}
        />
        <PasswordField
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          touched={touched.password}
        />
        {isError && (
          <p className={styles.errorMessage}>
            Invalid credentials. Please try again.
          </p>
        )}
        <Button
          variant="contained"
          disableElevation
          disableRipple
          type="submit"
          className={styles.signInButton}
          disabled={isPending}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
