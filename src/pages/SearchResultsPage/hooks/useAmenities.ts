import { useQuery } from "@tanstack/react-query";
import { fetchAmenities } from "@api/user/home";

export const useAmenities = () => {
  return useQuery({
    queryKey: ["amenities"],
    queryFn: fetchAmenities,
  });
};
