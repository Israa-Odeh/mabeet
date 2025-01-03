import { PriceRangeFilterProps } from "./types";
import Slider from "@mui/material/Slider";
import styles from "./PriceRangeFilter.module.css";

const PriceRangeFilter = ({ value, onChange }: PriceRangeFilterProps) => {
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    onChange(newValue as number[]);
  };

  return (
    <div>
      <span className={styles.label}>Price Range</span>
      <Slider
        className={styles.slider}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        min={0}
        max={1000}
      />
    </div>
  );
};

export default PriceRangeFilter;
