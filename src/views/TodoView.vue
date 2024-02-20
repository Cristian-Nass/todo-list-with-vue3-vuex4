<template>
  <div class="about">
    <h1>Todo List</h1>
    <!-- <h2>{{ getTodo.loading }}</h2>
    <li v-for="item in getTodo.todo">
      {{ item.title }}
    </li> -->
    <div>{{ message }}</div>
    <div>{{ todo.loading }}</div>
    <li v-for="item in todo.todo">
      {{ item.title }}
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { mapGetters } from "vuex";
import { ref, computed } from "vue";
import store from "@/store";
import { TodoList } from "@/store/todo/types";

export default defineComponent({
  // name: "TodoView",
  // computed: {
  //   ...mapGetters(["getTodo"]),
  // },
  setup() {
    const message = ref("Hello Vue!");
    const todo = computed<TodoList>(() => {
      return store.getters.getTodo;
    });

    return {
      message,
      todo,
    };
  },
});
</script>
