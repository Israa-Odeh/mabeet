import { CreateRoomFormProps } from "./types";
import { useCreateRoom } from "./useCreateRoom";
import { Room } from "@api/admin/rooms";
import RoomForm from "@containers/RoomForm";

const CreateRoomForm = ({ open, onClose, hotelId }: CreateRoomFormProps) => {
  const { mutate: createRoom } = useCreateRoom(hotelId, onClose);

  const initialValues: Room = {
    roomNumber: "",
    cost: 0,
  };

  return (
    <RoomForm
      initialValues={initialValues}
      onSubmit={createRoom}
      title="Create New Room"
      open={open}
      onClose={onClose}
    />
  );
};

export default CreateRoomForm;
