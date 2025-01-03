import { HotelDescriptionProps } from "./types";
import { CheckCircle } from "lucide-react";
import styles from "./HotelDescription.module.css";

const HotelDescription = ({
  description,
  amenities,
}: HotelDescriptionProps) => (
  <div className={styles.container}>
    <h2 className={styles.sectionTitle}>About the Hotel</h2>
    <p className={styles.description}>{description}</p>

    <div className={styles.amenitiesGrid}>
      {amenities.map(({ name }, index) => (
        <div key={index} className={styles.amenityItem}>
          <CheckCircle size={20} className={styles.amenityIcon} />
          <span className={styles.amenityLabel}>{name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default HotelDescription;
