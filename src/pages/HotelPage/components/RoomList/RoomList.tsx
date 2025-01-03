import { RoomListProps } from "./types";
import { useNavigate } from "react-router-dom";
import { useRooms } from "./hooks/useRooms";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import { Room } from "@api/hotel";
import { differenceInDays } from "date-fns";
import CircularProgressComponent from "@components/CircularProgress";
import RoomCard from "./components/RoomCard/RoomCard";
import styles from "./RoomList.module.css";

const RoomList = ({
  hotelId,
  hotelName,
  checkInDate,
  checkOutDate,
}: RoomListProps) => {
  const navigate = useNavigate();
  const {
    data: rooms,
    isLoading,
    isError,
  } = useRooms(hotelId, checkInDate, checkOutDate);
  const { open, handleClose } = useSnackbar(isError);

  const handleReserve = ({ roomNumber, roomType, price }: Room) => {
    const numberOfNights = differenceInDays(checkOutDate, checkInDate);
    const totalCost = numberOfNights * price;

    navigate("/checkout", {
      state: {
        hotelName,
        roomNumber,
        roomType,
        totalCost,
      },
    });
  };

  if (isLoading) return <CircularProgressComponent />;

  if (isError)
    return (
      <Snackbar
        open={open}
        message="Unable to load rooms. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Available Accommodations</h2>

      <div className={styles.roomsGrid}>
        {rooms?.map((room) => (
          <RoomCard key={room.roomId} room={room} onReserve={handleReserve} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
