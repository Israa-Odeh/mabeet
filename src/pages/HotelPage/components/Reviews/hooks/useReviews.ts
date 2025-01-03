import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@api/hotel";

const useReviews = (hotelId: number) => {
  return useQuery({
    queryKey: ["reviews", hotelId],
    queryFn: () => fetchReviews(hotelId),
    enabled: !!hotelId,
  });
};

export default useReviews;
