import { useQuery } from "@tanstack/react-query";
import { fetchNearbyHotels } from "@api/hotel";

export const useNearbyHotels = (cityId: number) => {
  return useQuery({
    queryKey: ["nearbyHotels", cityId],
    queryFn: () => fetchNearbyHotels(cityId),
    refetchOnWindowFocus: false,
    enabled: !!cityId,
  });
};
