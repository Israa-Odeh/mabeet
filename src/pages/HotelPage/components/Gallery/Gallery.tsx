import { useState } from "react";
import useGallery from "./hooks/useGallery";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import CircularProgressComponent from "@components/CircularProgress";
import GalleryGrid from "./components/GalleryGrid/GalleryGrid";
import ImageModal from "./components/ImageModal/ImageModal";
import AllPhotosModal from "./components/AllPhotosModal/AllPhotosModal";

const Gallery = ({ hotelId }: { hotelId: number }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showRemainingImages, setShowRemainingImages] = useState(false);

  const { data: images, isLoading, isError } = useGallery(hotelId);
  const { open, handleClose } = useSnackbar(isError);

  if (isLoading) return <CircularProgressComponent />;

  if (isError)
    return (
      <Snackbar
        open={open}
        message="Unable to load gallery. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );

  if (!images?.length) return null;

  const largeImage = images[0];
  const smallImages = images.slice(1, 7);
  const remainingImages = images.slice(7);

  const handleViewAllClick = () => {
    setShowRemainingImages(true);
  };

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const handleImageModalClose = () => {
    setSelectedImage(null);
  };

  const handleAllPhotosModalClose = () => {
    setShowRemainingImages(false);
  };

  return (
    <>
      <GalleryGrid
        largeImage={largeImage}
        smallImages={smallImages}
        remainingCount={remainingImages.length}
        onImageClick={handleImageClick}
        onViewAllClick={handleViewAllClick}
      />
      <ImageModal imageUrl={selectedImage} onClose={handleImageModalClose} />
      <AllPhotosModal
        images={images}
        isOpen={showRemainingImages}
        onClose={handleAllPhotosModalClose}
        onImageClick={handleImageClick}
      />
    </>
  );
};

export default Gallery;
