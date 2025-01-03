import { useQuery } from "@tanstack/react-query";
import { fetchHotels } from "@api/admin/hotels";

export const useHotels = (
  searchTerm: string,
  pageSize: number,
  pageNumber: number
) => {
  return useQuery({
    queryKey: ["hotels", searchTerm, pageSize, pageNumber],
    queryFn: () => fetchHotels(searchTerm, pageSize, pageNumber),
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
  });
};
