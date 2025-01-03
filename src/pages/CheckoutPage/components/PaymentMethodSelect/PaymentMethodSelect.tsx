import { PaymentMethodSelectProps } from "./types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const paymentMethods = [
  "Credit Card",
  "Debit Card",
  "PayPal",
  "Cash on Delivery",
];

const PaymentMethodSelect = ({
  value,
  onChange,
  error,
  touched,
}: PaymentMethodSelectProps) => (
  <FormControl
    fullWidth
    error={touched && Boolean(error)}
    sx={{
      marginTop: "24px",
      "& .MuiInputLabel-root": {
        "&.Mui-focused": {
          color: "#20292d",
        },
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#20292d",
          borderRadius: "12px",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#20292d",
        },
      },
    }}
  >
    <InputLabel id="paymentMethod-label">Payment Method</InputLabel>
    <Select
      labelId="paymentMethod-label"
      id="paymentMethod"
      name="paymentMethod"
      value={value}
      onChange={onChange}
      label="Payment Method"
    >
      <MenuItem value="">Select Payment Method</MenuItem>
      {paymentMethods.map((paymentMethod) => (
        <MenuItem key={paymentMethod} value={paymentMethod}>
          {paymentMethod}
        </MenuItem>
      ))}
    </Select>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default PaymentMethodSelect;
