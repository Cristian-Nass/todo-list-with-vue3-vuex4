import { createStore } from "vuex";
import { RootState } from "./types";
import { user } from "@/store/user";
import { todo } from "@/store/todo";

export default createStore<RootState>({
  modules: {
    user,
    todo,
  },
  state: { helloMessage: "Hello From Vuex" },
  mutations: {},
  actions: {},
  getters: {
    getMessage(state) {
      return state.helloMessage;
    },
  },
});

// import Vuex, { StoreOptions } from "vuex";
// const store: StoreOptions<RootState> = {
//   state: {
//     helloMessage: "Hello From Vuex",
//   },
//   getters: {
//     getMessage(state) {
//       return state.helloMessage;
//     },
//   },
// };

// export default new Vuex.Store<RootState>(store);
