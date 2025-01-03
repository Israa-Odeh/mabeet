import { DatePickerFieldProps } from "./types";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { textFieldStyles, dayStyles } from "./styles";

const DatePickerField = ({
  label,
  value,
  onChange,
  minDate,
  maxDate,
}: DatePickerFieldProps) => (
  <DatePicker
    label={label}
    value={value}
    onChange={onChange}
    minDate={minDate}
    maxDate={maxDate}
    format="DD/MM/YYYY"
    slotProps={{
      textField: {
        fullWidth: true,
        sx: textFieldStyles,
      },
      day: {
        sx: dayStyles,
      },
    }}
  />
);

export default DatePickerField;
