import { VisitedHotel } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchVisitedHotels = async (
  userId: string,
  token: string
): Promise<VisitedHotel[]> => {
  const response = await fetch(
    `${BASE_URL}/home/users/${userId}/recent-hotels`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recently visited hotels");
  }

  return response.json();
};

export default fetchVisitedHotels;
