import { useTrendingDestinations } from "./hooks/useTrendingDestinations";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import CircularProgressComponent from "@components/CircularProgress";
import DestinationCard from "./components/DestinationCard/DestinationCard";
import styles from "../Shared/Section.module.css";

const TrendingDestinations: React.FC = () => {
  const { data: destinations, isLoading, isError } = useTrendingDestinations();
  const { open, handleClose } = useSnackbar(isError);

  if (isLoading) return <CircularProgressComponent />;

  if (isError)
    return (
      <Snackbar
        open={open}
        message="Unable to load trending destinations. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );

  return (
    <section id="trending-destinations" className={styles.container}>
      <h2 className={styles.title}>Trending Destinations</h2>
      <div className={styles.cardsContainer}>
        {destinations?.map((destination) => (
          <DestinationCard key={destination.cityId} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default TrendingDestinations;
