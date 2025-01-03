import { GuestInfoProps } from "./types";
import styles from "../Shared/InfoGrid.module.css";

const GuestInfo = ({ customerName, paymentMethod }: GuestInfoProps) => {
  return (
    <div>
      <h2 className={styles.title}>Guest Information</h2>
      <div className={styles.detailGrid}>
        <div className={styles.detailItem}>
          <span className={styles.label}>Guest Name</span>
          <span className={styles.value}>{customerName}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Payment Method</span>
          <span className={styles.value}>{paymentMethod}</span>
        </div>
      </div>
    </div>
  );
};

export default GuestInfo;
