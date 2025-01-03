import { SnackbarProps } from "./types";
import { Snackbar, Alert } from "@mui/material";

const SnackbarComponent = ({
  open,
  message,
  severity,
  onClose,
}: SnackbarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
