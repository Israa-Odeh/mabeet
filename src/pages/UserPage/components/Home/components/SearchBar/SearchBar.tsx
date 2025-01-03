import { useState } from "react";
import useCheckInCheckOutDates from "./hooks/useCheckInCheckOutDates";
import { useNavigate } from "react-router-dom";
import SearchField from "@components/SearchField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@components/DatePickerField";
import GuestRoomSelector from "../GuestRoomSelector";
import Button from "@mui/material/Button";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    minCheckInDate,
    maxCheckInDate,
    minCheckOutDate,
    maxCheckOutDate,
  } = useCheckInCheckOutDates();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    searchParams.append("checkInDate", checkInDate!.format("YYYY-MM-DD"));
    searchParams.append("checkOutDate", checkOutDate!.format("YYYY-MM-DD"));
    searchParams.append("city", searchQuery);
    searchParams.append("adults", adults.toString());
    searchParams.append("children", children.toString());
    searchParams.append("numberOfRooms", rooms.toString());

    navigate(`/search-results?${searchParams.toString()}`);
  };

  return (
    <div className={styles.searchBar}>
      <SearchField
        placeholder="Search for hotels, cities..."
        onSearchChange={setSearchQuery}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles.datePickersContainer}>
          <DatePickerField
            label="Check-in Date"
            value={checkInDate}
            onChange={setCheckInDate}
            minDate={minCheckInDate}
            maxDate={maxCheckInDate}
          />
          <DatePickerField
            label="Check-out Date"
            value={checkOutDate}
            onChange={setCheckOutDate}
            minDate={minCheckOutDate}
            maxDate={maxCheckOutDate}
          />
        </div>
      </LocalizationProvider>
      <GuestRoomSelector
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
        rooms={rooms}
        setRooms={setRooms}
      />
      <Button
        variant="contained"
        disableElevation
        disableRipple
        className={styles.searchButton}
        disabled={!searchQuery}
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
