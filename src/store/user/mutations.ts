import { MutationTree } from "vuex";
import { UserState } from "./types";

export const mutations: MutationTree<UserState> = {
  setUserInfo(state) {
    console.log(state);
    state.userName = "Reza";
  },
};
