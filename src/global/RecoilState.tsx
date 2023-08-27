import { atom } from "recoil";

export const tempUserData = atom({
  key: "tempuser", // unique ID (with respect to other atoms/selectors)
  default: {
    name: "",
    email: "",
    password: "",
    address: "",
    psp: "",
    ward: "",
  },
});
