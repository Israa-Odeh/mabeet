import { AmenitiesFilterProps } from "./types";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import styles from "./AmenitiesFilter.module.css";

const AmenitiesFilter = ({
  amenities,
  selectedAmenities,
  onChange,
}: AmenitiesFilterProps) => {
  const handleCheckboxChange =
    (amenityName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(amenityName, e.target.checked);
    };

  return (
    <div>
      <span className={styles.label}>Amenities</span>
      <FormGroup>
        {amenities.map(({ name }) => (
          <FormControlLabel
            key={name}
            control={
              <Checkbox
                value={name}
                checked={selectedAmenities.includes(name)}
                onChange={handleCheckboxChange(name)}
                size="small"
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
              />
            }
            label={name}
            sx={{
              color: "#fff",
              "& .MuiFormControlLabel-label": {
                fontFamily: "Poppins, serif",
                fontSize: "0.875rem",
              },
            }}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default AmenitiesFilter;
