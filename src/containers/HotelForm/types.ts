import { FormProps } from "../Shared/types";
import { HotelFormValues } from "@api/admin/hotels";

export type HotelFormProps = FormProps & {
  initialValues: HotelFormValues;
  cities?: Array<{ id: number; name: string }>;
  onSubmit: (values: HotelFormValues) => void;
};
