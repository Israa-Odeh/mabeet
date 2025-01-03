import { FiltersSidebarProps } from "./types";
import classNames from "classnames";
import {
  PriceRangeFilter,
  StarRatingFilter,
  RoomTypeFilter,
  AmenitiesFilter,
} from "./components";
import styles from "./FiltersSidebar.module.css";

const FiltersSidebar = ({
  filters: { priceRange, starRating, roomType, amenities: selectedAmenities },
  amenities,
  isOpen,
  amenitiesLoading,
  amenitiesError,
  onPriceRangeChange,
  onStarRatingChange,
  onRoomTypeChange,
  onAmenitiesChange,
}: FiltersSidebarProps) => {
  const renderAmenitiesFilter = () => {
    if (amenitiesLoading) {
      return <div className={styles.loading}>Loading amenities...</div>;
    }

    if (amenitiesError) {
      return <div className={styles.error}>Unable to load amenities</div>;
    }

    return (
      <AmenitiesFilter
        amenities={amenities}
        selectedAmenities={selectedAmenities}
        onChange={onAmenitiesChange}
      />
    );
  };

  return (
    <div className={classNames(styles.sidebar, { [styles.open]: isOpen })}>
      <PriceRangeFilter value={priceRange} onChange={onPriceRangeChange} />
      <StarRatingFilter value={starRating} onChange={onStarRatingChange} />
      <RoomTypeFilter value={roomType} onChange={onRoomTypeChange} />
      {renderAmenitiesFilter()}
    </div>
  );
};

export default FiltersSidebar;
