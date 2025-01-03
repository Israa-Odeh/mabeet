import { GalleryImage } from "@api/hotel";

export type GalleryGridProps = {
  largeImage: GalleryImage;
  smallImages: GalleryImage[];
  remainingCount: number;
  onImageClick: (url: string) => void;
  onViewAllClick: () => void;
};
