<script setup lang="ts">
import type { Person } from '@/App.vue';
import { computed, inject } from 'vue';
import OneMember from '@/components/OneMember.vue';

const map = inject("map", new Map<number, Person>()) 

const total = computed(() => {
    let result = 0;
    map.forEach(v => result += v.point)
    return result;
})
</script>

<template>
  <p>合計値: {{ total }}</p>
  <ul>
    <OneMember v-for="[key, value] in map" :id="key"/>
  </ul>
</template>