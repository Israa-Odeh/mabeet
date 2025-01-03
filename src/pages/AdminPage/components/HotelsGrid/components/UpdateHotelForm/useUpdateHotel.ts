import { useQueryClient, useMutation } from "@tanstack/react-query";
import { HotelFormValues, updateHotel } from "@api/admin/hotels";
import { getAuthToken } from "@utils/getAuthToken";

export const useUpdateHotel = (onHotelUpdateSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: HotelFormValues) => {
      const { id: hotelId, ...hotelData } = values;
      const token = getAuthToken();
      return updateHotel(token!, hotelId, hotelData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
      onHotelUpdateSuccess();
    },
    onError: (error: any) => {
      console.error("Error updating hotel:", error);
    },
  });
};
