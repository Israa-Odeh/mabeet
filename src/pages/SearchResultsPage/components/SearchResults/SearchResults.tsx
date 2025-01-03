import { SearchResultsProps } from "./types";
import EmptyState from "@components/EmptyState";
import Card from "@components/Card";
import StarRating from "@components/StarRating";
import styles from "./SearchResults.module.css";

const SearchResults = ({
  filteredResults,
  lastElementRef,
  handleCardClick,
  isFilteredResultsEmpty,
}: SearchResultsProps) => {
  if (isFilteredResultsEmpty) {
    return (
      <div className={styles.emptyResults}>
        <EmptyState
          title="No hotels found"
          message="Try adjusting your search filters"
        />
      </div>
    );
  }

  return (
    <div className={styles.results}>
      {filteredResults?.map(
        (
          { hotelId, roomPhotoUrl, hotelName, cityName, roomPrice, starRating },
          index
        ) => (
          <div
            ref={index === filteredResults.length - 1 ? lastElementRef : null}
            key={hotelId}
          >
            <Card
              imageUrl={roomPhotoUrl}
              heading={hotelName}
              region={cityName}
              altText={hotelName}
              onClick={() => handleCardClick(hotelId, hotelName)}
            >
              <span className={styles.roomPrice}>${roomPrice}</span>
              <StarRating rating={starRating} />
            </Card>
          </div>
        )
      )}
    </div>
  );
};

export default SearchResults;
