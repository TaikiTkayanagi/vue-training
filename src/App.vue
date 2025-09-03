<script lang="ts" setup>
import { computed, reactive } from 'vue';

const data = reactive({redis: 0, pi: 3.14})

const changeTime = () => {
  data.redis = Math.round(Math.random() * 10);
};
const result = computed(() => {
  return data.redis * 2 * data.pi;
});  

setInterval(changeTime, 1000);
</script>

<template>
  <div>
    <h1>{{ data.redis }}の円周率は{{ result }}</h1>
  </div>
</template>