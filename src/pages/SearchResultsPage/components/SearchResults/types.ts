import { SearchResult } from "@api/user/home";

export type SearchResultsProps = {
  filteredResults: SearchResult[] | undefined;
  lastElementRef: (node: HTMLDivElement) => void;
  handleCardClick: (hotelId: number, hotelName: string) => void;
  isFilteredResultsEmpty: boolean;
};
