import { FormFieldProps } from "../FormField/types";
import { useState } from "react";
import classNames from "classnames";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./PasswordField.module.css";

const PasswordField = ({ error, touched, ...inputProps }: FormFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.inputWrapper}>
        <input
          {...inputProps}
          type={isPasswordVisible ? "text" : "password"}
          className={classNames(styles.input, {
            [styles.inputError]: error && touched,
          })}
        />
        <button
          type="button"
          className={styles.toggleButton}
          onClick={togglePasswordVisibility}
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
        >
          {isPasswordVisible ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
        </button>
      </div>
      {error && touched && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default PasswordField;
