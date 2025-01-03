import { FormProps } from "@pages/AdminPage/types";
import { Room } from "@api/admin/rooms";

export type UpdateRoomFormProps = FormProps & {
  roomId: number;
  roomData: Room;
};
