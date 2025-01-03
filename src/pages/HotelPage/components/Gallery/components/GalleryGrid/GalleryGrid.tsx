import { GalleryGridProps } from "./types";
import styles from "./GalleryGrid.module.css";

const GalleryGrid = ({
  largeImage,
  smallImages,
  remainingCount,
  onImageClick,
  onViewAllClick,
}: GalleryGridProps) => {
  const renderSmallImages = (start: number, end: number) =>
    smallImages.slice(start, end).map(({ id, url }) => (
      <div key={id} className={styles.galleryItem}>
        <img
          src={url}
          alt="Different views of the hotel, highlighting various spaces and amenities"
          className={styles.galleryImage}
          onClick={() => onImageClick(url)}
        />
      </div>
    ));

  return (
    <div className={styles.galleryGroup}>
      <div className={styles.largeImage}>
        <img
          src={largeImage.url}
          alt="Hotel's exterior view, showcasing the main entrance and surrounding outdoor area"
          className={styles.galleryImage}
          onClick={() => onImageClick(largeImage.url)}
        />
      </div>

      <div className={styles.smallImages}>
        <div className={styles.smallImagesRow}>{renderSmallImages(0, 3)}</div>

        <div className={styles.smallImagesRow}>
          {renderSmallImages(3, 5)}

          {smallImages.length === 6 && (
            <div className={styles.galleryItem} onClick={onViewAllClick}>
              <img
                src={smallImages[5].url}
                alt="Different views of the hotel, highlighting various spaces and amenities"
                className={styles.galleryImage}
              />
              <div className={styles.plusPlaceholder}>
                <span className={styles.overlayCount}>+{remainingCount}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
