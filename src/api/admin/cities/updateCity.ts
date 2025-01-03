import { CityFormValues } from "./types";
import { BASE_URL } from "@api/apiConfig";

const updateCity = async (
  token: string,
  cityId: number,
  cityData: CityFormValues
) => {
  const response = await fetch(`${BASE_URL}/cities/${cityId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cityData),
  });

  if (!response.ok) {
    throw new Error("Failed to update city.");
  }

  return true;
};

export default updateCity;
