import { useState } from "react";
import { DialogState } from "./types";
import { useCities } from "../CitiesGrid/hooks";
import { useHotels, useDeleteHotel } from "./hooks";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import { HotelFormValues } from "@api/admin/hotels";
import {
  GridRowParams,
  GridColDef,
  DataGrid,
  GridPaginationModel,
} from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import { HOTELS_COLUMNS } from "./constants";
import { TextField } from "@mui/material";
import { textFieldStyles } from "@containers/Shared/styles";
import { dataGridStyles } from "../Shared/styles";
import { CreateHotelForm, UpdateHotelForm } from "./components";
import RoomsGrid from "../RoomsGrid";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationDialog from "@components/ConfirmationDialog";
import styles from "../Shared/styles.module.css";

const HotelsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 4,
    page: 0,
  });
  const [dialogState, setDialogState] = useState<DialogState>({ type: "none" });
  const [hotelToDelete, setHotelToDelete] = useState<number | null>(null);
  const [roomsDialog, setRoomsDialog] = useState<{
    open: boolean;
    hotelId: number | null;
    hotelName: string;
  }>({
    open: false,
    hotelId: null,
    hotelName: "",
  });

  const { data: cities = [] } = useCities("");
  const {
    data: hotelsData,
    isLoading,
    isError,
  } = useHotels(searchTerm, paginationModel.pageSize, paginationModel.page + 1);
  const { mutate: deleteHotel } = useDeleteHotel();

  const hotels = hotelsData?.hotels ?? [];
  const totalRows = hotelsData?.totalItemsCount ?? 0;

  const { open, handleClose } = useSnackbar(isError);

  const handlePaginationModelChange = (newModel: GridPaginationModel) => {
    setPaginationModel(newModel);
  };

  const openDialog = (type: DialogState["type"], hotel?: HotelFormValues) => {
    setDialogState({ type, selectedHotel: hotel });
  };

  const closeDialog = () => {
    setDialogState({ type: "none" });
  };

  const openRoomsDialog = (hotelId: number, hotelName: string) => {
    setRoomsDialog({ open: true, hotelId, hotelName });
  };

  const closeRoomsDialog = () => {
    setRoomsDialog({ open: false, hotelId: null, hotelName: "" });
  };

  const handleRowDoubleClick = (params: GridRowParams<HotelFormValues>) => {
    const hotel = hotels.find(({ id }) => id === params.id);
    if (hotel) {
      openDialog("update", hotel);
    }
  };

  const handleDeleteClick = (hotelId: number) => {
    setHotelToDelete(hotelId);
  };

  const handleDeleteConfirm = () => {
    if (hotelToDelete) {
      deleteHotel(hotelToDelete);
      setHotelToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setHotelToDelete(null);
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  };

  const columnsWithActions: GridColDef[] = [
    ...HOTELS_COLUMNS,
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            disableElevation
            disableRipple
            onClick={() => openRoomsDialog(params.row.id, params.row.name)}
            sx={{
              color: "#20292d",
              textTransform: "none",
              fontFamily: "Poppins, serif",
            }}
          >
            View Rooms
          </Button>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteClick(params.row.id);
            }}
            color="error"
            size="small"
            title="Delete hotel"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  if (isError) {
    return (
      <Snackbar
        open={open}
        message="Unable to load hotels. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );
  }

  return (
    <>
      <TextField
        fullWidth
        label="Search Hotels"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchTermChange}
        sx={{ ...textFieldStyles, marginBottom: "16px" }}
      />

      {isLoading ? (
        <div className={styles.loadingContainer}>
          Loading hotels. Please wait...
        </div>
      ) : (
        <div className={styles.gridContainer}>
          <DataGrid
            rows={hotels}
            columns={columnsWithActions}
            paginationModel={paginationModel}
            onPaginationModelChange={handlePaginationModelChange}
            pageSizeOptions={[4]}
            paginationMode="server"
            rowCount={totalRows}
            loading={isLoading}
            onRowDoubleClick={handleRowDoubleClick}
            disableRowSelectionOnClick
            sx={dataGridStyles}
          />
        </div>
      )}

      <div className={styles.buttonContainer}>
        <Button
          disableElevation
          disableRipple
          variant="contained"
          onClick={() => openDialog("create")}
          className={styles.createButton}
        >
          Create Hotel
        </Button>
      </div>

      <ConfirmationDialog
        open={!!hotelToDelete}
        title="Delete Hotel"
        message="Are you sure you want to delete this hotel? This action cannot be undone."
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />

      {dialogState.type === "create" && (
        <CreateHotelForm open={true} onClose={closeDialog} cities={cities} />
      )}

      {dialogState.type === "update" && dialogState.selectedHotel && (
        <UpdateHotelForm
          open={true}
          onClose={closeDialog}
          hotelData={dialogState.selectedHotel}
        />
      )}

      {roomsDialog.open && (
        <RoomsGrid
          open={roomsDialog.open}
          hotelId={roomsDialog.hotelId!}
          hotelName={roomsDialog.hotelName}
          handleClose={closeRoomsDialog}
        />
      )}
    </>
  );
};

export default HotelsGrid;
