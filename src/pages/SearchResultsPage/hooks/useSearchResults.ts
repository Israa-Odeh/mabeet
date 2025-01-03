import { SearchParams, fetchSearchResults } from "@api/user/home";
import { useQuery } from "@tanstack/react-query";

export const useSearchResults = (params: SearchParams) => {
  return useQuery({
    queryKey: ["searchResults", params],
    queryFn: () => fetchSearchResults(params),
    enabled: !!params,
  });
};
