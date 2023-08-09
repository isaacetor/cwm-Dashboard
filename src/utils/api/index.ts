import axios from "axios";
import { userData } from "../types";

const liveURI = "https://twma-be.onrender.com/twma/";

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
