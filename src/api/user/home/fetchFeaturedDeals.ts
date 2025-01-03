import { FeaturedDeal } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchFeaturedDeals = async (): Promise<FeaturedDeal[]> => {
  const response = await fetch(`${BASE_URL}/home/featured-deals`);

  if (!response.ok) {
    throw new Error("Failed to fetch featured deals");
  }

  return response.json();
};

export default fetchFeaturedDeals;
