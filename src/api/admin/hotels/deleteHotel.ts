import { fetchHotelInfo } from "@api/hotel";
import { BASE_URL } from "@api/apiConfig";

const deleteHotel = async (hotelId: number, token: string) => {
  const hotelInfo = await fetchHotelInfo(hotelId);

  const { cityId } = hotelInfo;

  const response = await fetch(
    `${BASE_URL}/cities/${cityId}/hotels/${hotelId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete hotel.");
  }

  return;
};

export default deleteHotel;
