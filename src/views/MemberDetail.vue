<script setup lang="ts">
import { useMembersStore } from '@/stores/members';
import { computed } from 'vue';

interface Props {
    id: number
}
const props = defineProps<Props>();
const membersStore = useMembersStore();
const c = computed(() => membersStore.getById(props.id))
</script>

<template>
    <div>{{ id }}</div>
    <div>{{ c }}</div>
    <div>会員詳細</div>
</template>
