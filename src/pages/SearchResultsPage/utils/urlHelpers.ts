import { Filters } from "../types";
import { DEFAULT_FILTERS } from "../constants/filters";
import { NavigateOptions } from "react-router-dom";

export const getFilterParam = (
  queryParams: URLSearchParams,
  key: keyof Filters,
  defaultValue: Filters[keyof Filters]
) => {
  const value = queryParams.get(key);
  return value ? JSON.parse(value) : defaultValue;
};

export const getFiltersFromUrl = (queryParams: URLSearchParams): Filters => {
  const { priceRange, starRating, roomType, amenities } = DEFAULT_FILTERS;

  return {
    priceRange: getFilterParam(queryParams, "priceRange", priceRange),
    starRating: getFilterParam(queryParams, "starRating", starRating),
    roomType: getFilterParam(queryParams, "roomType", roomType),
    amenities: getFilterParam(queryParams, "amenities", amenities),
  };
};

export const updateFiltersInUrl = (
  { priceRange, starRating, roomType, amenities }: Filters,
  navigate: (path: string, options?: NavigateOptions) => void
) => {
  const updatedParams = new URLSearchParams(window.location.search);

  updatedParams.set("priceRange", JSON.stringify(priceRange));
  updatedParams.set("starRating", JSON.stringify(starRating));
  updatedParams.set("roomType", JSON.stringify(roomType));
  updatedParams.set("amenities", JSON.stringify(amenities));

  navigate(`${window.location.pathname}?${updatedParams.toString()}`, {
    replace: false,
  });
};
