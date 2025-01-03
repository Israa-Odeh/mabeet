import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  id: Yup.number().required("City is required"),
  name: Yup.string().required("Hotel name is required"),
  description: Yup.string().required("Description is required"),
  hotelType: Yup.number().required("Hotel type is required"),
  starRating: Yup.number().min(1).max(5).required("Star rating is required"),
  latitude: Yup.number().required("Latitude is required"),
  longitude: Yup.number().required("Longitude is required"),
});
