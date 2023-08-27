import { useStations } from "../api";

export const fetcher = async () => {
  const response = await useStations();
  return response.data; // Assuming allStations returns an object with a 'data' property
};
