import { FeaturedDeal } from "@api/user/home";
import { useNavigate } from "react-router-dom";
import { buildHotelPageUrl } from "@pages/UserPage/utils/buildHotelPageUrl";
import Card from "@components/Card";
import StarRating from "@components/StarRating";
import styles from "./HotelCard.module.css";

const HotelCard = ({ hotel }: { hotel: FeaturedDeal }) => {
  const navigate = useNavigate();
  const {
    hotelId,
    roomPhotoUrl,
    hotelName,
    cityName,
    description,
    originalRoomPrice,
    finalPrice,
    hotelStarRating,
  } = hotel;

  const handleCardClick = () => navigate(buildHotelPageUrl(hotelId, hotelName));

  return (
    <Card
      imageUrl={roomPhotoUrl}
      heading={hotelName}
      region={cityName}
      altText={`${hotelName}: ${description}`}
      cardClassName={styles.customCard}
      onClick={handleCardClick}
    >
      <div className={styles.hotelPrices}>
        <span className={styles.originalPrice}>${originalRoomPrice}</span>
        <span className={styles.discountedPrice}>${finalPrice}</span>
      </div>
      <StarRating rating={hotelStarRating} />
    </Card>
  );
};

export default HotelCard;
