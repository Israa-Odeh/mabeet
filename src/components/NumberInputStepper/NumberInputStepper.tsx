import { StepperProps } from "./types";
import IconButton from "@mui/material/IconButton";
import styles from "./NumberInputStepper.module.css";

const Stepper = ({
  label,
  value,
  onChange,
  max,
  min = 0,
  step = 1,
}: StepperProps) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - step);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + step);
    }
  };

  return (
    <div className={styles.stepper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.controlsWrapper}>
        <IconButton
          size="small"
          disableRipple
          aria-label="Decrement"
          onClick={handleDecrement}
          disabled={value <= min}
          className={styles.button}
        >
          -
        </IconButton>
        <span className={styles.value}>{value}</span>
        <IconButton
          size="small"
          disableRipple
          aria-label="Increment"
          onClick={handleIncrement}
          disabled={value >= max}
          className={styles.button}
        >
          +
        </IconButton>
      </div>
    </div>
  );
};

export default Stepper;
