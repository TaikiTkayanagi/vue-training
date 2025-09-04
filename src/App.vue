<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('Hello Vue 3 + Vite + TypeScript');
const isTextColor = ref(true);
const isBgColorBlue = ref(false);
const style = ref({
  textColor: true,
  bgColorBlue: false
})
</script>

<template>
  <p v-bind:class="{ textColor: isTextColor, bgColorBlue: isBgColorBlue }">{{ msg }} </p>
  <p v-bind:classe="style">{{ msg }} </p>
  <p v-bind:class="{ 'test-test': true }">{{ msg }} </p>
</template>

<style>
.textColor {
  color: red;
}

.bgColorBlue {
  background-color: blue;
}

.test-test {
  background-color: blue;
}
</style>