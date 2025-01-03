import { BASE_URL } from "@api/apiConfig";

type Amenity = {
  name: string;
  description: string;
};

const fetchAmenities = async (): Promise<Amenity[]> => {
  const response = await fetch(`${BASE_URL}/search-results/amenities`);

  if (!response.ok) {
    throw new Error("Failed to fetch amenities");
  }

  return response.json();
};

export default fetchAmenities;
