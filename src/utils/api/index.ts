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

export const getOneAdmin = async () => {
  return await axios
    .get(`${liveURI}/admin-auth/64fb1b39b343e01e60c7abc8/`)
    .then((res) => {
      // return res.data;
      console.log("yhe data", res.data);
    })
    .catch((err) => {
      throw err;
    });
};
