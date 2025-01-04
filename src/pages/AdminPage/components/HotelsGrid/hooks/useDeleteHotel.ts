import { useQueryClient, useMutation } from "@tanstack/react-query";
import { getAuthToken } from "@utils/getAuthToken";
import { deleteHotel } from "@api/admin/hotels";

export const useDeleteHotel = () => {
  const queryClient = useQueryClient();
  const token = getAuthToken();

  return useMutation({
    mutationFn: (hotelId: number) => deleteHotel(hotelId, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
    },
    onError: (error: any) => {
      console.error("Error deleting hotel:", error);
    },
  });
};
