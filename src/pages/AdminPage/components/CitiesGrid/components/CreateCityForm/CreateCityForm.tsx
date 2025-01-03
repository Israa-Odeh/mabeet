import { FormProps } from "@pages/AdminPage/types";
import { useCreateCity } from "./useCreateCity";
import { CityFormValues } from "@api/admin/cities";
import CityForm from "@containers/CityForm";

const CreateCityForm = ({ open, onClose }: FormProps) => {
  const { mutate: createCity } = useCreateCity(onClose);

  const initialValues: CityFormValues = {
    name: "",
    description: "",
  };

  return (
    <CityForm
      initialValues={initialValues}
      onSubmit={createCity}
      title="Create New City"
      open={open}
      onClose={onClose}
    />
  );
};

export default CreateCityForm;
