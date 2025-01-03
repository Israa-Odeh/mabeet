import { PaymentInfoProps } from "./types";
import styles from "./PaymentInfo.module.css";

const PaymentInfo = ({ totalCost, bookingStatus }: PaymentInfoProps) => {
  return (
    <div>
      <h2 className={styles.title}>Payment Details</h2>
      <div className={styles.paymentBox}>
        <div className={styles.paymentDetail}>
          <span>Total Amount</span>
          <span className={styles.totalCost}>${totalCost}</span>
        </div>
        <div className={styles.paymentStatus}>
          <span className={styles.statusBadge}>{bookingStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
