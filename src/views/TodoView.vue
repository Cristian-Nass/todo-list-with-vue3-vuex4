<template>
  <div class="about">
    <h1>Todo List</h1>
    <!-- <h2>{{ getTodo.loading }}</h2>
    <li v-for="item in getTodo.todo">
      {{ item.title }}
    </li> -->
    <div class="todo-container">
      <div style="text-align: left; flex: 1; margin: 6px">
        <div>Title:</div>
        <input class="input-form" type="text" name="title" ref="titleInput" />
      </div>
      <div style="text-align: left; flex: 1; margin: 6px">
        <div>Description:</div>
        <input
          class="input-form"
          type="text"
          name="description"
          ref="descriptionInput"
        />
      </div>
      <button @click="addTodo" style="width: 100px; margin: 6px">Submit</button>
    </div>
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
    const titleInput = ref<HTMLInputElement | null>(null);
    const descriptionInput = ref<HTMLInputElement | null>(null);
    const todo = computed<TodoList>(() => {
      return store.getters.getTodo;
    });

    const addTodo = () => {
      if (titleInput.value && descriptionInput.value) {
        const title = titleInput.value.value;
        const description = descriptionInput.value.value;
        const todo = {
          title,
          description,
          createdAt: new Date(),
          done: false,
        };
        store.dispatch("addTodo", todo);
      }
    };

    return {
      titleInput,
      descriptionInput,
      todo,
      addTodo,
    };
  },
});
</script>
<style scoped>
.input-form {
  width: 100%;
}
.todo-container {
  display: flex;
  width: 600px;
  background-color: rgb(128, 198, 236);
  margin: 0 auto;
  padding: 10px;
  border-radius: 6px;
  justify-content: space-evenly;
}
</style>
