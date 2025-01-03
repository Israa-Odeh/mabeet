import { Hotel } from "./types";
import { BASE_URL } from "@api/apiConfig";

const updateHotel = async (
  token: string,
  hotelId: number,
  hotelData: Hotel
) => {
  const response = await fetch(`${BASE_URL}/hotels/${hotelId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(hotelData),
  });

  if (!response.ok) {
    throw new Error("Failed to update hotel.");
  }

  return true;
};

export default updateHotel;
