import { BASE_URL } from "@api/apiConfig";
import fetchHotelRooms from "./fetchHotelRooms";

export const fetchHotels = async (
  searchQuery = "",
  pageSize = 10,
  pageNumber = 1
) => {
  const response = await fetch(
    `${BASE_URL}/hotels?pageSize=${pageSize}&pageNumber=${pageNumber}&searchQuery=${encodeURIComponent(
      searchQuery
    )}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch hotels.");
  }

  const paginationHeader = response.headers.get("x-pagination");
  const totalItemsCount = paginationHeader
    ? JSON.parse(paginationHeader).TotalItemCount
    : 0;

  const hotels = await response.json();

  const hotelsWithRoomsCount = await Promise.all(
    hotels.map(async (hotel: any) => {
      const rooms = await fetchHotelRooms(hotel.id);
      return { ...hotel, numRooms: rooms.length };
    })
  );

  return {
    hotels: hotelsWithRoomsCount,
    totalItemsCount,
  };
};

export default fetchHotels;
