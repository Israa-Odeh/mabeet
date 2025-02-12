import { useHotelInfo, useNearbyHotels, useGoogleMaps } from "./hooks";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import CircularProgressComponent from "@components/CircularProgress";
import { HotelHeader, HotelDescription, HotelMap } from "./components";

const HotelInfo = ({ hotelId }: { hotelId: number }) => {
  const {
    data: hotel,
    isLoading: isLoadingHotel,
    isError: hasHotelError,
  } = useHotelInfo(hotelId);

  const { data: nearbyHotels, isLoading: isLoadingNearby } = useNearbyHotels(
    hotel?.cityId!
  );

  const { isLoaded: isMapLoaded } = useGoogleMaps();

  const isLoading = isLoadingHotel || isLoadingNearby || !isMapLoaded;
  const hasError = hasHotelError || !hotel;
  const { open, handleClose } = useSnackbar(hasError);

  if (isLoading) return <CircularProgressComponent />;

  if (hasError)
    return (
      <Snackbar
        open={open}
        message="Unable to load hotel information. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );

  const mapData = {
    hotelName: hotel.hotelName,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
  };

  return (
    <div>
      <HotelHeader {...hotel} />
      <HotelDescription
        description={hotel.description}
        amenities={hotel.amenities}
      />
      <HotelMap hotel={mapData} nearbyHotels={nearbyHotels ?? []} />
    </div>
  );
};

export default HotelInfo;
