import { EmptyStateProps } from "./types";
import { AlertCircle } from "lucide-react";
import styles from "./EmptyState.module.css";

const EmptyState = ({ title, message }: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <AlertCircle className={styles.icon} size={48} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default EmptyState;
