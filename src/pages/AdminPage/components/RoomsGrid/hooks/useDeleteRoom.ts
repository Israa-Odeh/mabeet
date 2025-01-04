import { useQueryClient, useMutation } from "@tanstack/react-query";
import { getAuthToken } from "@utils/getAuthToken";
import { deleteRoom } from "@api/admin/rooms";

export const useDeleteRoom = () => {
  const queryClient = useQueryClient();
  const token = getAuthToken();

  return useMutation({
    mutationFn: ({ roomId, hotelId }: { roomId: number; hotelId: number }) =>
      deleteRoom(roomId, hotelId, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (error: any) => {
      console.error("Error deleting room:", error);
    },
  });
};
