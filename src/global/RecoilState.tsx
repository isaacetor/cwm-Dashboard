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

export const newUserData = atom({
  key: "Currentuser", // unique ID (with respect to other atoms/selectors)
  default: {},
});
