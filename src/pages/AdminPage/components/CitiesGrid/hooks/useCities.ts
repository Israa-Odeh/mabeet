import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "@api/admin/cities";

export const useCities = (searchTerm: string) => {
  return useQuery({
    queryKey: ["cities", searchTerm],
    queryFn: () => fetchCities(searchTerm),
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
  });
};
