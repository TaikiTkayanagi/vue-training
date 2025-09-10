<script setup lang="ts">
import { computed, provide, reactive, ref } from 'vue';
import Middle from './components/Middle.vue';

export interface Person {
  name: string,
  point: number,
  note?: string
}

const map = reactive(new Map<number, Person>());
map.set(1, {name: "t1", point: 1, note: undefined})
map.set(2, {name: "t2", point: 10, note: "2回目"})
map.set(3, {name: "t3", point: 30, note: "初回"})
provide("map", map);

setInterval(() => map.set(3, {name: "t4", point: 130, note: "初回"}), 10000);

</script>

<template>
  <Middle />
</template>