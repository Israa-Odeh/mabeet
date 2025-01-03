import { CreateHotelFormProps } from "./types";
import { useCreateHotel } from "./useCreateHotel";
import { HotelFormValues } from "@api/admin/hotels";
import HotelForm from "@containers/HotelForm";

const CreateHotelForm = ({ open, onClose, cities }: CreateHotelFormProps) => {
  const { mutate: createHotel } = useCreateHotel(onClose);

  const initialValues: HotelFormValues = {
    id: cities[0]["id"],
    name: "",
    description: "",
    hotelType: 1,
    starRating: 1,
    latitude: 0,
    longitude: 0,
  };

  return (
    <HotelForm
      initialValues={initialValues}
      onSubmit={createHotel}
      title="Create New Hotel"
      open={open}
      onClose={onClose}
      cities={cities}
    />
  );
};

export default CreateHotelForm;
