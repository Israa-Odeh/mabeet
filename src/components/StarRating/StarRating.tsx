import styles from "./StarRating.module.css";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.container}>
      {[...Array(rating)].map((_, index) => (
        <span key={index} className={styles.star}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
