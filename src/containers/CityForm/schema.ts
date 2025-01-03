import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("City name is required"),
  description: Yup.string().required("Description is required"),
});
