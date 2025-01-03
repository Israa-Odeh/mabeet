import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { BookingRequest, createBooking } from "@api/booking";
import { getAuthToken } from "@utils/getAuthToken";
import { BookingFormValues } from "../types";

export const useCheckoutMutation = (
  hotelName: string,
  roomNumber: string,
  roomType: string,
  totalCost: number
) => {
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({ token, data }: { token: string; data: BookingRequest }) =>
      createBooking(token, data),
    onSuccess: (data) => {
      navigate("/confirmation", { state: data });
    },
  });

  const handleSubmit = (values: BookingFormValues) => {
    const token = getAuthToken()!;

    const bookingData: BookingRequest = {
      customerName: values.customerName,
      hotelName,
      roomNumber,
      roomType,
      bookingDateTime: new Date().toISOString(),
      totalCost,
      paymentMethod: values.paymentMethod,
    };

    mutate({
      token,
      data: bookingData,
    });
  };

  return {
    handleSubmit,
    isPending,
    isError,
  };
};
