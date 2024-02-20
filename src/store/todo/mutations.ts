import { MutationTree } from "vuex";
import { TodoList } from "./types";

export const mutations: MutationTree<TodoList> = {
  addTodo(state, payload) {
    state.todo.push(payload);
    console.log("State", state);
  },
};
