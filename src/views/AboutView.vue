<template>
  <div class="about">
    <h1>{{ getUserInfo }}</h1>
    <button @click="setUserInfo">Set User Name</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AboutView",
  methods: {
    ...mapActions(["setUserInfo"]),
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
  },
});
</script>
