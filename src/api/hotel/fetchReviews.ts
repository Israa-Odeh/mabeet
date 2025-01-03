import { Review } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchReviews = async (hotelId: number): Promise<Review[]> => {
  const response = await fetch(`${BASE_URL}/hotels/${hotelId}/reviews`);

  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return response.json();
};

export default fetchReviews;
