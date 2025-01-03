import { CityWithHotelCounts, City } from "./types";
import { BASE_URL } from "@api/apiConfig";
import fetchCityHotels from "./fetchCityHotels";

const fetchCities = async (
  searchQuery: string = "",
  pageSize: number = 10,
  pageNumber: number = 1
): Promise<CityWithHotelCounts[]> => {
  const response = await fetch(
    `${BASE_URL}/cities?pageSize=${pageSize}&pageNumber=${pageNumber}&searchQuery=${encodeURIComponent(
      searchQuery
    )}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cities.");
  }

  const citiesData = await response.json();

  const citiesWithHotelCounts = await Promise.all(
    citiesData.map(async (city: City) => {
      const hotels = await fetchCityHotels(city.id);
      return {
        ...city,
        numHotels: hotels.length,
      };
    })
  );

  return citiesWithHotelCounts;
};

export default fetchCities;
