import { BASE_URL } from "@api/apiConfig";

const deleteCity = async (cityId: number, token: string) => {
  const response = await fetch(`${BASE_URL}/cities/${cityId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete city.");
  }

  return;
};

export default deleteCity;
