import { Room } from "./types";
import { BASE_URL } from "@api/apiConfig";

const createRoom = async (token: string, hotelId: number, room: Room) => {
  const response = await fetch(`${BASE_URL}/hotels/${hotelId}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(room),
  });

  if (!response.ok) {
    throw new Error("Failed to create room.");
  }

  return response.json();
};

export default createRoom;
