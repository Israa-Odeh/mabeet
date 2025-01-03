import { useQueryClient, useMutation } from "@tanstack/react-query";
import { HotelFormValues, createHotel } from "@api/admin/hotels";
import { getAuthToken } from "@utils/getAuthToken";

export const useCreateHotel = (onHotelCreationSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: HotelFormValues) => {
      const { id: cityId, ...hotelData } = values;
      return createHotel(getAuthToken()!, cityId, hotelData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
      onHotelCreationSuccess();
    },
    onError: (error: any) => {
      console.error("Error creating hotel:", error);
    },
  });
};
