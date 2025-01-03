import { Room } from "@api/hotel";

export type RoomsGridProps = {
  open: boolean;
  handleClose: () => void;
  hotelId: number;
  hotelName: string;
};

export type DialogState = {
  type: "none" | "create" | "update";
  selectedRoom?: Room;
};
