<script setup lang="ts">
import type { Person } from '@/App.vue';
import { computed, inject } from 'vue';

interface Props {
    id: number
}

const props = defineProps<Props>()
const map = inject("map", new Map<number, Person>())
const person = computed(() => map.get(props.id) as Person)
const addPoint = () => {
    person.value.point += 1 
}

</script>

<template>
    <div>
        <p>名前: {{ person.name }}</p>
        <p>ポイント: {{ person.point }}</p>
        <p>備考: {{ person.note }}</p>
        <input type="number" v-model.number="person.point" />
    </div>
</template>