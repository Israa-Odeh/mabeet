import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  roomNumber: Yup.string().required("Room number is required"),
  cost: Yup.number().min(0).required("Cost is required"),
});
