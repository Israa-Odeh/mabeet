import { GalleryImage } from "./types";
import { BASE_URL } from "@api/apiConfig";

const fetchGallery = async (hotelId: number): Promise<GalleryImage[]> => {
  const response = await fetch(`${BASE_URL}/hotels/${hotelId}/gallery`);

  if (!response.ok) {
    throw new Error("Failed to fetch gallery");
  }

  return response.json();
};

export default fetchGallery;
