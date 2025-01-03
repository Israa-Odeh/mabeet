export type GalleryImage = {
  id: number;
  url: string;
};

export type Amenity = {
  name: string;
  description: string;
};

export type HotelInfo = {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
  cityId: number;
};

export type NearbyHotel = {
  id: number;
  name: string;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
};

export type Review = {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
};

export type Room = {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: Amenity[];
  price: number;
  availability: boolean;
};
