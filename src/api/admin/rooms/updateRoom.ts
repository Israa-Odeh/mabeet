import { Room } from "./types";
import { BASE_URL } from "@api/apiConfig";

const updateRoom = async (token: string, roomId: number, room: Room) => {
  const response = await fetch(`${BASE_URL}/rooms/${roomId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(room),
  });

  if (!response.ok) {
    throw new Error("Failed to update room.");
  }

  return true;
};

export default updateRoom;
