import { UpdateCityFormProps } from "./types";
import { useUpdateCity } from "./useUpdateCity";
import CityForm from "@containers/CityForm";

const UpdateCityForm = ({ open, onClose, cityData }: UpdateCityFormProps) => {
  const { id, ...initialValues } = cityData;
  const { mutate: updateCity } = useUpdateCity(id, onClose);

  return (
    <CityForm
      initialValues={initialValues}
      onSubmit={updateCity}
      title="Update City"
      open={open}
      onClose={onClose}
    />
  );
};

export default UpdateCityForm;
