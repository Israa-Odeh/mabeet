export type AmenitiesFilterProps = {
  amenities: { name: string; description: string }[];
  selectedAmenities: string[];
  onChange: (value: string, checked: boolean) => void;
};
