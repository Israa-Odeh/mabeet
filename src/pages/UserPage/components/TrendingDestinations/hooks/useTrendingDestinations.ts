import { useQuery } from "@tanstack/react-query";
import { fetchTrendingDestinations } from "@api/user/home";

export const useTrendingDestinations = () => {
  return useQuery({
    queryKey: ["trendingDestinations"],
    queryFn: () => fetchTrendingDestinations(),
  });
};
