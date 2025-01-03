import { BookingRequest, BookingResponse } from "./types";
import { BASE_URL } from "@api/apiConfig";

const createBooking = async (
  token: string,
  data: BookingRequest
): Promise<BookingResponse> => {
  const response = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create booking.");
  }

  return response.json();
};

export default createBooking;
