import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CityFormValues, createCity } from "@api/admin/cities";
import { getAuthToken } from "@utils/getAuthToken";

export const useCreateCity = (onCityCreationSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CityFormValues) => createCity(getAuthToken()!, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      onCityCreationSuccess();
    },
    onError: (error: any) => {
      console.error("Error creating city:", error);
    },
  });
};
