import { NearbyHotel } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchNearbyHotels = async (cityId: number): Promise<NearbyHotel[]> => {
  const response = await fetch(`${BASE_URL}/cities/${cityId}/hotels`);

  if (!response.ok) {
    throw new Error("Failed to fetch nearby hotels");
  }

  return response.json();
};

export default fetchNearbyHotels;
