import { AllPhotosModalProps } from "./types";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./AllPhotosModal.module.css";

const AllPhotosModal = ({
  images,
  isOpen,
  onClose,
  onImageClick,
}: AllPhotosModalProps) => (
  <Dialog open={isOpen} onClose={onClose} className={styles.dialog}>
    <div className={styles.backdrop} aria-hidden="true" onClick={onClose} />
    <DialogPanel className={styles.content}>
      <h2 className={styles.title}>All Photos</h2>
      <IconButton className={styles.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <div className={styles.grid}>
        {images.map(({ id, url, alt }) => (
          <div
            key={id}
            className={styles.item}
            onClick={() => onImageClick(url)}
          >
            <img src={url} alt={alt} className={styles.image} />
          </div>
        ))}
      </div>
    </DialogPanel>
  </Dialog>
);

export default AllPhotosModal;
