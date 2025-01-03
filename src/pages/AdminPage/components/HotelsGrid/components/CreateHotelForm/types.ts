import { FormProps } from "@pages/AdminPage/types";

export type CreateHotelFormProps = FormProps & {
  cities: Array<{ id: number; name: string }>;
};
