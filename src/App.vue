<script setup lang="ts">
import { computed, ref } from 'vue';
import OneMember from './components/OneMember.vue';

interface Person {
  name: string,
  point: number,
  note?: string
}

const map = ref(new Map<number, Person>());
map.value.set(1, {name: "t1", point: 1, note: undefined})
map.value.set(2, {name: "t2", point: 10, note: "2回目"})
map.value.set(3, {name: "t3", point: 30, note: "初回"})
const total = computed(() => {
  let result = 0;
  map.value.forEach((value) => result += value.point);
  return result;
})

</script>

<template>
  <p>合計値: {{ total }}</p>
  <ul>
    <OneMember v-for="[key, value] in map" v-model:point="value.point" v-bind:key="key" 
    :id="key" :name="value.name" :note="value.note"/>
  </ul>
</template>