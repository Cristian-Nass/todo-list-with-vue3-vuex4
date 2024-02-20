import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { TodoList } from "./types";

export const getters: GetterTree<TodoList, RootState> = {
  getTodo(state) {
    return state;
  },
};
