import { GridColDef } from "@mui/x-data-grid";

export const roomsColumns: GridColDef[] = [
  {
    field: "roomId",
    headerName: "ID",
    width: 96,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "roomNumber",
    headerName: "Room Number",
    width: 124,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "roomType",
    headerName: "Room Type",
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "capacityOfAdults",
    headerName: "Adults Capacity",
    width: 140,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "capacityOfChildren",
    headerName: "Children Capacity",
    width: 160,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "price",
    headerName: "Price",
    width: 96,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "availability",
    headerName: "Availability",
    width: 120,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => <span>{params.value ? "✔" : "✘"}</span>,
  },
  {
    field: "roomAmenities",
    headerName: "Amenities",
    flex: 1,
    minWidth: 200,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <span>
        {params.value
          ?.map((amenity: { name: string }) => amenity.name)
          .join(", ")}
      </span>
    ),
  },
];
