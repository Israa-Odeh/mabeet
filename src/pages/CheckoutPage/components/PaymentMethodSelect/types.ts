import { SelectChangeEvent } from "@mui/material";

export type PaymentMethodSelectProps = {
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
  error: string | undefined;
  touched: boolean | undefined;
};
