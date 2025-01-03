import { BASE_URL } from "@api/apiConfig";

const fetchHotelRooms = async (hotelId: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/hotels/${hotelId}/rooms?checkInDate=null&checkOutDate=null`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hotel rooms.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching hotel rooms:", error);
    return [];
  }
};

export default fetchHotelRooms;
