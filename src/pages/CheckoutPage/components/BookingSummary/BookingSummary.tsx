import { BookingSummaryProps } from "./types";
import styles from "./BookingSummary.module.css";

const BookingSummary = ({
  hotelName,
  roomNumber,
  roomType,
  totalCost,
}: BookingSummaryProps) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Complete Your Booking</h1>
    <p className={styles.bookingDetails}>
      {hotelName} - Room {roomNumber} ({roomType})
    </p>
    <div className={styles.costSummary}>
      <span className={styles.costLabel}>Total Cost</span>
      <span className={styles.totalCost}>${totalCost}</span>
    </div>
  </div>
);

export default BookingSummary;
