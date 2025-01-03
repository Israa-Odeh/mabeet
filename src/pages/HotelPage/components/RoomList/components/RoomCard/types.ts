import { Room } from "@api/hotel";

export type RoomCardProps = {
  room: Room;
  onReserve: (room: Room) => void;
};
