import { FormFieldProps } from "./types";
import classNames from "classnames";
import styles from "./FormField.module.css";

const FormField = ({ error, touched, ...inputProps }: FormFieldProps) => {
  return (
    <div>
      <input
        {...inputProps}
        className={classNames(styles.input, {
          [styles.inputError]: error && touched,
        })}
      />
      {error && touched && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default FormField;
