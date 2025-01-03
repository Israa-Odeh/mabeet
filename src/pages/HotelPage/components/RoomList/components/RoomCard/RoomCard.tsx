import { RoomCardProps } from "./types";
import { Users, Star } from "lucide-react";
import { Button } from "@mui/material";
import styles from "./RoomCard.module.css";

const RoomCard = ({ room, onReserve }: RoomCardProps) => {
  const {
    roomPhotoUrl,
    roomType,
    capacityOfAdults,
    capacityOfChildren,
    price,
    roomAmenities,
  } = room;

  return (
    <div className={styles.roomCard}>
      <div className={styles.imageWrapper}>
        <img
          src={roomPhotoUrl}
          alt={`${roomType} Room`}
          className={styles.roomImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.roomHeader}>
          <div>
            <h3 className={styles.roomType}>{roomType}</h3>
            <div className={styles.capacity}>
              <Users size={18} />
              <span>
                Up to {capacityOfAdults} adults
                {capacityOfChildren > 0 && ` & ${capacityOfChildren} children`}
              </span>
            </div>
          </div>

          <div className={styles.priceInfo}>
            <div className={styles.price}>${price}</div>
            <p className={styles.perNight}>per night</p>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.amenities}>
            <div className={styles.amenitiesGrid}>
              {roomAmenities.slice(0, 6).map(({ name }, index) => (
                <div key={index} className={styles.amenityItem}>
                  <Star size={16} className={styles.amenityIcon} />
                  <span className={styles.amenityName}>{name}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="contained"
            disableElevation
            disableRipple
            className={styles.bookButton}
            onClick={() => onReserve(room)}
          >
            Reserve Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
