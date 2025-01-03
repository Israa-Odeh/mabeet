import { UpdateRoomFormProps } from "./types";
import { useUpdateRoom } from "./useUpdateForm";
import RoomForm from "@containers/RoomForm";

const UpdateRoomForm = ({
  open,
  onClose,
  roomId,
  roomData,
}: UpdateRoomFormProps) => {
  const { mutate: updateRoom } = useUpdateRoom(roomId, onClose);

  return (
    <RoomForm
      initialValues={roomData}
      onSubmit={updateRoom}
      title="Update Room"
      open={open}
      onClose={onClose}
    />
  );
};

export default UpdateRoomForm;
