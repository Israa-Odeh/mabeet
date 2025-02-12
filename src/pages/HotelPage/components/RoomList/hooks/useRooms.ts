import { useQuery } from "@tanstack/react-query";
import { fetchAvailableRooms } from "@api/hotel";
import { format } from "date-fns";

export const useRooms = (
  hotelId: number,
  checkInDate: Date,
  checkOutDate: Date
) => {
  return useQuery({
    queryKey: ["rooms", hotelId, checkInDate, checkOutDate],
    queryFn: () =>
      fetchAvailableRooms(
        hotelId,
        format(checkInDate, "dd-MM-yyyy"),
        format(checkOutDate, "dd-MM-yyyy")
      ),
    refetchOnWindowFocus: false,
    enabled: !!hotelId,
  });
};
