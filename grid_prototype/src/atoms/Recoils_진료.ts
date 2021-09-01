import { atom } from "recoil";

export const naviState = atom<boolean>({
  key: "naviState",
  default: false
});