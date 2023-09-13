import { atom } from "recoil";
import { userDetails } from "../utils/types";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const new_user = atom({
  key: "authState",
  default: {
    user: {} as userDetails,
  },
  // default: {} as userDetails, //  This is where all the user information s are beeen kept and its beeen  stored as an object
  effects_UNSTABLE: [persistAtom],
  // isAuthenticated: false,
});

export const log_out = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
  },
});
