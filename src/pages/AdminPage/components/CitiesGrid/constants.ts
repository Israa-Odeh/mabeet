import { GridColDef } from "@mui/x-data-grid";

export const CITIES_COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", width: 96 },
  { field: "name", headerName: "City Name", width: 160 },
  { field: "numHotels", headerName: "Number of Hotels", width: 160 },
  { field: "description", headerName: "Description", flex: 1, minWidth: 200 },
];
