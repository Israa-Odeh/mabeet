import { Dayjs } from "dayjs";

export type DatePickerFieldProps = {
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
};
