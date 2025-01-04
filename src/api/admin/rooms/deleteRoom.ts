import { BASE_URL } from "@api/apiConfig";

const deleteRoom = async (roomId: number, hotelId: number, token: string) => {
  const response = await fetch(
    `${BASE_URL}/hotels/${hotelId}/rooms/${roomId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete room.");
  }

  return;
};

export default deleteRoom;
