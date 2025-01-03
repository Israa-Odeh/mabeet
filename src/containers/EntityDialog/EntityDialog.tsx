import { EntityDialogProps } from "./types";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import styles from "./EntityDialog.module.css";

const EntityDialog = ({
  open,
  onClose,
  title,
  children,
  maxWidth = "sm",
}: EntityDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={maxWidth}>
      <DialogTitle className={styles.dialogTitle}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default EntityDialog;
