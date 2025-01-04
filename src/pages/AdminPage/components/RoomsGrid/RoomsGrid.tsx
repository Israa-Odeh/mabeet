import { RoomsGridProps, DialogState } from "./types";
import { useState } from "react";
import { useRooms, useDeleteRoom } from "./hooks";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import { GridRowParams, GridColDef, DataGrid } from "@mui/x-data-grid";
import { Room } from "@api/hotel";
import EntityDialog from "@containers/EntityDialog";
import { IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationDialog from "@components/ConfirmationDialog";
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
  const [roomToDelete, setRoomToDelete] = useState<number | null>(null);

  const { data: rooms = [], isError } = useRooms(hotelId);
  const { mutate: deleteRoom } = useDeleteRoom();
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

  const handleDeleteClick = (roomId: number) => {
    setRoomToDelete(roomId);
  };

  const handleDeleteConfirm = () => {
    if (roomToDelete) {
      deleteRoom({ roomId: roomToDelete, hotelId });
      setRoomToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setRoomToDelete(null);
  };

  const columnsWithDelete: GridColDef[] = [
    ...roomsColumns,
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      headerAlign: "center",
      width: 128,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteClick(params.row.roomId);
          }}
          color="error"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

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
          columns={columnsWithDelete}
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

        <ConfirmationDialog
          open={!!roomToDelete}
          title="Delete Room"
          message="Are you sure you want to delete this room? This action cannot be undone."
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />

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
