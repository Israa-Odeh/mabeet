import { NearbyHotel } from "@api/hotel";

export type HotelMapProps = {
  hotel: {
    hotelName: string;
    latitude: number;
    longitude: number;
  };
  nearbyHotels: NearbyHotel[];
};
