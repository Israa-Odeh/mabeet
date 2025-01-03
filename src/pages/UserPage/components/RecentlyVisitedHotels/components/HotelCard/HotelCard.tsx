import { VisitedHotel } from "@api/user/home";
import { useNavigate } from "react-router-dom";
import { buildHotelPageUrl } from "@pages/UserPage/utils/buildHotelPageUrl";
import Card from "@components/Card";
import StarRating from "@components/StarRating";
import styles from "./HotelCard.module.css";

const VisitedHotelCard = ({ hotel }: { hotel: VisitedHotel }) => {
  const navigate = useNavigate();
  const {
    hotelId,
    thumbnailUrl,
    hotelName,
    cityName,
    priceLowerBound,
    priceUpperBound,
    starRating,
  } = hotel;

  const handleCardClick = () => navigate(buildHotelPageUrl(hotelId, hotelName));

  return (
    <Card
      imageUrl={thumbnailUrl}
      heading={hotelName}
      region={cityName}
      altText={hotelName}
      cardClassName={styles.customCard}
      onClick={handleCardClick}
    >
      <span className={styles.priceRange}>
        ${priceLowerBound} - ${priceUpperBound}
      </span>
      <StarRating rating={starRating} />
    </Card>
  );
};

export default VisitedHotelCard;
