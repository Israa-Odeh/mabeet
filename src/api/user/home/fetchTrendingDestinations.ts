import { TrendingDestination } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchTrendingDestinations = async (): Promise<TrendingDestination[]> => {
  const response = await fetch(`${BASE_URL}/home/destinations/trending`);

  if (!response.ok) {
    throw new Error("Failed to fetch trending destinations");
  }

  return response.json();
};

export default fetchTrendingDestinations;
