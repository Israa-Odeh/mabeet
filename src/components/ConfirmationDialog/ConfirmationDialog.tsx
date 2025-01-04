import { ConfirmationDialogProps } from "./types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import styles from "./ConfirmationDialog.module.css";

const ConfirmationDialog = ({
  open,
  title,
  message,
  onCancel,
  onConfirm,
}: ConfirmationDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="confirmation-dialog-title"
      aria-describedby="confirmation-dialog-description"
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle id="confirmation-dialog-title" className={styles.title}>
        {title}
      </DialogTitle>
      <DialogContent className={styles.content}>
        <p id="confirmation-dialog-description">{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="inherit" className={styles.button}>
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          className={`${styles.button} ${styles.confirmButton}`}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
