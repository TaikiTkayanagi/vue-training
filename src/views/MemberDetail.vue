<script setup lang="ts">
interface Props {
    id: number
}
defineProps<Props>();
</script>

<template>
    <div>{{ id }}</div>
    <div>会員詳細</div>
</template>
