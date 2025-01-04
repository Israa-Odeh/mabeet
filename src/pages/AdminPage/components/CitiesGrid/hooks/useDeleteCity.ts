import { useQueryClient, useMutation } from "@tanstack/react-query";
import { getAuthToken } from "@utils/getAuthToken";
import { deleteCity } from "@api/admin/cities";

export const useDeleteCity = () => {
  const queryClient = useQueryClient();
  const token = getAuthToken();

  return useMutation({
    mutationFn: (cityId: number) => deleteCity(cityId, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (error: any) => {
      console.error("Error deleting city:", error);
    },
  });
};
