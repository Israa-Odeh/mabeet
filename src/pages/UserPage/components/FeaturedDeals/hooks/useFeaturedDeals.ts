import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedDeals } from "@api/user/home";

export const useFeaturedDeals = () => {
  return useQuery({
    queryKey: ["featuredDeals"],
    queryFn: () => fetchFeaturedDeals(),
  });
};
