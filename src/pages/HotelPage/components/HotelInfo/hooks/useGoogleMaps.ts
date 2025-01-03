import { useLoadScript } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyD3-XZlqupLnx2Izm1kinPaZr8bgP8YEtw";

export const useGoogleMaps = () => {
  return useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });
};
