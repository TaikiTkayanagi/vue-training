<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCounterStore } from './stores/counter';

const counterStore = useCounterStore();

</script>

<template>
  <div>
    <p>現在のポイント: {{ counterStore.counter }}</p>
    <p>現在のポイントさらに倍: {{ counterStore.doubleCount }}</p>
    <button v-on:click="counterStore.increment">加算</button>
  </div>
</template>