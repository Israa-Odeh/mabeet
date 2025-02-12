import { useQuery } from "@tanstack/react-query";
import fetchGallery from "@api/hotel/fetchGallery";

const useGallery = (hotelId: number) => {
  return useQuery({
    queryKey: ["gallery", hotelId],
    queryFn: () => fetchGallery(hotelId),
    refetchOnWindowFocus: false,
    enabled: !!hotelId,
  });
};

export default useGallery;
