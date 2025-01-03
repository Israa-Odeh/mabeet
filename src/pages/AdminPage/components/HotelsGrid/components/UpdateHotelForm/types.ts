import { HotelFormValues } from "@api/admin/hotels";
import { FormProps } from "@pages/AdminPage/types";

export type UpdateHotelFormProps = FormProps & {
  hotelData: HotelFormValues;
};
