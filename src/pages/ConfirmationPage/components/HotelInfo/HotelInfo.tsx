import { HotelInfoProps } from "./types";
import styles from "../Shared/InfoGrid.module.css";

const HotelInfo = ({
  hotelName,
  roomNumber,
  roomType,
  bookingDateTime,
}: HotelInfoProps) => {
  return (
    <div>
      <h2 className={styles.title}>Hotel Details</h2>
      <div className={styles.detailGrid}>
        <div className={styles.detailItem}>
          <span className={styles.label}>Hotel Name</span>
          <span className={styles.value}>{hotelName}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Room Number</span>
          <span className={styles.value}>{roomNumber}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Room Type</span>
          <span className={styles.value}>{roomType}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Booking Date</span>
          <span className={styles.value}>{bookingDateTime}</span>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
