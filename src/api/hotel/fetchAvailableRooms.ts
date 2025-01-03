import { Room } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchAvailableRooms = async (
  hotelId: number,
  checkInDate: string,
  checkOutDate: string
): Promise<Room[]> => {
  const response = await fetch(
    `${BASE_URL}/hotels/${hotelId}/available-rooms?checkInDate=${checkInDate}&CheckOutDate=${checkOutDate}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch available rooms");
  }

  return response.json();
};

export default fetchAvailableRooms;
