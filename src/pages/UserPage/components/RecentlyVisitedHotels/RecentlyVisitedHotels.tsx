import { useVisitedHotels } from "./hooks/useVisitedHotels";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import CircularProgressComponent from "@components/CircularProgress";
import HotelCard from "./components";
import styles from "../Shared/Section.module.css";

const RecentlyVisitedHotels = () => {
  const { data: visitedHotels, isLoading, isError } = useVisitedHotels();
  const { open, handleClose } = useSnackbar(isError);

  if (isLoading) return <CircularProgressComponent />;

  if (isError)
    return (
      <Snackbar
        open={open}
        message="Unable to load recently visited hotels. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );

  return (
    <section id="recently-visited" className={styles.container}>
      <h2 className={styles.title}>Recently Visited Hotels</h2>
      <div className={styles.cardsContainer}>
        {visitedHotels?.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))}
      </div>
    </section>
  );
};
export default RecentlyVisitedHotels;
