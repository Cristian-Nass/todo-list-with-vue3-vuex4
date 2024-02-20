import { ActionTree } from "vuex";
import { TodoList } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<TodoList, RootState> = {
  addTodo(context, payload) {
    context.commit("addTodo", payload);
  },
};
