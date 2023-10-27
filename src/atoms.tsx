import { atom } from "recoil";

type AppInfo = {
  company: string,
  created: string,
  location: string,
  notes: string,
  position: string,
  referrals: string,
  status: string,
  updated: string
};

type userInfoProps = {
  email: string, id: number, fname: string, lname: string, role: string, apps: AppInfo[]
}

export const userState = atom<userInfoProps>({
  key: "userState",
});