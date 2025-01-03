import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CityFormValues, updateCity } from "@api/admin/cities";
import { getAuthToken } from "@utils/getAuthToken";

export const useUpdateCity = (
  cityId: number,
  onCityUpdateSuccess: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CityFormValues) => {
      const token = getAuthToken();
      return updateCity(token!, cityId, values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      onCityUpdateSuccess();
    },
    onError: (error: any) => {
      console.error("Error updating city:", error);
    },
  });
};
