import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Room, updateRoom } from "@api/admin/rooms";
import { getAuthToken } from "@utils/getAuthToken";

export const useUpdateRoom = (
  roomId: number,
  onRoomUpdateSuccess: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (roomData: Room) => {
      return updateRoom(getAuthToken()!, roomId, roomData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      onRoomUpdateSuccess();
    },
    onError: (error: any) => {
      console.error("Error updating room:", error);
    },
  });
};
