import { UpdateHotelFormProps } from "./types";
import { useUpdateHotel } from "./useUpdateHotel";
import HotelForm from "@containers/HotelForm";

const UpdateHotelForm = ({
  open,
  onClose,
  hotelData,
}: UpdateHotelFormProps) => {
  const { mutate: updateHotel } = useUpdateHotel(onClose);

  return (
    <HotelForm
      initialValues={hotelData}
      onSubmit={updateHotel}
      title="Update Hotel"
      open={open}
      onClose={onClose}
    />
  );
};

export default UpdateHotelForm;
