import { getAuthToken } from "@utils/getAuthToken";
import { getAuthData } from "@utils/getAuthData";
import { useQuery } from "@tanstack/react-query";
import { fetchVisitedHotels } from "@api/user/home";

export const useVisitedHotels = () => {
  const token = getAuthToken();
  const decodedToken = getAuthData();

  return useQuery({
    queryKey: ["visitedHotels"],
    queryFn: () => fetchVisitedHotels(decodedToken!.user_id, token!),
    enabled: !!token && !!decodedToken,
  });
};
