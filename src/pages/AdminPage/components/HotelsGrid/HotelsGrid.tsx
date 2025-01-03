import { useState } from "react";
import { DialogState } from "./types";
import { useCities } from "../CitiesGrid/hooks/useCities";
import { useHotels } from "./hooks/useHotels";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import { HotelFormValues } from "@api/admin/hotels";
import {
  GridRowParams,
  GridColDef,
  DataGrid,
  GridPaginationModel,
} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { HOTELS_COLUMNS } from "./constants";
import { TextField } from "@mui/material";
import { textFieldStyles } from "@containers/Shared/styles";
import { dataGridStyles } from "../Shared/styles";
import { CreateHotelForm, UpdateHotelForm } from "./components";
import RoomsGrid from "../RoomsGrid";
import styles from "../Shared/styles.module.css";

const HotelsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 4,
    page: 0,
  });
  const [dialogState, setDialogState] = useState<DialogState>({ type: "none" });
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

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  };

  const actionsColumn: GridColDef[] = [
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      renderCell: (params) => (
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
      ),
    },
  ];

  const fullColumns = HOTELS_COLUMNS.concat(actionsColumn);

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
            columns={fullColumns}
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
