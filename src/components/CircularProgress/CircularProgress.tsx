import CircularProgress from "@mui/material/CircularProgress";
import styles from "./CircularProgress.module.css";

const CircularProgressComponent = () => {
  return (
    <div className={styles.container}>
      <CircularProgress className={styles.circularProgress} />
    </div>
  );
};

export default CircularProgressComponent;
