import { FormProps } from "../Shared/types";
import { CityFormValues } from "@api/admin/cities";

export type CityFormProps = FormProps & {
  initialValues: CityFormValues;
  onSubmit: (values: CityFormValues) => void;
};
