import axios from "axios";
import { userData } from "../types";

export const liveURI = "https://twma-be.onrender.com/twma";

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
  try {
    const response = await axios.get(`${liveURI}/stations/all-stations`);
    return response.data.data;
  } catch (error) {
    // Handle error if needed
    throw error;
  }
};

// get all psps

export const getPSPS = async () => {
  try {
    const response = await axios.get(`${liveURI}/admin-auth/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneAdmin = async (adminId: string) => {
  return await axios
    .get(`${liveURI}/admin-auth/${adminId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
