import { BookingFormValues } from "../types";
import { FormikHelpers, useFormik } from "formik";
import { validationSchema } from "../schema";

export const useFormikCheckout = (
  onSubmit: (
    values: BookingFormValues,
    formikHelpers: FormikHelpers<BookingFormValues>
  ) => void,
  initialCustomerName: string
) => {
  return useFormik<BookingFormValues>({
    initialValues: {
      customerName: initialCustomerName,
      paymentMethod: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });
};
