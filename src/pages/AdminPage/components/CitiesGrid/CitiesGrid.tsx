import { useState } from "react";
import { DialogState } from "./types";
import { useCities } from "./hooks/useCities";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import { City, CityWithHotelCounts } from "@api/admin/cities";
import { GridRowParams, DataGrid } from "@mui/x-data-grid";
import { TextField, Button } from "@mui/material";
import { textFieldStyles } from "@containers/Shared/styles";
import { CITIES_COLUMNS } from "./constants";
import { dataGridStyles } from "../Shared/styles";
import { CreateCityForm, UpdateCityForm } from "./components";
import styles from "../Shared/styles.module.css";

const CitiesGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogState, setDialogState] = useState<DialogState>({ type: "none" });
  const { data: cities = [], isLoading, isError } = useCities(searchTerm);
  const { open, handleClose } = useSnackbar(isError);

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

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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
        onChange={handleSearchTermChange}
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
            columns={CITIES_COLUMNS}
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
