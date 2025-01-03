import { getDefaultDate } from "@utils/getDefaultDate";

export const buildHotelPageUrl = (hotelId: number, hotelName: string) => {
  const params = new URLSearchParams({
    hotelName,
    checkInDate: getDefaultDate(),
    checkOutDate: getDefaultDate(1),
  });

  return `/hotel/${hotelId}?${params.toString()}`;
};
