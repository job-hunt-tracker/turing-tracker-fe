import { atom } from "recoil";

type userInfoProps = {
  email: string, id: number, fname: string, lname: string, role: string, apps: object[]
}

export const userState = atom<userInfoProps>({
  key: "userState",
});