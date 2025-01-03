import { HotelInfo } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchHotelInfo = async (hotelId: number): Promise<HotelInfo> => {
  const response = await fetch(
    `${BASE_URL}/hotels/${hotelId}?includeRooms=true`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch hotel information");
  }

  return response.json();
};

export default fetchHotelInfo;
