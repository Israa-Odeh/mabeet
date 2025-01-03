import { Filters } from "@pages/SearchResultsPage/types";

export type FiltersSidebarProps = {
  filters: Filters;
  amenities: { name: string; description: string }[];
  isOpen: boolean;
  amenitiesLoading: boolean;
  amenitiesError: boolean;
  onPriceRangeChange: (range: number[]) => void;
  onStarRatingChange: (rating: number) => void;
  onRoomTypeChange: (type: string) => void;
  onAmenitiesChange: (value: string, checked: boolean) => void;
};
