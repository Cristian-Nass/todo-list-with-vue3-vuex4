import { Module } from "vuex";
import { RootState } from "@/store/types";
import { UserState } from "@/store/user/types";
import { getters } from "@/store/user/getters";
import { mutations } from "@/store/user/mutations";
import { actions } from "@/store/user/actions";

const state: UserState = {
  userName: "Cristian",
  email: "cristian.nass@hotmail.com",
  lastLogin: new Date(),
};
export const user: Module<UserState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
