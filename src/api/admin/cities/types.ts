export type CityFormValues = {
  name: string;
  description: string;
};

export type City = CityFormValues & {
  id: number;
};

export type CityWithHotelCounts = City & {
  numHotels?: number;
};
