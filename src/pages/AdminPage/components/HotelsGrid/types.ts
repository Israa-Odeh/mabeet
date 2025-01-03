import { HotelFormValues } from "@api/admin/hotels";

export type DialogState = {
  type: "none" | "create" | "update";
  selectedHotel?: HotelFormValues;
};
