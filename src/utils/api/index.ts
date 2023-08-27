import axios from "axios";
import { userData } from "../types";

const liveURI = "https://twma-be.onrender.com/twma";

export const createClient = async ({}: // name,
// email,
// password,
// phoneNumber,
// address,
userData) => {
  return await axios
    .post(`${liveURI}/auth/register`, {
      // name,
      // email,
      // password,
      // phoneNumber,
      // address,
    })
    .then((res) => res.data);
};

export const useStations = async () => {
  return await axios
    .get(`${liveURI}/stations/all-stations`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const fetcher = async () => {
  try {
    const response = await axios.get(`${liveURI}/stations/all-stations`);
    return response.data;
  } catch (error) {
    // Handle error if needed
    throw error;
  }
};
