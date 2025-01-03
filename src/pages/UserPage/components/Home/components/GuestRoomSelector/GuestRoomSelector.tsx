import { GuestRoomSelectorProps } from "./types";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stepper from "@components/NumberInputStepper";
import styles from "./GuestRoomSelector.module.css";

const GuestRoomSelector = ({
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
}: GuestRoomSelectorProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={styles.guestRoomSelector}>
      <Button
        variant="outlined"
        disableElevation
        disableRipple
        onClick={toggleDropdown}
        className={styles.toggleButton}
      >
        {`
        ${adults} Adult${adults !== 1 ? "s" : ""}, 
        ${children} Child${children !== 1 ? "ren" : ""},
        ${rooms} Room${rooms !== 1 ? "s" : ""}
        `}
      </Button>

      {dropdownVisible && (
        <div className={styles.dropdown}>
          <Stepper
            label="Adults"
            value={adults}
            onChange={setAdults}
            max={30}
            min={2}
            step={1}
          />
          <Stepper
            label="Children"
            value={children}
            onChange={setChildren}
            max={10}
            min={0}
            step={1}
          />
          <Stepper
            label="Rooms"
            value={rooms}
            onChange={setRooms}
            max={30}
            min={1}
            step={1}
          />
          <Button
            variant="contained"
            disableElevation
            disableRipple
            onClick={toggleDropdown}
            className={styles.doneButton}
          >
            Done
          </Button>
        </div>
      )}
    </div>
  );
};

export default GuestRoomSelector;
