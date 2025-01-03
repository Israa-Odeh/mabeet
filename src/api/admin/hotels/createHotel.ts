import { Hotel } from "./types";
import { BASE_URL } from "@api/apiConfig";

const createHotel = async (token: string, cityId: number, hotel: Hotel) => {
  const response = await fetch(`${BASE_URL}/cities/${cityId}/hotels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(hotel),
  });

  if (!response.ok) {
    throw new Error("Failed to create hotel.");
  }

  return response.json();
};

export default createHotel;
