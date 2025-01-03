import { BASE_URL } from "@api/apiConfig";

const fetchCityHotels = async (cityId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/cities/${cityId}/hotels`);

    if (!response.ok) {
      throw new Error("Failed to fetch city hotels.");
    }

    const cityHotels = await response.json();
    return cityHotels;
  } catch (error) {
    console.error("Error fetching hotels for city:", error);
    return [];
  }
};

export default fetchCityHotels;
