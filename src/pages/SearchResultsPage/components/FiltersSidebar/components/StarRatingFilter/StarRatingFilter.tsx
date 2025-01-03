import { StarRatingFilterProps } from "./types";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./StarRatingFilter.module.css";

const StarRatingFilter = ({ value, onChange }: StarRatingFilterProps) => (
  <div>
    <span className={styles.label}>Star Rating</span>
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} onClick={() => onChange(star)}>
          {star <= value ? (
            <FaStar size={32} color="#fff" />
          ) : (
            <FaRegStar size={32} color="#d3d3d3" />
          )}
        </span>
      ))}
    </div>
  </div>
);

export default StarRatingFilter;
