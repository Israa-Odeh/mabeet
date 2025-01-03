import { RoomTypeFilterProps } from "./types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import styles from "./RoomTypeFilter.module.css";

const RoomTypeFilter = ({ value, onChange }: RoomTypeFilterProps) => {
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        className={styles.label}
        sx={{
          "&.Mui-focused": {
            color: "#fff",
          },
        }}
      >
        Room Type
      </InputLabel>
      <Select
        className={styles.selector}
        value={value}
        onChange={handleSelectChange}
        label="Room Type"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "& .MuiSelect-icon": {
            color: "#fff",
          },
        }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Double">Double</MenuItem>
        <MenuItem value="King Suite">King Suite</MenuItem>
        <MenuItem value="Cabin">Cabin</MenuItem>
        <MenuItem value="Ocean View">Ocean View</MenuItem>
        <MenuItem value="Standard">Standard</MenuItem>
        <MenuItem value="Suite">Suite</MenuItem>
        <MenuItem value="Deluxe">Deluxe</MenuItem>
        <MenuItem value="Economy">Economy</MenuItem>
        <MenuItem value="Family Suite">Family Suite</MenuItem>
        <MenuItem value="Executive Suite">Executive Suite</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RoomTypeFilter;
