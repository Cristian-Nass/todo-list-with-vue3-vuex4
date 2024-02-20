import { Module } from "vuex";
import { RootState } from "@/store/types";
import { TodoList } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const testDate = {
  loading: false,
  todo: [
    {
      title: "title-1",
      description: "description-1",
      createdAt: new Date(),
      done: false,
    },
    {
      title: "title-2",
      description: "description-2",
      createdAt: new Date(),
      done: false,
    },
  ],
};

const state: TodoList = testDate;

export const todo: Module<TodoList, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
