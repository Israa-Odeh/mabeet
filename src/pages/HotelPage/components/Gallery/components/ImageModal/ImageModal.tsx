import { ImageModalProps } from "./types";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./ImageModal.module.css";

const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => {
  if (!imageUrl) return null;

  return (
    <Dialog
      open={!!imageUrl}
      onClose={onClose}
      className={styles.dialogOverlay}
    >
      <DialogPanel className={styles.dialogContent}>
        <IconButton
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>
        <img
          src={imageUrl}
          alt="Image preview in fullscreen mode"
          className={styles.fullscreenImage}
          onClick={onClose}
        />
      </DialogPanel>
    </Dialog>
  );
};

export default ImageModal;
