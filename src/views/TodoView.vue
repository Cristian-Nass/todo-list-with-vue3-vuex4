<template>
  <div class="about">
    <h1>Todo List</h1>
    <!-- <h2>{{ getTodo.loading }}</h2>
    <li v-for="item in getTodo.todo">
      {{ item.title }}
    </li> -->
    <input class="input-form" type="text" name="title" ref="titleInput" />
    <input
      class="input-form"
      type="text"
      name="description"
      ref="descriptionInput"
    />
    <button @click="addTodo" class="input-form">Submit</button>
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
        console.log(todo);
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
  padding: 4px;
  margin: 4px;
}
</style>
