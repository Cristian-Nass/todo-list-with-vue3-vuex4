import { ActionTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<UserState, RootState> = {
  setUserInfo(context) {
    console.log(context);
    context.commit("setUserInfo");
  },
};
