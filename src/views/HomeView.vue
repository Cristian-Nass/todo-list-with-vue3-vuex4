<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <HelloWorld :msg="getMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },

  computed: {
    ...mapGetters<string>(["getMessage"]),
  },
});
</script>
