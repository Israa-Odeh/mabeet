import * as Yup from "yup";

export const validationSchema = Yup.object({
  paymentMethod: Yup.string().required("Payment method is required"),
});
