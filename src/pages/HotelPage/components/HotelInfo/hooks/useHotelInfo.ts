import { useQuery } from "@tanstack/react-query";
import { fetchHotelInfo } from "@api/hotel";

export const useHotelInfo = (hotelId: number) => {
  return useQuery({
    queryKey: ["hotel", hotelId],
    queryFn: () => fetchHotelInfo(hotelId),
    refetchOnWindowFocus: false,
    enabled: !!hotelId,
  });
};
