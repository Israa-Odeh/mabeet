import { TrendingDestination } from "@api/user/home";
import Card from "@components/Card";
import styles from "./DestinationCard.module.css";

const DestinationCard = ({
  destination,
}: {
  destination: TrendingDestination;
}) => {
  const { thumbnailUrl, cityName, countryName, description } = destination;

  return (
    <Card
      imageUrl={thumbnailUrl}
      heading={cityName}
      region={countryName}
      altText={cityName}
      cardClassName={styles.customCard}
    >
      <p className={styles.destinationDescription}>{description}</p>
    </Card>
  );
};

export default DestinationCard;
