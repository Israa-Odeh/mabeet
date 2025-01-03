import { GridColDef } from "@mui/x-data-grid";

export const HOTELS_COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", width: 96 },
  { field: "name", headerName: "Hotel Name", width: 160 },
  { field: "hotelType", headerName: "Hotel Type", width: 120 },
  { field: "starRating", headerName: "Star Rating", width: 120 },
  { field: "numRooms", headerName: "Number of Rooms", width: 160 },
  {
    field: "latitude",
    headerName: "Latitude",
    width: 120,
  },
  {
    field: "longitude",
    headerName: "Longitude",
    width: 120,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 200,
  },
];
