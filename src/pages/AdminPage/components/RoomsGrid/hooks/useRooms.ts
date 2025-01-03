import { useQuery } from "@tanstack/react-query";
import { Room } from "@api/hotel";
import { fetchHotelRooms } from "@api/admin/hotels";

const useRooms = (hotelId: number) => {
  return useQuery<Room[]>({
    queryKey: ["rooms", hotelId],
    queryFn: () => fetchHotelRooms(hotelId),
    enabled: !!hotelId,
  });
};

export default useRooms;