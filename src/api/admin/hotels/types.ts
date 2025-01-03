export type Hotel = {
  name: string;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
};

export type HotelFormValues = Hotel & {
  id: number;
};
