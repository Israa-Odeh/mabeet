import { FormProps } from "@pages/AdminPage/types";
import { City } from "@api/admin/cities";

export type UpdateCityFormProps = FormProps & {
  cityData: City;
};
