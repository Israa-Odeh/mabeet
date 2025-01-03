import { HotelHeaderProps } from "./types";
import { Star, MapPin } from "lucide-react";
import styles from "./HotelHeader.module.css";

const HotelHeader = ({
  hotelName,
  starRating,
  location,
  availableRooms,
}: HotelHeaderProps) => (
  <div className={styles.hotelHeader}>
    <div>
      <h1 className={styles.hotelName}>{hotelName}</h1>
      <div className={styles.starRating}>
        {Array.from({ length: starRating }).map((_, index) => (
          <Star key={index} className={styles.starIcon} size={24} />
        ))}
      </div>

      <div className={styles.locationDetails}>
        <MapPin size={24} className={styles.mapIcon} />
        <p className={styles.locationText}>{location}</p>
      </div>
    </div>

    <div className={styles.availableRoomsCard}>
      <span className={styles.roomCount}>{availableRooms}</span>
      <span className={styles.roomLabel}>Total Rooms</span>
    </div>
  </div>
);

export default HotelHeader;
