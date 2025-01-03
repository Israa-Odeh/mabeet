import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Room, createRoom } from "@api/admin/rooms";
import { getAuthToken } from "@utils/getAuthToken";

export const useCreateRoom = (
  hotelId: number,
  onRoomCreationSuccess: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (roomData: Room) => {
      return createRoom(getAuthToken()!, hotelId, roomData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      onRoomCreationSuccess();
    },
    onError: (error: any) => {
      console.error("Error creating room:", error);
    },
  });
};
