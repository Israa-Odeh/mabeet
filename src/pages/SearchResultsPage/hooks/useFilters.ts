import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFiltersFromUrl, updateFiltersInUrl } from "../utils/urlHelpers";
import { Filters } from "../types";

export const useFilters = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);

  const [filters, setFilters] = useState(getFiltersFromUrl(queryParams));

  useEffect(() => {
    setFilters(getFiltersFromUrl(queryParams));
  }, [search]);

  const updateFilters = (newFilters: Filters) => {
    setFilters(newFilters);
    updateFiltersInUrl(newFilters, navigate);
  };

  const handleFilterChange = (
    filter: keyof Filters,
    value: Filters[keyof Filters]
  ) => {
    updateFilters({ ...filters, [filter]: value });
  };

  const handleAmenitiesChange = (value: string, checked: boolean) => {
    const { amenities } = filters;
    const updatedAmenities = checked
      ? [...amenities, value]
      : amenities.filter((amenity) => amenity !== value);
    handleFilterChange("amenities", updatedAmenities);
  };

  return {
    filters,
    updateFilters,
    handlePriceRangeChange: (priceRange: number[]) =>
      handleFilterChange("priceRange", priceRange),
    handleStarRatingChange: (starRating: number) =>
      handleFilterChange("starRating", starRating),
    handleRoomTypeChange: (roomType: string) =>
      handleFilterChange("roomType", roomType),
    handleAmenitiesChange,
  };
};
