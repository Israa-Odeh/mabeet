import { SearchParams, SearchResult } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchSearchResults = async (
  params: SearchParams
): Promise<SearchResult[]> => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const response = await fetch(
    `${BASE_URL}/home/search?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch search results.");
  }

  return response.json();
};

export default fetchSearchResults;
