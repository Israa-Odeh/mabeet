import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useAmenities,
  useFilters,
  useSearchResults,
  usePaginatedFilteredSearch,
} from "./hooks";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import CircularProgressComponent from "@components/CircularProgress";
import EmptyState from "@components/EmptyState";
import { FiltersSidebar, SearchResults } from "./components";
import { IconButton } from "@mui/material";
import styles from "./SearchResultsPage.module.css";

const SearchResultsPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const navigate = useNavigate();

  const params = {
    checkInDate: queryParams.get("checkInDate") ?? "",
    checkOutDate: queryParams.get("checkOutDate") ?? "",
    city: queryParams.get("city") ?? "",
    adults: Number(queryParams.get("adults")) || 2,
    children: Number(queryParams.get("children")) || 0,
    numberOfRooms: Number(queryParams.get("numberOfRooms")) || 1,
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const {
    filters,
    handlePriceRangeChange,
    handleStarRatingChange,
    handleRoomTypeChange,
    handleAmenitiesChange,
  } = useFilters();

  const {
    data: amenities,
    isLoading: amenitiesIsLoading,
    isError: amenitiesIsError,
  } = useAmenities();

  const { data: searchResults, isError, isLoading } = useSearchResults(params);
  const { open, handleClose } = useSnackbar(isError);

  const { filteredResults, lastElementRef } = usePaginatedFilteredSearch(
    searchResults,
    filters
  );
  const isFilteredResultsEmpty =
    !filteredResults || filteredResults.length === 0;

  const handleCardClick = (hotelId: number, hotelName: string) => {
    navigate(
      `/hotel/${hotelId.toString()}?hotelName=${encodeURIComponent(
        hotelName
      )}&checkInDate=${params.checkInDate}&checkOutDate=${params.checkOutDate}`
    );
  };

  if (isLoading) return <CircularProgressComponent />;

  if (isError)
    return (
      <Snackbar
        open={open}
        message="Unable to load search results. Please try again later."
        severity="error"
        onClose={handleClose}
      />
    );

  if (!searchResults?.length) {
    return (
      <EmptyState
        title="No hotels found"
        message="Try adjusting your search criteria"
      />
    );
  }

  return (
    <div className={styles.container}>
      <FiltersSidebar
        filters={filters}
        amenities={amenities || []}
        isOpen={isSidebarOpen}
        amenitiesLoading={amenitiesIsLoading}
        amenitiesError={amenitiesIsError}
        onPriceRangeChange={handlePriceRangeChange}
        onStarRatingChange={handleStarRatingChange}
        onRoomTypeChange={handleRoomTypeChange}
        onAmenitiesChange={handleAmenitiesChange}
      />
      <SearchResults
        filteredResults={filteredResults}
        lastElementRef={lastElementRef}
        handleCardClick={handleCardClick}
        isFilteredResultsEmpty={isFilteredResultsEmpty}
      />
      <IconButton
        className={styles.toggleSidebarButton}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isSidebarOpen ? "✕" : "☰"}
      </IconButton>
    </div>
  );
};

export default SearchResultsPage;
