import { atom } from "recoil";

export const naviState = atom<boolean>({
  key: "naviState",
  default: false
});

export const patientState = atom<any> ({
  key: "patientState",
  default: {
    pid: '',
    pt_nm: '',
    sex_cd: '',
    dobr: ''
  }
});