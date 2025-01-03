import { FormProps } from "../Shared/types";
import { Room } from "@api/admin/rooms";

export type RoomFormProps = FormProps & {
  initialValues: Room;
  onSubmit: (values: Room) => void;
};
