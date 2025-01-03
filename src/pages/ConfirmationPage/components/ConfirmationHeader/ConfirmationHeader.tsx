import styles from "./ConfirmationHeader.module.css";

const ConfirmationHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.successIcon}>✓</div>
      <h1 className={styles.title}>Booking Confirmed!</h1>
      <p className={styles.subtitle}>Thank you for choosing our service</p>
    </div>
  );
};

export default ConfirmationHeader;
