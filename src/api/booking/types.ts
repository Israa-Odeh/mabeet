export type BookingRequest = {
  customerName: string;
  hotelName: string;
  roomNumber: string;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
};

export type BookingResponse = BookingRequest & {
  bookingStatus: string;
  confirmationNumber: string;
};
