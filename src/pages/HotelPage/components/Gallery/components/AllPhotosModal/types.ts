import { GalleryImage } from "@api/hotel";

export type ImageWithAlt = GalleryImage & {
  alt?: string;
};

export type AllPhotosModalProps = {
  images: ImageWithAlt[];
  isOpen: boolean;
  onClose: () => void;
  onImageClick: (url: string) => void;
};
