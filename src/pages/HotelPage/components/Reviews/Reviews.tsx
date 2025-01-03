import useReviews from "./hooks/useReviews";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import CircularProgressComponent from "@components/CircularProgress";
import StarRating from "@components/StarRating";
import styles from "./Reviews.module.css";

const Reviews = ({ hotelId }: { hotelId: number }) => {
  const { data: reviews, isLoading, isError } = useReviews(hotelId);
  const { open, handleClose } = useSnackbar(isError);

  if (isLoading) return <CircularProgressComponent />;

  if (isError)
    return (
      <Snackbar
        open={open}
        message="Unable to load reviews. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Guest Reviews ({reviews?.length || 0})</h2>
      {reviews && reviews.length > 0 ? (
        <div className={styles.reviewsList}>
          {reviews.map(({ reviewId, customerName, rating, description }) => (
            <div key={reviewId} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInfo}>
                  <div className={styles.reviewerAvatar}>
                    {customerName.charAt(0)}
                  </div>
                  <h3 className={styles.reviewerName}>{customerName}</h3>
                </div>
                <StarRating rating={rating} />
              </div>
              <p className={styles.reviewDescription}>{description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noReviews}>
          No reviews yet. Be the first to leave a review!
        </div>
      )}
    </div>
  );
};

export default Reviews;
