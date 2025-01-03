import { RoomsGridProps, DialogState } from "./types";
import { useState } from "react";
import useRooms from "./hooks/useRooms";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import { GridRowParams, DataGrid } from "@mui/x-data-grid";
import { Room } from "@api/hotel";
import EntityDialog from "@containers/EntityDialog";
import { IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { roomsColumns } from "./columns";
import { CreateRoomForm, UpdateRoomForm } from "./components";
import { dataGridStyles } from "../Shared/styles";
import sharedStyles from "../Shared/styles.module.css";
import styles from "./RoomsGrid.module.css";

const RoomsGrid = ({
  open,
  handleClose,
  hotelId,
  hotelName,
}: RoomsGridProps) => {
  const [dialogState, setDialogState] = useState<DialogState>({ type: "none" });
  const { data: rooms = [], isLoading, isError } = useRooms(hotelId);
  const { open: snackbarOpen, handleClose: handleSnackbarClose } =
    useSnackbar(isError);

  const openDialog = (type: DialogState["type"], room?: Room) => {
    setDialogState({ type, selectedRoom: room });
  };

  const closeDialog = () => {
    setDialogState({ type: "none" });
  };

  const handleRowDoubleClick = (params: GridRowParams<Room>) => {
    const room = rooms.find((room) => room.roomId === params.id);
    if (room) {
      openDialog("update", room);
    }
  };

  if (isLoading) {
    return (
      <div className={sharedStyles.loadingContainer}>
        Loading rooms. Please wait...
      </div>
    );
  }

  if (isError) {
    return (
      <Snackbar
        open={snackbarOpen}
        message="Unable to load rooms. Please try again later."
        severity="error"
        onClose={handleSnackbarClose}
      />
    );
  }

  return (
    <EntityDialog
      open={open}
      onClose={handleClose}
      title={`${hotelName} - Rooms`}
      maxWidth="lg"
    >
      <IconButton
        onClick={handleClose}
        aria-label="close"
        className={styles.closeButton}
      >
        <CloseIcon />
      </IconButton>
      <div>
        <DataGrid
          rows={rooms}
          columns={roomsColumns}
          getRowId={(row: Room) => row.roomId}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[4]}
          onRowDoubleClick={handleRowDoubleClick}
          disableRowSelectionOnClick
          sx={dataGridStyles}
        />
        <div className={styles.buttonContainer}>
          <Button
            disableElevation
            disableRipple
            variant="contained"
            onClick={() => openDialog("create")}
            className={sharedStyles.createButton}
          >
            Create Room
          </Button>
        </div>

        {dialogState.type === "create" && (
          <CreateRoomForm open={true} onClose={closeDialog} hotelId={hotelId} />
        )}

        {dialogState.type === "update" && dialogState.selectedRoom && (
          <UpdateRoomForm
            open={true}
            onClose={closeDialog}
            roomId={dialogState.selectedRoom.roomId}
            roomData={{
              roomNumber: dialogState.selectedRoom.roomNumber.toString(),
              cost: dialogState.selectedRoom.price,
            }}
          />
        )}
      </div>
    </EntityDialog>
  );
};

export default RoomsGrid;
