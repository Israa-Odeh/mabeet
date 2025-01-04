import { useState } from "react";
import { DialogState } from "./types";
import { useCities, useDeleteCity } from "./hooks";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import { City, CityWithHotelCounts } from "@api/admin/cities";
import { GridRowParams, GridColDef, DataGrid } from "@mui/x-data-grid";
import { CITIES_COLUMNS } from "./constants";
import { IconButton, TextField, Button } from "@mui/material";
import { textFieldStyles } from "@containers/Shared/styles";
import { dataGridStyles } from "../Shared/styles";
import ConfirmationDialog from "@components/ConfirmationDialog";
import { CreateCityForm, UpdateCityForm } from "./components";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../Shared/styles.module.css";

const CitiesGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogState, setDialogState] = useState<DialogState>({ type: "none" });
  const [cityToDelete, setCityToDelete] = useState<number | null>(null);

  const { data: cities = [], isLoading, isError } = useCities(searchTerm);
  const { open, handleClose } = useSnackbar(isError);
  const { mutate: deleteCity } = useDeleteCity();

  const openDialog = (type: DialogState["type"], city?: City) => {
    setDialogState({ type, selectedCity: city });
  };

  const closeDialog = () => {
    setDialogState({ type: "none" });
  };

  const handleRowDoubleClick = (params: GridRowParams<CityWithHotelCounts>) => {
    const city = cities.find((city) => city.id === params.id);
    if (city) {
      openDialog("update", city);
    }
  };

  const handleDeleteClick = (cityId: number) => {
    setCityToDelete(cityId);
  };

  const handleDeleteConfirm = () => {
    if (cityToDelete) {
      deleteCity(cityToDelete);
      setCityToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setCityToDelete(null);
  };

  const columnsWithDelete: GridColDef[] = [
    ...CITIES_COLUMNS,
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
            handleDeleteClick(params.row.id);
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
        open={open}
        message="Unable to load cities. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );
  }

  return (
    <>
      <TextField
        fullWidth
        label="Search Cities"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ ...textFieldStyles, marginBottom: "16px" }}
      />
      {isLoading ? (
        <div className={styles.loadingContainer}>
          Loading cities. Please wait...
        </div>
      ) : (
        <div className={styles.gridContainer}>
          <DataGrid
            rows={cities}
            columns={columnsWithDelete}
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
          Create City
        </Button>
      </div>

      <ConfirmationDialog
        open={!!cityToDelete}
        title="Delete City"
        message="Are you sure you want to delete this city? This action cannot be undone."
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />

      {dialogState.type === "create" && (
        <CreateCityForm open={true} onClose={closeDialog} />
      )}

      {dialogState.type === "update" && dialogState.selectedCity && (
        <UpdateCityForm
          open={true}
          onClose={closeDialog}
          cityData={dialogState.selectedCity}
        />
      )}
    </>
  );
};

export default CitiesGrid;
