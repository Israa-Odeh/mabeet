export type FeaturedDeal = {
  hotelId: number;
  hotelName: string;
  description: string;
  cityName: string;
  originalRoomPrice: number;
  finalPrice: number;
  roomPhotoUrl: string;
  hotelStarRating: number;
  discount: number;
  title: string;
};

export type VisitedHotel = {
  hotelId: number;
  hotelName: string;
  starRating: number;
  visitDate: string;
  cityName: string;
  thumbnailUrl: string;
  priceLowerBound: number;
  priceUpperBound: number;
};

export type TrendingDestination = {
  cityId: number;
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
};

export type SearchParams = {
  checkInDate: string;
  checkOutDate: string;
  city: string;
  starRate?: number;
  sort?: string;
  numberOfRooms: number;
  adults: number;
  children: number;
};

export type Amenity = {
  id: number;
  name: string;
  description: string;
};

export type SearchResult = {
  hotelId: number;
  hotelName: string;
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  cityName: string;
  roomPhotoUrl: string;
  discount: number;
  amenities: Amenity[];
};
