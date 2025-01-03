import { CityFormValues } from "./types";
import { BASE_URL } from "@api/apiConfig";

const createCity = async (token: string, city: CityFormValues) => {
  const response = await fetch(`${BASE_URL}/cities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(city),
  });

  if (!response.ok) {
    throw new Error("Failed to create city.");
  }

  return response.json();
};

export default createCity;
