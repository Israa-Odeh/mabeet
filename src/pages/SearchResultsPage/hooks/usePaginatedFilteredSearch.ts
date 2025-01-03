import { SearchResult } from "@api/user/home";
import { Filters } from "../types";
import { useState, useRef, useCallback, useEffect } from "react";

const ITEMS_PER_PAGE = 6;

export const usePaginatedFilteredSearch = (
  searchResults: SearchResult[] | undefined,
  filters: Filters
) => {
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (!searchResults) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          displayedItems < searchResults.length
        ) {
          setDisplayedItems((prev) =>
            Math.min(prev + ITEMS_PER_PAGE, searchResults.length)
          );
        }
      });

      if (node) observer.current.observe(node);
    },
    [searchResults, displayedItems]
  );

  useEffect(() => {
    setDisplayedItems(ITEMS_PER_PAGE);
  }, [searchResults]);

  const filteredResults = searchResults
    ?.filter((hotel) => {
      const {
        roomPrice,
        starRating: hotelStarRating,
        roomType: hotelRoomType,
        amenities: hotelAmenities,
      } = hotel;

      const {
        priceRange,
        starRating: filterStarRating,
        roomType: filterRoomType,
        amenities: filterAmenities,
      } = filters;

      return (
        roomPrice >= priceRange[0] &&
        roomPrice <= priceRange[1] &&
        (filterStarRating === 0 || hotelStarRating === filterStarRating) &&
        (filterRoomType === "All" || hotelRoomType === filterRoomType) &&
        (filterAmenities.length === 0 ||
          hotelAmenities.some((amenity) =>
            filterAmenities.includes(amenity.name)
          ))
      );
    })
    .slice(0, displayedItems);

  return {
    filteredResults,
    lastElementRef,
  };
};
