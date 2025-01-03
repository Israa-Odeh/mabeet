import { useFeaturedDeals } from "./hooks/useFeaturedDeals";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import CircularProgressComponent from "@components/CircularProgress";
import HotelCard from "./components";
import styles from "../Shared/Section.module.css";

const FeaturedDeals = () => {
  const { data: hotels, isLoading, isError } = useFeaturedDeals();
  const { open, handleClose } = useSnackbar(isError);

  if (isLoading) return <CircularProgressComponent />;

  if (isError)
    return (
      <Snackbar
        open={open}
        message="Unable to load featured deals. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );

  return (
    <section id="featured-deals" className={styles.container}>
      <h2 className={styles.title}>Featured Deals</h2>
      <div className={styles.cardsContainer}>
        {hotels?.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedDeals;
